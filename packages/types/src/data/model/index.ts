import { ISO8601 } from '../primitive';

import { ModelField } from './field';
import { Relationship } from './relationship';

export enum ModelType {
  DomainModel = 'domain_entity',
  GenericModel = 'generic_entity',
}

export type ModelProps<T = {}> = {
  created?: ISO8601;
  description?: string;
  fields: Record<string, ModelField>;
  id?: string; // This won't be optional when entities are stored in a database instead of a file.
  name: string;
  relationships?: Relationship;
  updated?: ISO8601;
} & T;

export class Model implements ModelProps {
  created?: ISO8601;
  description?: string;
  fields: Record<string, ModelField>;
  id?: string; // This won't be optional when entities are stored in a database instead of a file.
  name: string;
  relationships?: Relationship;
  updated?: ISO8601;

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
