import { Model, Primitives } from '@srclaunch/types';
import {
  createElement,
  memo,
  ReactElement,
  SyntheticEvent,
  useState,
} from 'react';
import styled from 'styled-components';

import { fetchFromObject } from '../../../lib/data/object';
// import { downloadDataAsFile } from '@srclaunch/actions';
// import { formatObjectToCSVData } from '@srclaunch/transform';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColors,
  BorderColors,
  BorderStyle,
  Cursor,
  Depth,
  DepthShadow,
  Fill,
  Orientation,
  Overflow,
  Size,
  Sizes,
  TextColors,
  TextSize,
} from '../../../types';
import { Button, ButtonProps, ButtonType } from '../../forms/buttons/Button';
import { MenuButton, MenuButtonProps } from '../../forms/buttons/MenuButton';
import {
  SearchInput,
  SearchInputProps,
} from '../../forms/inputs/text/SearchInput';
import { Container, ContainerProps } from '../../layout/Container';
import { Scrollable } from '../../layout/Scrollable';
import { Spacer } from '../../layout/Spacer';
import { LoadingOverlay } from '../../progress/LoadingOverlay';
import { Label } from '../../typography/Label';
import { DataGridCell } from './DataGridCell';

export enum DataGridDisplayType {
  Card = 'card',
  Table = 'table',
}

export type DataGridColumn = {
  readonly align?: AlignHorizontal;
  readonly label: string;
  readonly fallbackField?: string;
  readonly field: string;
  readonly fields?: readonly string[];
  readonly size?: Size;
  readonly type: Primitives;
};

export type DataGridProps = ContainerProps & {
  readonly className?: string;
  readonly columns: readonly DataGridColumn[];
  readonly columnCount?: number;
  readonly data?: readonly Record<string, Primitives | any>[];
  readonly display?: DataGridDisplayType;
  readonly header?: {
    readonly create?: ButtonProps;
    readonly search?: SearchInputProps;
    readonly export?: MenuButtonProps;
  };
  readonly hideOnProp?: string;
  readonly loading?: boolean;
  readonly loaded?: boolean;
  readonly model?: Model;
  readonly onItemClick?: (row: Record<string, unknown>) => unknown;
  readonly template?: {
    readonly card?: ({
      // onClick,
      row,
    }: {
      // onClick?: (row: Record<string, Primitives>) => unknown;
      readonly row: Record<string, Primitives>;
    } & ContainerProps) => ReactElement;
    readonly row?: ({
      // onClick,
      row,
    }: {
      // onClick?: (row: Record<string, Primitives>) => unknown;
      readonly row: Record<string, Primitives>;
    } & ContainerProps) => ReactElement;
  };
};

