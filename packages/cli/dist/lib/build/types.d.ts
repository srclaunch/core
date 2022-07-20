import { BuildConfig } from '@srclaunch/types';
export declare type TypesBuildOptions = Pick<BuildConfig, 'input' | 'types' | 'output'>;
export declare function build({ input, types, output }: TypesBuildOptions): Promise<void>;
//# sourceMappingURL=types.d.ts.map