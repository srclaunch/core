import { DefaultValue, MenuField, Model, Primitives } from '@srclaunch/types';
import { DateTime } from 'luxon';

// export declare type ModelProps<T = {}> = {
//   created?: DateTime;
//   description?: string;
//   fields: Record<string, Field>;
//   id?: string;
//   name: string;
//   relationships?: Relationship;
//   updated?: DateTime;
// };

export enum ChangeStatus {
  Added = 'added',
  Removed = 'removed',
  Modified = 'modified',
  Unchanged = 'unchanged',
}

export enum ModelProperty {
  Description = 'description',
  Fields = 'fields',
  Name = 'name',
  Relationships = 'relationships',
}

export enum FieldProperty {
  AutoIncrement = 'auto-increment',
  DefaultValue = 'default-value',
  Description = 'description',
  Label = 'label',
  Menu = 'menu',
  Name = 'name',
  Required = 'required',
  Rules = 'rules',
  Type = 'type',
  Unique = 'unique',
}

export enum RelationshipProperty {
  HasMany = 'has-many',
  HasOne = 'has-one',
  BelongsTo = 'belongs-to',
}

export type StringValueChangeSet = {
  readonly status: ChangeStatus;
  readonly oldValue?: string;
  readonly newValue?: string;
};

export type BooleanValueChangeSet = {
  readonly status: ChangeStatus;
  readonly oldValue?: boolean;
  readonly newValue?: boolean;
};

export type DefaultValueChangeSet = {
  readonly status: ChangeStatus;
  readonly oldValue?:
    | DefaultValue.DateTime
    | DefaultValue.True
    | DefaultValue.False
    | string
    | number
    | Record<string, unknown>;
  readonly newValue?:
    | DefaultValue.DateTime
    | DefaultValue.True
    | DefaultValue.False
    | string
    | number
    | Record<string, unknown>;
};

export type MenuValueChangeSet = {
  readonly status: ChangeStatus;
  readonly oldValue?: readonly MenuField[];
  readonly newValue?: readonly MenuField[];
};
export type ModelChangeSet = {
  readonly [ModelProperty.Description]?: StringValueChangeSet;
  readonly [ModelProperty.Fields]?: FieldChangeSet;
  readonly [ModelProperty.Name]?: StringValueChangeSet;
  readonly [ModelProperty.Relationships]?: RelationshipChangeSet;
};

export type FieldChangeSet = {
  readonly [fieldName: string]: {
    readonly [FieldProperty.AutoIncrement]?: BooleanValueChangeSet;
    readonly [FieldProperty.DefaultValue]?: DefaultValueChangeSet;
    readonly [FieldProperty.Description]?: StringValueChangeSet;
    readonly [FieldProperty.Label]?: StringValueChangeSet;
    readonly [FieldProperty.Menu]?: MenuValueChangeSet;
    readonly [FieldProperty.Name]?: StringValueChangeSet;
    readonly [FieldProperty.Required]?: BooleanValueChangeSet;
    // [FieldProperty.Rules]?: RoleRuleChangeSet;
    readonly [FieldProperty.Type]?: Primitives;
    readonly [FieldProperty.Unique]?: BooleanValueChangeSet;
  };
};

export type RelationshipChangeSet = {
  readonly [key in RelationshipProperty]?: {
    readonly status: ChangeStatus;
    readonly oldValue?: any;
    readonly newValue?: any;
  };
};

const changeSet: ModelChangeSet = {
  [ModelProperty.Fields]: {
    name: {
      [FieldProperty.AutoIncrement]: {
        status: ChangeStatus.Unchanged,
      },
      [FieldProperty.Label]: {
        newValue: 'Project Name',
        oldValue: 'Name',
        status: ChangeStatus.Modified,
      },
    },
  },
  [ModelProperty.Name]: {
    status: ChangeStatus.Unchanged,
  },
};

const relationshipChangeSet: ModelChangeSet = {
  [ModelProperty.Relationships]: {
    [RelationshipProperty.HasMany]: {
      status: ChangeStatus.Unchanged,
    },
    [RelationshipProperty.HasOne]: {
      newValue: ['Project'],
      oldValue: ['Project', 'Workspace'],
      status: ChangeStatus.Modified,
    },
  },
};

// const fieldChangeSet: FieldChangeSet = {
//   name: {
//     [FieldProperty.Description]: {
//       change: ChangeType.Modified,
//     },
//   },
// };

export type ModelMigration = {
  readonly changeset: ModelChangeSet;
  readonly created?: DateTime;
  readonly executed?: DateTime;
  readonly version: number;
};

function getStringFieldChangeSet() {}

export function getModelDiff(oldModel: Model, newModel: Model) {
  const changeset: ModelChangeSet = {
    // [ModelProperty.Description]: {},
    [ModelProperty.Fields]: {},
    // [ModelProperty.Name]: {},
    [ModelProperty.Relationships]: {},
  };

  // if (oldModel.description !== newModel.description) {
  //   changeset[ModelProperty.Description] = {
  //     newValue: newModel.description,
  //     oldValue: oldModel.description,
  //     status: ChangeStatus.Modified,
  //   };
  // }

  // if (oldModel.fields.length !== newModel.fields.length) {
  //   changeset[ModelProperty.Fields] = {
  //     newValue: newModel.fields,
  //     oldValue: oldModel.fields,
  //     // status: ChangeStatus.Modified,
  //   };
  // }

  // if (oldModel.name !== newModel.name) {
  //   changeset[ModelProperty.Name] = {
  //     newValue: newModel.name,
  //     oldValue: oldModel.name,
  //     status: ChangeStatus.Modified,
  //   };
  // }

  // if (oldModel.relationships.length !== newModel.relationships.length) {
  //   changeset[ModelProperty.Relationships] = {
  // newValue: newModel.relationships,
  // oldValue: oldModel.relationships,
  // status: ChangeStatus.Modified,
  // };
  // }

  // return changeset;
}

export function getDatabaseDiff(
  oldModels: readonly Model[],
  newModels: readonly Model[],
) {}