export const DataGrid = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
    columns,
    columnCount = 3,
    data,
    depth = Depth.Highest,
    display = DataGridDisplayType.Table,
    header,
    hideOnProp,
    loaded,
    model,
    onItemClick,
    shadow = DepthShadow.Highest,
    size = {},
    states = {},
    template,
    ...props
  }: DataGridProps): ReactElement => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [hoveredRow, setHoveredRow] = useState<number | undefined>();
    const MIN_COLUMN_WIDTH = 150;
    const MAX_COLUMN_WIDTH = 300;
    // const [totalWidth, setTotalWidth] = useState<number>(0);

    // useEffect(() => {
    //   if (columns.length) {
    //     // const width = columns.reduce((a, b, i) => {
    //     //   return (i === 1 ? a.minWidth : a) + b.minWidth;
    //     // }, 0);

    //     const width = columns.reduce((a, b) => a + (b.minWidth || 0), 0);

    //     setTotalWidth(width);
    //   }
    // }, [columns]);

    if (!columns) {
      return (
        <Container
          alignment={{
            vertical: AlignVertical.Top,
          }}
          background={{ color: BackgroundColors.DataGrid, ...background }}
          borderRadius={{ all: Amount.Least, ...borderRadius }}
          className={`${className} data-grid`}
          shadow={shadow}
          states={states}
          {...props}
        >
          <Label>No columns defined</Label>
        </Container>
      );
    }

    const minHeight = `calc(${data?.length ?? 1 + 1} * ${Sizes.Large})`;

    return (
      <Container
        alignment={{
          vertical: AlignVertical.Top,
        }}
        background={background}
        borderRadius={{ all: Amount.Least, ...borderRadius }}
        className={`${className} data-grid`}
        shadow={shadow}
        size={{
          ...size,
        }}
        states={states}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          states={{
            state: {
              visible: states.state?.loading ?? false,
            },
          }}
        />

        {header && Object.keys(header).length > 0 && (
          <Container
            alignment={{
              orientation: Orientation.Horizontal,
              vertical: AlignVertical.Center,
            }}
            background={{
              color: BackgroundColors.Lighter,
            }}
            borderRadius={{
              topLeft: Amount.Least,
              topRight: Amount.Least,
              ...borderRadius,
            }}
            className="data-grid-header"
            padding={{ left: Amount.Less, right: Amount.Less }}
            size={{ height: Sizes.Larger }}
          >
            {header.search && (
              <SearchInput
                events={{
                  input: {
                    onValueChange: ({ value }) => {
                      setSearchTerm(value ?? '');
                    },
                  },
                }}
                margin={{
                  right: Amount.Less,
                }}
                name="search-input"
                placeholder={header.search.placeholder}
                size={{
                  width: 160,
                  ...header.search.size,
                }}
                {...header.search}
              />
            )}

            <Spacer
              size={{
                fill: Fill.Horizontal,
              }}
            />

            {header.export && (
              <MenuButton
                menu={[
                  {
                    events: {
                      mouse: {
                        // onClick: () =>
                        // downloadDataAsFile({
                        //   data: formatObjectToCSVData({
                        //     // data: [],
                        //     objectType: 'EXPENSE',
                        //   }),
                        //   fileName: 'expenses',
                        // }),
                      },
                    },
                    label: 'Export to CSV',
                  },
                ]}
                label="Export"
                size={{
                  ...header.export.size,
                }}
                {...header.export}
              />
            )}

            {header.create && (
              <Button
                lineHeight={Sizes.Default}
                textSize={header.create.textSize ?? TextSize.Default}
                type={header.create.type ?? ButtonType.Primary}
                // size={{
                //   height: Sizes.Small,
                //   ...header.create.size,
                // }}
                {...header.create}
              >
                {header.create.label}
              </Button>
            )}
          </Container>
        )}

        <Container
          borderRadius={
            !header ? { all: Amount.Least, ...borderRadius } : undefined
          }
          className="data-grid-grid"
          events={{
            ui: {
              onScroll: (e: SyntheticEvent) => e.preventDefault(),
            },
          }}
        >
          {display === DataGridDisplayType.Table ? (
            <>
              <Container
                alignment={{
                  horizontal: AlignHorizontal.Left,
                  orientation: Orientation.Horizontal,
                }}
                background={{ color: BackgroundColors.Default }}
                borderRadius={
                  !header
                    ? {
                        topLeft: Amount.Least,
                        topRight: Amount.Least,
                      }
                    : undefined
                }
                className="data-grid-headers"
              >
                {columns.map((column, key) => {
                  return (
                    <Container
                      alignment={{
                        horizontal: column.align,
                        orientation: Orientation.Horizontal,
                        vertical: AlignVertical.Center,
                      }}
                      border={
                        key !== columns.length - 1
                          ? {
                              right: {
                                color: BorderColors.Light,
                                style: BorderStyle.Solid,
                                width: 1,
                              },
                            }
                          : undefined
                      }
                      className="data-grid-header-cell"
                      key={key}
                      padding={{
                        left: Amount.Default,
                        right: Amount.Default,
                      }}
                      size={{
                        maxWidth: column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                        minWidth: column.size?.minWidth ?? MIN_COLUMN_WIDTH,
                        width: column.size?.width,
                      }}
                    >
                      <Label
                        alignment={{
                          horizontal: column.align,
                          vertical: AlignVertical.Center,
                        }}
                        lineHeight={Sizes.Large}
                        textColor={TextColors.Light}
                        textSize={TextSize.Smaller}
                      >
                        {column.label}
                      </Label>
                    </Container>
                  );
                })}
              </Container>

              <Container
                background={{
                  color: BackgroundColors.DataGridRow,
                }}
                borderRadius={{
                  bottomLeft: Amount.Least,
                  bottomRight: Amount.Least,
                }}
                className="data-grid-rows"
                size={{ minHeight }}
              >
                <Scrollable size={{ minHeight }}>
                  {data &&
                    data.map((row, key) => {
                      return (
                        <Container
                          alignment={{
                            orientation: Orientation.Horizontal,
                          }}
                          background={{
                            color: BackgroundColors.DataGridCell,
                          }}
                          borderRadius={
                            data.length === key + 1
                              ? {
                                  bottomLeft: Amount.Least,
                                  bottomRight: Amount.Least,
                                }
                              : undefined
                          }
                          className="data-grid-row"
                          cursor={Cursor.Pointer}
                          events={{
                            mouse: {
                              onClick: () => {
                                if (onItemClick) onItemClick(row);
                              },
                            },
                          }}
                          key={key}
                          states={{
                            hovered: {
                              background: {
                                color: BackgroundColors.Primary,
                              },
                            },
                          }}
                        >
                          {columns.map((column, columnKey) => {
                            return (
                              <DataGridCell
                                alignment={{
                                  horizontal: column.align,
                                  orientation: Orientation.Horizontal,
                                  vertical: AlignVertical.Center,
                                }}
                                fieldName={column.field}
                                key={columnKey}
                                lineHeight={Sizes.Large}
                                lineWrap={true}
                                model={model}
                                size={{
                                  maxWidth:
                                    column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                                  minWidth:
                                    column.size?.minWidth ?? MIN_COLUMN_WIDTH,
                                  width: column.size?.width,
                                }}
                                states={{
                                  hovered: {
                                    textColor: TextColors.PrimaryContrast,
                                  },
                                }}
                                textColor={TextColors.Default}
                                type={column.type}
                                value={fetchFromObject(row, column.field)}
                              />
                            );
                          })}
                        </Container>
                      );
                    })}
                </Scrollable>
              </Container>
            </>
          ) : (
            <Container>
              {!states.state?.loading === true && data && data.length === 0 ? (
                <NoResults as={Container}>
                  <Label>No results</Label>
                </NoResults>
              ) : (
                data &&
                data.map((row, key) => {
                  return template && template.card ? (
                    createElement(template.card, {
                      events: {
                        mouse: {
                          onClick: () => {
                            if (onItemClick) onItemClick(row);
                          },
                        },
                      },
                      key,
                      margin: {
                        bottom: Amount.Default,
                      },

                      row,
                    })
                  ) : (
                    <>Need a card template here</>
                  );
                })
              )}
            </Container>
          )}
        </Container>
      </Container>
    );
  },
);

const NoResults = styled.div`
  color: #9b9b9b;
  font-size: 13px;
  font-weight: 500;
  padding: 50px 0;
  text-align: center;
`;

export default DataGrid;
