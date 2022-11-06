import { DocumentationType } from '../documentation';
import { File, FileType } from '../storage/file-system';
import { WebApplicationOptions } from './web-application';

interface InputOptions {
  readonly directory: string;
  readonly file?: File;
  readonly files?: readonly File[];
}

interface OutputOptions {
  readonly directory: string;
  readonly file?: File<FileType.JSON | FileType.YAML>;
}

export type DocumentationConfig = WebApplicationOptions & {
  readonly description?: string;
  readonly generate?: {
    readonly input?: InputOptions;
    readonly output?: OutputOptions;
  };
  readonly input?: InputOptions;
  readonly name?: string;
  readonly output?: OutputOptions;
  readonly type: DocumentationType;
};
