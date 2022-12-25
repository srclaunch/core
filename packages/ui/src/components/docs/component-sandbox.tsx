import {
  ComponentPropertyDefinition,
  ObjectDefinition,
  Primitives,
} from '@srclaunch/types';
import { useEffect, useState } from 'react';

import {
  getPrimitiveFromTypescriptType,
  getValueFromPrimitive,
} from '../../lib';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  Fill,
  Orientation,
} from '../../types';
import { Canvas } from '../design';
import { ComponentPropertiesEditor } from '../editors';
import { ErrorBoundary } from '../errors';
import { Container, Dock } from '../layout';

export const ComponentSandbox = ({
  component: Component,
  componentProps = {},
}: {
  readonly component: React.ElementType;
  readonly componentProps?: {
    readonly [key: string]: ComponentPropertyDefinition;
  };
}) => {
  const [propertyDocs, setPropertyDocs] =
    useState<ObjectDefinition['properties']>();
  const [propertyValues, setPropertyValues] = useState<{
    [key: string]: unknown;
  }>();

  useEffect(() => {
    let docs: ObjectDefinition['properties'] = {};
    let values: { [key: string]: unknown } = {};

    for (const [key, property] of Object.entries(componentProps)) {
      const primitive = getPrimitiveFromTypescriptType(
        property.type,
      ) as Primitives;

      const defaultValue =
        typeof property.defaultValue === 'object'
          ? (property.defaultValue as { value?: unknown })?.value
          : property.defaultValue;

      docs = {
        ...docs,
        [key]: {
          defaultValue,
          name: property.name,
          required: property.required,
          type: primitive,
        },
      };

      values = {
        ...values,
        [key]:
          getValueFromPrimitive({
            primitive,
            value: defaultValue,
          }) ?? defaultValue,
      };
    }

    setPropertyDocs(docs);
    setPropertyValues(values);
  }, [componentProps]);

  return (
    <Container
      alignHorizontal={AlignHorizontal.Center}
      orientation={Orientation.Horizontal}
      alignVertical={AlignVertical.Center}
      borderRadius={Amount.Default}
      fill={Fill.Both}
    >
      <Dock
        right={
          <ComponentPropertiesEditor
            propertyDocs={propertyDocs}
            propertyValues={propertyValues}
            onUpdate={({ name, value }) => {
              setPropertyValues({
                ...propertyValues,
                [name]: value,
              });
            }}
          />
        }
      >
        <Canvas>
          <ErrorBoundary>
            {Component && <Component {...propertyValues} />}
          </ErrorBoundary>
        </Canvas>
      </Dock>
    </Container>
  );
};
