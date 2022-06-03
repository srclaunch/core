import { BuildOptions } from '@srclaunch/types';
import fs from 'fs-extra';
import path from 'node:path';
import pc from 'picocolors';
import ts from 'typescript';

export type TypesBuildOptions = Pick<
  BuildOptions,
  'input' | 'types' | 'output'
>;

export async function build({ input, types, output }: TypesBuildOptions) {
  const configPath =
    typeof types === 'object' ? types?.configPath : 'tsconfig.json';
  const tsConfigContents = configPath
    ? await fs.readFile(path.join(path.resolve(), configPath))
    : null;

  if (tsConfigContents) {
    const tsConfig = await JSON.parse(tsConfigContents.toString());

    const { options: tsOptions } = ts.parseJsonConfigFileContent(
      tsConfig,
      ts.sys,
      path.resolve(),
    );

    const srcFiles = await fs.readdir(
      path.join(path.resolve(), input?.directory ?? 'src'),
    );

    const buildFiles = srcFiles
      .filter(f => f.endsWith('.ts') || f.endsWith('.tsx'))
      .map(file => {
        return path.join(path.resolve(), input?.directory ?? 'src', file);
      });
    const program: ts.Program = ts.createProgram(buildFiles, tsOptions);
    const emitResult = program.emit();
    const allDiagnostics = ts
      .getPreEmitDiagnostics(program)
      .concat(emitResult.diagnostics);

    for (const diagnostic of allDiagnostics) {
      if (diagnostic.file) {
        const { line, character } =
          diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
        const message = ts.flattenDiagnosticMessageText(
          diagnostic.messageText,
          '\n',
        );
        console.log(
          `${diagnostic.file.fileName} (${line + 1},${
            character + 1
          }): ${message}`,
        );
      } else {
        console.log(
          `${ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')}`,
        );
      }
    }
    console.info(`${pc.green('✔')} compiled types`);
  }
}
