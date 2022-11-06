import { ObjectDefinition, ObjectPropertyDefinition } from '@srclaunch/types';
import { memo, ReactElement, useEffect, useRef, useState } from 'react';

import { Amount, BackgroundColor, Fill, Overflow } from '../../../types';
import { Container } from '../../layout/container';
import { CollapsibleMenu } from '../../navigation/collapsible-menu';
import { PropertyEditor, PropertyEditorProps } from './property-editor';
// import { PropertiesGroup } from './properties-group';

const CommonProps = new Set([
  'as',
  'children',
  'className',
  'id',
  'ref',
  'style',
]);
// const EventProps = new Set(['events']);
// const FormProps = new Set(['form', 'name']);
// const StateProps = new Set(['states']);

const AnimationProps = new Set([
  'animateFrom',
  'animateTo',
  'animationDelay',
  'animationDuration',
  'animationEasing',
  'animationIterations',
  'animationName',
  'animationState',
]);

const BackgroundProps = new Set([
  'backgroundColor',
  'backgroundColorOpacity',
  'backgroundImage',
  'backgroundImageRepeat',
  'backgroundImageSize',
]);

const BorderProps = new Set([
  'borderColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderRightColor',
  'borderTopColor',
  'borderBottomStyle',
  'borderLeftStyle',
  'borderRightStyle',
  'borderTopStyle',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderStyle',
  'borderWidth',
]);

const BorderRadiusProps = new Set([
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderRadius',
]);

const CursorProps = new Set(['cursor']);

const DepthProps = new Set(['depth']);

const ShadowProps = new Set([
  'shadow',
  'shadowBlur',
  'shadowColor',
  'shadowOpacity',
  'shadowSpread',
  'shadowX',
  'shadowY',
]);

const SizeProps = new Set([
  'height',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'size',
  'width',
]);

const TransformProps = new Set([
  'perspective',
  'perspectiveOrigin',
  'rotate',
  'rotateX',
  'rotateY',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'skewX',
  'skewY',
  'transformOriginX',
  'transformOriginY',
  'translateX',
  'translateY',
]);

const VisibilityProps = new Set(['hidden', 'opacity', 'visible']);

const AppearanceProps = new Set([
  ...AnimationProps,
  ...BackgroundProps,
  ...BorderProps,
  ...BorderRadiusProps,
  ...CursorProps,
  ...DepthProps,
  ...ShadowProps,
  ...SizeProps,
  ...TransformProps,
  ...VisibilityProps,
]);

const AlignmentProps = new Set([
  'alignHorizontal',
  'alignVertical',
  'fill',
  'orientation',
  'overflow',
]);

const MarginProps = new Set([
  'margin',
  'marginBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
]);

const PaddingProps = new Set([
  'padding',
  'paddingBottom',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
]);

const PositionProps = new Set([
  'position',
  'positionBottom',
  'positionLeft',
  'positionRight',
  'positionTop',
]);

const LayoutProps = new Set([
  ...AlignmentProps,
  ...MarginProps,
  ...PaddingProps,
  ...PositionProps,
]);

const KnownProps = new Set([
  ...CommonProps,
  // ...EventProps,
  // ...FormProps,
  // ...StateProps,
  ...AppearanceProps,
  ...LayoutProps,
]);

export type GroupDefinitions = {
  readonly [name: string]: {
    readonly docs?: ObjectDefinition['properties'];
    readonly label?: string;
    readonly properties?: ReadonlySet<string>;
    readonly values?: { readonly [key: string]: unknown };
  };
};

type ComponentPropertiesEditorProps = PropertyEditorProps & {
  readonly groupDefinitions?: GroupDefinitions;
};

