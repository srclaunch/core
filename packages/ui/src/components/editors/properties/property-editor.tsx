import { ObjectDefinition } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { getInputElementByPrimitive } from '../../../lib';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Fill,
  Orientation,
  Overflow,
  TextSize,
  UpdateEventProps,
} from '../../../types';
import { Container, ContainerProps } from '../../layout/container';
import { Label } from '../../typography/label';

export type PropertyEditorProps = ContainerProps<
  UpdateEventProps<{
    readonly name: string;
    readonly value: unknown;
  }> & {
    readonly groupProperties?: boolean;
    readonly propertyDocs?: ObjectDefinition['properties'];
    readonly propertyValues?: { readonly [key: string]: unknown };
  }
>;

export const PropertyEditor = memo(
  ({
    // fill = Fill.Both,
    backgroundColor = BackgroundColor.Lighter,
    borderRadius = Amount.Least,
    className = '',
    propertyDocs = {},
    propertyValues = {},
    // groupProperties = true,
    onUpdate,
    ...props
  }: PropertyEditorProps): ReactElement => {
    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} property-editor`}
        // fill={fill}
        {...props}
      >
        <Container
          borderBottomColor={BorderColor.Lightest}
          borderRadius={borderRadius}
          borderRadiusTopLeft={Amount.None}
          borderRadiusTopRight={Amount.None}
          fill={Fill.Horizontal}
        >
          {Object.keys(propertyDocs)
            .sort()
            .map(key => {
              const propertyDoc = propertyDocs[key];

              if (!propertyDoc) {
                return;
              }

              const inputElement = getInputElementByPrimitive({
                defaultValue: propertyValues[key] ?? propertyDoc.defaultValue,
                onValueChange: ({ value }) => {
                  // console.log('onCHANGED', key, value);
                  if (onUpdate) {
                    onUpdate({
                      name: key,
                      value,
                    });
                  }
                },
                type: propertyDoc?.type,
              });

              return (
                <Container
                  orientation={Orientation.Horizontal}
                  borderTopColor={BorderColor.Light}
                  borderTopWidth={1}
                  key={key}
                >
                  <Container
                    alignVertical={AlignVertical.Center}
                    overflow={Overflow.ClipHorizontal}
                    padding={Amount.Least}
                    paddingLeft={Amount.Less}
                    paddingRight={Amount.Less}
                    className="property-editor-property-name"
                    minWidth={120}
                    width={120}
                  >
                    <Label tooltip={key} textSize={TextSize.Smaller}>
                      {key}
                    </Label>
                  </Container>

                  <Container
                    alignHorizontal={AlignHorizontal.Left}
                    orientation={Orientation.Horizontal}
                    overflow={Overflow.ClipHorizontal}
                    alignVertical={AlignVertical.Center}
                    className="property-editor-property-value"
                    paddingLeft={Amount.Less}
                    paddingRight={Amount.Less}
                    fill={Fill.Horizontal}
                  >
                    <>{inputElement}</>
                  </Container>
                </Container>
              );
            })}
        </Container>
      </Container>
    );
  },
);
