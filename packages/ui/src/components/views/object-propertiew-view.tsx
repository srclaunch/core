import { memo, ReactElement } from 'react';

import {
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  ContainerProps,
  Fill,
  Orientation,
  Shadow,
  Size,
  TextColor,
  TextSize,
} from '../../types';
import { Container } from '../layout/container';
import { Label, LabelProps } from '../typography/label';

type ObjectPropertiesViewProps = ContainerProps<
  LabelProps & {
    readonly properties: {
      readonly [key: string]: {
        readonly required?: boolean;
        readonly types: readonly string[];
      };
    };
  }
>;

export const ObjectPropertiesView = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    borderRadius = Amount.Least,
    borderRadiusTopLeft = Amount.None,
    borderRadiusTopRight = Amount.None,
    className = '',
    lineHeight = Size.Default,
    properties,
    textColor = TextColor.Lighter,
    textSize = TextSize.Default,
    ...props
  }: ObjectPropertiesViewProps): ReactElement => {
    const getTypeColors = (
      type: string,
    ): {
      backgroundColor: BackgroundColor | string;
      textColor: TextColor | string;
    } => {
      switch (type) {
        case 'string':
          return {
            backgroundColor: Color.Info,
            textColor: TextColor.White,
          };
        case 'number':
          return {
            backgroundColor: BackgroundColor.Dark,
            textColor: TextColor.Light,
          };
        case 'boolean':
          return {
            backgroundColor: BackgroundColor.Default,
            textColor: TextColor.Darker,
          };
        case 'object':
          return {
            backgroundColor: Color.Info,
            textColor: TextColor.Info,
          };
        case 'ReactElement':
          return {
            backgroundColor: Color.Warning,
            textColor: TextColor.Darker,
          };
        default:
          return {
            backgroundColor: Color.Info,
            textColor: TextColor.Info,
          };
      }
    };

    return (
      <Container
        backgroundColor={backgroundColor}
        border={{
          all: {
            color: BorderColor.Lighter,
          },
        }}
        borderRadius={borderRadius}
        className={`${className} object-editor`}
        shadow={Shadow.High}
        {...props}
      >
        <Container
          borderRadius={borderRadius}
          borderRadiusTopLeft={borderRadiusTopLeft}
          borderRadiusTopRight={borderRadiusTopRight}
          fill={Fill.Horizontal}
        >
          {Object.keys(properties).map((property, key) => {
            return (
              <Container
                alignment={{
                  orientation: Orientation.Horizontal,
                }}
                border={{
                  bottom: {
                    color: BorderColor.Lighter,
                  },
                }}
                key={key}
                size={{
                  fill: Fill.Horizontal,
                }}
              >
                <Container
                  border={{
                    right: {
                      color: BorderColor.Lighter,
                    },
                  }}
                  padding={{
                    left: Amount.Less,
                    right: Amount.Less,
                  }}
                  size={{
                    width: 140,
                  }}
                >
                  <Label lineHeight={Size.Large}>{property}</Label>
                </Container>

                <Container
                  orientation={Orientation.Horizontal}
                  alignVertical={AlignVertical.Center}
                  paddingLeft={Amount.Less}
                  paddingRight={Amount.Less}
                >
                  {properties[property]?.required && (
                    <Label
                      backgroundColor={Color.Error}
                      borderRadius={3}
                      lineHeight={Size.Small}
                      marginRight={Amount.Less}
                      paddingLeft={Amount.Less}
                      paddingRight={Amount.Less}
                      height={Size.Small}
                      textColor={TextColor.White}
                      textSize={TextSize.Small}
                    >
                      Required
                    </Label>
                  )}
                  {properties[property]?.types.map((type, index) => {
                    const typeColors = getTypeColors(type);
                    return (
                      <Label
                        backgroundColor={typeColors.backgroundColor}
                        borderRadius={3}
                        key={index}
                        lineHeight={Size.Small}
                        marginRight={Amount.Less}
                        paddingLeft={Amount.Less}
                        paddingRight={Amount.Less}
                        height={Size.Small}
                        textColor={typeColors.textColor}
                        textSize={TextSize.Small}
                      >
                        {type}
                      </Label>
                    );
                  })}
                </Container>
              </Container>
            );
          })}
        </Container>
      </Container>
    );
  },
);
