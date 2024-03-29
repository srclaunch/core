import { BuildOptions } from '@srclaunch/types';
export declare type TypesBuildOptions = Pick<BuildOptions, 'input' | 'output' | 'types'>;
export declare function build({ input, types, output }: TypesBuildOptions): Promise<void>;
//# sourceMappingURL=types.d.ts.map