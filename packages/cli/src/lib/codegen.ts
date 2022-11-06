import fs from 'fs-extra';
import mustache from 'mustache';

enum CodeGenOperationType {
  AddFile = 'add-file',
  CreateDirectory = 'create-directory',
}

interface CodeGenOperation {
  readonly content?: string;
  readonly path: string;
  readonly props?: Record<string, unknown>;
  readonly type: CodeGenOperationType;
}

export class CodeGenWorkflow {
  // eslint-disable-next-line functional/prefer-readonly-type
  private operations: Array<CodeGenOperation> = [];
  public constructor() {}

  public addFile(
    path: string,
    content?: string,
    props?: Record<string, unknown>,
  ) {
    this.operations = [
      ...this.operations,
      {
        content: content && props ? mustache.render(content, props) : content,
        path,
        props,
        type: CodeGenOperationType.AddFile,
      },
    ];

    return this;
  }

  public createDirectory(path: string) {
    this.operations = [
      ...this.operations,
      {
        path,
        type: CodeGenOperationType.CreateDirectory,
      },
    ];
    return this;
  }

  public async generate() {
    for (const operation of this.operations) {
      switch (operation.type) {
        case CodeGenOperationType.AddFile:
          console.log(`Adding file '${operation.path}'`);

          await fs.writeFile(operation.path, operation.content);
          break;
        case CodeGenOperationType.CreateDirectory:
          console.log(`Creating directory '${operation.path}'`);
          await fs.mkdirp(operation.path);

          break;
        default:
          throw new Error(`Unknown operation type ${operation.type}`);
      }
    }
  }
}
