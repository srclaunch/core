import childProcess, { ChildProcess } from 'node:child_process';
import EventEmitter from 'node:events';
// import { EventEmitter } from 'node:stream';
import pc from 'picocolors';

export class Process extends EventEmitter {
  // eslint-disable-next-line functional/prefer-readonly-type
  private process?: ChildProcess;
  // eslint-disable-next-line functional/prefer-readonly-type
  private invoked = false;
  // eslint-disable-next-line functional/prefer-readonly-type
  private output: readonly string[] = [];
  private readonly args: Record<string, unknown>;

  public constructor(
    private readonly command: string,
    args?: Record<string, unknown>,
  ) {
    super();
    this.args = args || {};
  }

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  override emit(eventName: string | symbol, args?: unknown): boolean {
    return super.emit(eventName, args);
  }

  public async run() {
    if (!this.process) {
      throw new Error('Process not initialized');
    }

    // listen for errors as they may prevent the exit event from firing
    this.process.on('error', error => {
      if (this.invoked) return;
      this.invoked = true;

      this.emit('error', error);
    });

    // execute the callback once the process has finished running
    this.process.on('exit', code => {
      if (this.invoked) return;
      this.invoked = true;
      const error = code === 0 ? null : new Error('exit code ' + code);
      this.emit('error', error);
    });

    this.process.stdout?.on('data', data => {
      this.output = [...this.output, data.toString()];
      this.emit('data', data);
    });

    this.process.stderr?.on('data', data => {
      this.output = [...this.output, data.toString()];
      this.emit('data', data);
    });

    this.process.on('close', code => {
      if (code !== 0) {
        this.emit('close');
        // console.error(pc.red(`Process exited with code ${code}`));
      }
    });

    this.process = childProcess.spawn(this.command, [], {
      env: Object.assign({}, process.env, this.args),
      shell: true,
      stdio: 'pipe',
    });
  }

  public kill() {
    if (!this.process) {
      throw new Error('Process not initialized');
    }

    this.process.kill();
  }
}