export const ComponentPropertiesEditor = memo(
  ({
    fill = Fill.Both,
    backgroundColor = BackgroundColor.Lightest,
    borderRadius = Amount.Least,
    className = '',
    groupDefinitions = {
      alignment: {
        label: 'Alignment',
        properties: AlignmentProps,
      },
      background: {
        label: 'Background',
        properties: BackgroundProps,
      },
      border: {
        label: 'Border',
        properties: BorderProps,
      },
      borderRadius: {
        label: 'Border Radius',
        properties: BorderRadiusProps,
      },
      common: {
        label: 'Common',
        properties: CommonProps,
      },
      cursor: {
        label: 'Cursor',
        properties: CursorProps,
      },
      depth: {
        label: 'Depth',
        properties: DepthProps,
      },
      margin: {
        label: 'Margin',
        properties: MarginProps,
      },
      padding: {
        label: 'Padding',
        properties: PaddingProps,
      },
      position: {
        label: 'Position',
        properties: PositionProps,
      },
      shadow: {
        label: 'Shadow',
        properties: ShadowProps,
      },
      size: {
        label: 'Size',
        properties: SizeProps,
      },
      transform: {
        label: 'Transform',
        properties: TransformProps,
      },
      unknown: {
        label: 'Unknown',
      },
      visibility: {
        label: 'Visibility',
        properties: VisibilityProps,
      },
    },
    propertyDocs = {},
    propertyValues = {},
    // groupProperties = true,
    onUpdate,
    ...props
  }: ComponentPropertiesEditorProps): ReactElement => {
    const [propertyGroups, setPropertyGroups] = useState<{
      [name: string]: {
        docs?: {
          [key: string]: ObjectPropertyDefinition;
        };
        readonly label?: string;
        readonly properties?: ReadonlySet<string>;
        values?: {
          [key: string]: unknown;
        };
      };
    }>(groupDefinitions);

    const propertyGroupsRef = useRef(groupDefinitions);

    useEffect(() => {
      for (const [name, value] of Object.entries(propertyDocs)) {
        for (const [groupName, group] of Object.entries(groupDefinitions)) {
          if (!KnownProps.has(name)) {
            propertyGroupsRef.current = {
              ...propertyGroupsRef.current,
              unknown: {
                ...propertyGroupsRef.current['unknown'],
                docs: {
                  ...propertyGroupsRef.current['unknown']?.docs,
                  [name]: value,
                },
              },
            };
          } else if (group.properties?.has(name)) {
            propertyGroupsRef.current = {
              ...propertyGroupsRef.current,
              [groupName]: {
                ...propertyGroupsRef.current[groupName],
                docs: {
                  ...propertyGroupsRef.current[groupName]?.docs,
                  [name]: value,
                },
              },
            };
          }
        }
      }

      setPropertyGroups(propertyGroupsRef.current);
    }, [propertyDocs]);

    useEffect(() => {
      for (const [name, value] of Object.entries(propertyValues)) {
        for (const [groupName, group] of Object.entries(groupDefinitions)) {
          if (!KnownProps.has(name)) {
            propertyGroupsRef.current = {
              ...propertyGroupsRef.current,
              unknown: {
                ...propertyGroupsRef.current['unknown'],
                values: {
                  ...propertyGroupsRef.current['unknown']?.values,
                  [name]: value,
                },
              },
            };
          } else if (group.properties?.has(name)) {
            propertyGroupsRef.current = {
              ...propertyGroupsRef.current,
              [groupName]: {
                ...propertyGroupsRef.current[groupName],
                values: {
                  ...propertyGroupsRef.current[groupName]?.values,
                  [name]: value,
                },
              },
            };
          }
        }
      }

      setPropertyGroups(propertyGroupsRef.current);
    }, [propertyValues]);

    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} component-properties-editor`}
        fill={fill}
        {...props}
      >
        <CollapsibleMenu
          items={[
            ...Object.entries(propertyGroupsRef.current).map(
              ([name, group]) => ({
                content: (
                  <PropertyEditor
                    propertyDocs={group.docs}
                    propertyValues={group.values}
                    onUpdate={onUpdate}
                  />
                ),
                label: group.label,
              }),
            ),
          ]}
        />
      </Container>
    );
  },
);

/*
as
enum
className
string
form
string
id
string
name
string
ref
enum
style
CSSProperties
alignment
Alignment
animations
readonly Animation[]
background
Background
border
Border
borderRadius
BorderRadius
cursor
enum
depth
enum
events
Events<undefined>
margin
Margin
padding
Padding
position
Position
scrollable
enum
shadow
enum
size
Size
states
States<ContainerProps>
transform
Transform
visibility
Visibility
icon
IconProps
label
string
loading
enum
value
number
*/
