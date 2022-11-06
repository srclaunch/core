import { DefaultValue, MenuField, Model, Primitives } from '@srclaunch/types';
import { DateTime } from 'luxon';
export declare enum ChangeStatus {
    Added = "added",
    Removed = "removed",
    Modified = "modified",
    Unchanged = "unchanged"
}
export declare enum ModelProperty {
    Description = "description",
    Fields = "fields",
    Name = "name",
    Relationships = "relationships"
}
export declare enum FieldProperty {
    AutoIncrement = "auto-increment",
    DefaultValue = "default-value",
    Description = "description",
    Label = "label",
    Menu = "menu",
    Name = "name",
    Required = "required",
    Rules = "rules",
    Type = "type",
    Unique = "unique"
}
export declare enum RelationshipProperty {
    HasMany = "has-many",
    HasOne = "has-one",
    BelongsTo = "belongs-to"
}
export declare type StringValueChangeSet = {
    readonly status: ChangeStatus;
    readonly oldValue?: string;
    readonly newValue?: string;
};
export declare type BooleanValueChangeSet = {
    readonly status: ChangeStatus;
    readonly oldValue?: boolean;
    readonly newValue?: boolean;
};
export declare type DefaultValueChangeSet = {
    readonly status: ChangeStatus;
    readonly oldValue?: DefaultValue.DateTime | DefaultValue.True | DefaultValue.False | string | number | Record<string, unknown>;
    readonly newValue?: DefaultValue.DateTime | DefaultValue.True | DefaultValue.False | string | number | Record<string, unknown>;
};
export declare type MenuValueChangeSet = {
    readonly status: ChangeStatus;
    readonly oldValue?: readonly MenuField[];
    readonly newValue?: readonly MenuField[];
};
export declare type ModelChangeSet = {
    readonly [ModelProperty.Description]?: StringValueChangeSet;
    readonly [ModelProperty.Fields]?: FieldChangeSet;
    readonly [ModelProperty.Name]?: StringValueChangeSet;
    readonly [ModelProperty.Relationships]?: RelationshipChangeSet;
};
export declare type FieldChangeSet = {
    readonly [fieldName: string]: {
        readonly [FieldProperty.AutoIncrement]?: BooleanValueChangeSet;
        readonly [FieldProperty.DefaultValue]?: DefaultValueChangeSet;
        readonly [FieldProperty.Description]?: StringValueChangeSet;
        readonly [FieldProperty.Label]?: StringValueChangeSet;
        readonly [FieldProperty.Menu]?: MenuValueChangeSet;
        readonly [FieldProperty.Name]?: StringValueChangeSet;
        readonly [FieldProperty.Required]?: BooleanValueChangeSet;
        readonly [FieldProperty.Type]?: Primitives;
        readonly [FieldProperty.Unique]?: BooleanValueChangeSet;
    };
};
export declare type RelationshipChangeSet = {
    readonly [key in RelationshipProperty]?: {
        readonly status: ChangeStatus;
        readonly oldValue?: any;
        readonly newValue?: any;
    };
};
export declare type ModelMigration = {
    readonly changeset: ModelChangeSet;
    readonly created?: DateTime;
    readonly executed?: DateTime;
    readonly version: number;
};
export declare function getModelDiff(oldModel: Model, newModel: Model): void;
export declare function getDatabaseDiff(oldModels: readonly Model[], newModels: readonly Model[]): void;
//# sourceMappingURL=index.d.ts.map