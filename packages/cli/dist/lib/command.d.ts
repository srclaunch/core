import { AnyFlags, Result, TypedFlags } from 'meow';
export declare enum CommandType {
    Project = "project",
    Workspace = "workspace"
}
export declare type RunArguments<C, F> = {
    readonly cli: Result<AnyFlags>;
    readonly config: C;
    readonly flags: F;
};
export declare type RunFunction<C, F = Record<string, unknown> & TypedFlags<AnyFlags>> = (arguments_: RunArguments<C, F>) => Promise<void>;
export declare type CommandConstructorArgs<C, F = Record<string, unknown> & TypedFlags<AnyFlags>> = {
    readonly commands?: readonly Command<C, F>[];
    readonly description: string;
    readonly flags?: F;
    readonly name: string;
    readonly run?: RunFunction<C, F>;
    readonly type?: CommandType;
};
export declare class Command<C, F = Record<string, unknown> & TypedFlags<AnyFlags>> {
    readonly flags?: F;
    readonly name: string;
    private readonly runFunction?;
    readonly commands: CommandConstructorArgs<C, Record<string, unknown> & TypedFlags<AnyFlags>>['commands'];
    readonly type: CommandType;
    constructor(options: CommandConstructorArgs<C, F>);
    run({ cli, config, flags, }: RunArguments<C, Record<string, unknown> & TypedFlags<AnyFlags>>): Promise<void>;
}
export declare function handleCommand({ cli, config, command, commands, flags, }: {
    readonly cli: Result<AnyFlags>;
    readonly command: readonly string[];
    readonly commands?: readonly Command<any, Record<string, unknown> & TypedFlags<AnyFlags>>[];
    readonly config: Record<string, unknown>;
    readonly flags: Record<string, unknown> & TypedFlags<AnyFlags>;
}): Promise<void>;
//# sourceMappingURL=command.d.ts.map