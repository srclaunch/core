import { AnyFlags, Result, TypedFlags } from 'meow';

export enum CommandType {
  Project = 'project',
  Workspace = 'workspace',
}

export type RunArguments<C, F> = {
  readonly cli: Result<AnyFlags>;
  readonly config: C;
  readonly flags: F;
};

export type RunFunction<
  C,
  F = Record<string, unknown> & TypedFlags<AnyFlags>,
> = (arguments_: RunArguments<C, F>) => Promise<void>;

export type CommandConstructorArgs<
  C,
  F = Record<string, unknown> & TypedFlags<AnyFlags>,
> = {
  readonly commands?: readonly Command<C, F>[];
  readonly description: string;
  readonly flags?: F;
  readonly name: string;
  readonly run?: RunFunction<C, F>;
  readonly type?: CommandType;
};

export class Command<C, F = Record<string, unknown> & TypedFlags<AnyFlags>> {
  readonly flags?: F;
  readonly name: string;
  private readonly runFunction?: RunFunction<
    C,
    Record<string, unknown> & TypedFlags<AnyFlags>
  >;
  readonly commands: CommandConstructorArgs<
    C,
    Record<string, unknown> & TypedFlags<AnyFlags>
  >['commands'];
  readonly type: CommandType = CommandType.Project;

  constructor(options: CommandConstructorArgs<C, F>) {
    this.name = options.name;
    this.commands = options.commands as CommandConstructorArgs<
      C,
      Record<string, unknown> & TypedFlags<AnyFlags>
    >['commands'];
    this.flags = options.flags;
    this.type = options.type ?? CommandType.Project;
    this.runFunction = options.run as RunFunction<
      C,
      Record<string, unknown> & TypedFlags<AnyFlags>
    >;
  }

  public async run({
    cli,
    config,
    flags,
  }: RunArguments<
    C,
    Record<string, unknown> & TypedFlags<AnyFlags>
  >): Promise<void> {
    if (this.runFunction) {
      return await this.runFunction({
        cli,
        config,
        flags,
      });
    }
  }
}

export async function handleCommand({
  cli,
  config,
  command,
  commands,
  flags,
}: {
  readonly cli: Result<AnyFlags>;
  readonly command: readonly string[];
  readonly commands?: readonly Command<
    any,
    Record<string, unknown> & TypedFlags<AnyFlags>
  >[];
  readonly config: Record<string, unknown>;
  readonly flags: Record<string, unknown> & TypedFlags<AnyFlags>;
}): Promise<void> {
  if (!command || command.length === 0 || !command[0]) {
    console.error('No command specified');
    return;
  }

  if (!commands) {
    console.error('No commands specified');
    return;
  }

  const commandName = command[0];
  const matchingCommand = commands.find(cmd => cmd.name === commandName);

  if (!matchingCommand) {
    console.error(`Unknown command ${commandName}`);
    return;
  }

  if (command.length === 1) {
    matchingCommand.run({
      cli,
      config,
      flags,
    });
  } else if (command.length > 1) {
    handleCommand({
      cli,
      command: command.slice(1),
      commands: matchingCommand?.commands,
      config,
      flags,
    });
  }
}
