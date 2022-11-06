import { InteractiveModeFlagType } from './lib/flags';
export declare const helpMessage = "\nUsage\n  $ srclaunch <command>\n\nCommands\n  build - Build SrcLaunch project if srclaunch.configon is found in the current directory\n  models\n    * build - Build models into Sequelize models, Typescript definitions and JSON\n  test - Run tests and collect coverage\n\nTo view information for a specific command add \"help\" after the command name, for example:\n  $ srclaunch build help\n";
export declare const cli: import("meow").Result<InteractiveModeFlagType>;
export declare function main(): Promise<void>;
declare const _default: Promise<void>;
export default _default;
export { type Command, CommandType } from './lib/command';
//# sourceMappingURL=index.d.ts.map