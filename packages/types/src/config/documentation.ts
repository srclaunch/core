import { DocumentationType } from '../documentation';
import { File, FileType } from '../storage/file-system';
import { WebApplicationOptions } from './web-application';

export type DocumentationConfig = WebApplicationOptions & {
  readonly autoGenerate?: boolean;
  readonly description?: string;
  readonly input?: {
    readonly directory: string;
    readonly file?: File;
    readonly files?: readonly File[];
  };
  readonly name?: string;
  readonly output?: {
    readonly directory: string;
    readonly file?: File<FileType.JSON | FileType.YAML>;
  };
  readonly type: DocumentationType;
};
