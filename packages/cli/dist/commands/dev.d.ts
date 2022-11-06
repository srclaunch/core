import { WorkspaceConfig } from '@srclaunch/types';
import { TypedFlags } from 'meow';
import { Package } from 'update-notifier';
import { Command } from '../lib/command';
import { InteractiveModeFlagType } from '../lib/flags';
declare const _default: Command<WorkspaceConfig & {
    readonly package: Package;
}, TypedFlags<InteractiveModeFlagType>>;
export default _default;
//# sourceMappingURL=dev.d.ts.map