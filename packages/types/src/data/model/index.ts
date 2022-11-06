import { ISO8601 } from '../primitive';
import { ModelField } from './field';
import { Relationship } from './relationship';

export enum ModelType {
  DomainModel = 'domain_entity',
  GenericModel = 'generic_entity',
}

export type ModelProps<T = {}> = T & {
  readonly created?: ISO8601;
  readonly description?: string;
  readonly fields: Record<string, ModelField>;
  readonly id?: string; // This won't be optional when entities are stored in a database instead of a file.
  readonly name: string;
  readonly relationships?: Relationship;
  readonly updated?: ISO8601;
};

export class Model implements ModelProps {
  readonly created?: ISO8601;
  readonly description?: string;
  readonly fields: Record<string, ModelField>;
  readonly id?: string; // This won't be optional when entities are stored in a database instead of a file.
  readonly name: string;
  readonly relationships?: Relationship;
  readonly updated?: ISO8601;

  constructor(props: ModelProps) {
    const { created, description, fields, name, id, relationships, updated } =
      props;

    this.created = created;
    this.description = description;
    this.fields = fields;
    this.id = id;
    this.name = name;
    this.relationships = relationships;
    this.updated = updated;
  }
}

export * from './defaults';
export * from './field';
export * from './relationship';
