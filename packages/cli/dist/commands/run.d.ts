import { ProjectConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Command } from '../lib/command';
declare const _default: Command<ProjectConfig, TypedFlags<{
    readonly ssr: {
        readonly default: false;
        readonly description: "Serve web application using server-side rendering";
        readonly type: "boolean";
    };
}>>;
export default _default;
//# sourceMappingURL=run.d.ts.map