import { Changeset } from '@srclaunch/types';
export declare function createChangeset({ files, message, scope, type, }: Omit<Changeset, 'files' | 'type'> & {
    files: string | string[];
    type: Changeset['type'] | string;
}): Promise<{
    commitMessage: string;
}>;
//# sourceMappingURL=changesets.d.ts.map