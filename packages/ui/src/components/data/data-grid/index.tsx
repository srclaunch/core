import { Model, Primitives } from '@srclaunch/types';
import { createElement, memo, ReactElement, SyntheticEvent } from 'react';
import styled from 'styled-components';

import { fetchFromObject } from '../../../lib/data/object';
// import { downloadDataAsFile } from '@srclaunch/actions';
// import { formatObjectToCSVData } from '@srclaunch/transform';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  Color,
  Cursor,
  Fill,
  Orientation,
  Shadow,
  Size,
  TextColor,
  TextSize
} from '../../../types';
import {
  Button,
  ButtonProps as ButtonProperties,
  ButtonType
} from '../../forms/buttons/button';
import {
  MenuButton,
  MenuButtonProps as MenuButtonProperties
} from '../../forms/buttons/menu-button';
import {
  SearchInput,
  SearchInputProps as SearchInputProperties
} from '../../forms/inputs/text/search-input';
import { Container, ContainerProps } from '../../layout/container';
import { Scrollable } from '../../layout/scrollable';
import { Spacer } from '../../layout/spacer';
import { LoadingOverlay } from '../../progress/loading-overlay';
import { Label } from '../../typography/label';
import { DataGridCell } from './data-grid-cell';

export enum DataGridDisplayType {
  Card = 'card',
  Table = 'table',
}

export type DataGridColumn = ContainerProps<{
  readonly fallbackField?: string;
  readonly field: string;
  readonly fields?: readonly string[];
  readonly label: string;
  readonly type: Primitives;
}>;

export type DataGridRow = {
  readonly onClick?: (row: DataGridRow | unknown) => unknown;
};

export const DataGrid = memo(
  ({
    backgroundColor = BackgroundColor.Dark,
    borderRadius = Amount.Least,

    className = '',
    columns,
    // columnCount = 3,
    data,
    // depth = Depth.Highest,
    display = DataGridDisplayType.Table,
    header,
    // hideOnProp,
    // loaded,
    model,
    onItemClick,
    shadow = Shadow.Highest,
    state,
    template,
    ...props
  }: ContainerProps<{
    readonly className?: string;
    readonly columnCount?: number;
    readonly columns: readonly DataGridColumn[];
    readonly data?: readonly Record<string, Primitives | unknown>[];
    readonly display?: DataGridDisplayType;
    readonly header?: {
      readonly create?: ButtonProperties;
      readonly export?: MenuButtonProperties;
      readonly search?: SearchInputProperties;
    };
    readonly hideOnProp?: string;
    readonly model?: Model;
    readonly onItemClick?: (row: Record<string, unknown>) => unknown;
    readonly template?: {
      readonly card?: ({
        // onClick,
        row,
      }: ContainerProps<{
        // onClick?: (row: Record<string, Primitives>) => unknown;
        readonly row: DataGridRow;
      }>) => ReactElement;
      readonly row?: ({
        // onClick,
        row,
      }: ContainerProps<{
        // onClick?: (row: Record<string, Primitives>) => unknown;
        readonly row: DataGridRow;
      }>) => ReactElement;
    };
  }>): ReactElement => {
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [hoveredRow, setHoveredRow] = useState<number | undefined>();
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
          alignVertical={AlignVertical.Top}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          className={`${className} data-grid`}
          shadow={shadow}
          state={state}
          {...props}
        >
          <Label>No columns defined</Label>
        </Container>
      );
    }

    const minHeight = `calc(${data?.length ?? 1 + 1} * ${Size.Large})`;

    return (
      <Container
        alignVertical={AlignVertical.Top}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        className={`${className} data-grid`}
        shadow={shadow}
        state={state}
        {...props}
      >
        <LoadingOverlay
          borderRadius={borderRadius}
          state={{
            visible: state?.loading ?? false,
          }}
        />

        {header && Object.keys(header).length > 0 && (
          <Container
            alignVertical={AlignVertical.Center}
            orientation={Orientation.Horizontal}
            backgroundColor={BackgroundColor.Dark}
            borderRadiusTopLeft={borderRadius}
            borderRadiusTopRight={borderRadius}
            className="data-grid-header"
            paddingLeft={Amount.Less}
            paddingRight={Amount.Less}
            height={Size.Larger}
          >
            {header.search && (
              <SearchInput
                onValueChange={() =>
                  // {
                  //   //  value
                  // },
                  {
                    // setSearchTerm(value ?? '');
                  }
                }
                marginRight={Amount.Less}
                name="search-input"
                width={160}
                {...header.search}
              />
            )}

            <Spacer fill={Fill.Horizontal} />

            {header.export && (
              <MenuButton
                items={[
                  {
                    // onClick: () =>
                    // downloadDataAsFile({
                    //   data: formatObjectToCSVData({
                    //     // data: [],
                    //     objectType: 'EXPENSE',
                    //   }),
                    //   fileName: 'expenses',
                    // }),

                    label: 'Export to CSV',
                  },
                ]}
                label="Export"
                size={header.export.size}
                {...header.export}
              />
            )}

            {header.create && (
              <Button
                lineHeight={Size.Default}
                textSize={header.create.textSize ?? TextSize.Default}
                type={header.create.type ?? ButtonType.Primary}
                // size={{
                //   height: Size.Small,
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
          borderRadius={!header ? borderRadius : undefined}
          className="data-grid-grid"
          onScroll={(e: SyntheticEvent) => e.preventDefault()}
        >
          {display === DataGridDisplayType.Table ? (
            <>
              <Container
                alignHorizontal={AlignHorizontal.Left}
                orientation={Orientation.Horizontal}
                backgroundColor={BackgroundColor.Default}
                borderRadiusTopLeft={!header ? Amount.Least : undefined}
                borderRadiusTopRight={!header ? Amount.Least : undefined}
                className="data-grid-headers"
              >
                {columns.map((column: DataGridColumn, key: number) => {
                  return (
                    <Container
                      alignHorizontal={column.alignHorizontal}
                      orientation={Orientation.Horizontal}
                      alignVertical={AlignVertical.Center}
                      borderRightColor={
                        key !== columns.length - 1
                          ? BorderColor.Light
                          : undefined
                      }
                      className="data-grid-header-cell"
                      key={key}
                      paddingLeft={Amount.Default}
                      maxWidth={column.maxWidth ?? MAX_COLUMN_WIDTH}
                      minWidth={column.minWidth ?? MIN_COLUMN_WIDTH}
                      width={column.width}
                    >
                      <Label
                        alignHorizontal={column.alignHorizontal}
                        alignVertical={AlignVertical.Center}
                        lineHeight={Size.Large}
                        textColor={TextColor.Light}
                        textSize={TextSize.Smaller}
                      >
                        {column.label}
                      </Label>
                    </Container>
                  );
                })}
              </Container>

              <Container
                backgroundColor={BackgroundColor.Light}
                borderRadiusBottomLeft={Amount.Least}
                borderRadiusBottomRight={Amount.Least}
                className="data-grid-rows"
                minHeight={minHeight}
              >
                <Scrollable minHeight={minHeight}>
                  {data &&
                    data.map((row: DataGridRow, key: number) => {
                      return (
                        <Container
                          orientation={Orientation.Horizontal}
                          backgroundColor={BackgroundColor.Light}
                          borderRadiusBottomLeft={
                            data.length === key + 1 ? Amount.Least : undefined
                          }
                          borderRadiusBottomRight={
                            data.length === key + 1 ? Amount.Least : undefined
                          }
                          className="data-grid-row"
                          cursor={Cursor.Pointer}
                          onClick={() => {
                            if (onItemClick) onItemClick(row);
                          }}
                          key={key}
                          hovered={{
                            background: {
                              color: Color.Primary,
                            },
                          }}
                        >
                          {columns.map(
                            (column: DataGridColumn, columnKey: number) => {
                              return (
                                <DataGridCell
                                  alignHorizontal={column.alignHorizontal}
                                  orientation={Orientation.Horizontal}
                                  alignVertical={AlignVertical.Center}
                                  fieldName={column.field}
                                  key={columnKey}
                                  lineHeight={Size.Large}
                                  lineWrap={true}
                                  model={model}
                                  maxWidth={column.maxWidth ?? MAX_COLUMN_WIDTH}
                                  minWidth={column.minWidth ?? MIN_COLUMN_WIDTH}
                                  width={column.width}
                                  hovered={{
                                    textColor: TextColor.PrimaryContrast,
                                  }}
                                  textColor={TextColor.Default}
                                  type={column.type}
                                  value={fetchFromObject(row, column.field)}
                                />
                              );
                            },
                          )}
                        </Container>
                      );
                    })}
                </Scrollable>
              </Container>
            </>
          ) : (
            <Container>
              {!state?.loading === true && data && data.length === 0 ? (
                <NoResults as={Container}>
                  <Label>No results</Label>
                </NoResults>
              ) : (
                data &&
                data.map((row: DataGridRow, key: number) => {
                  return template && template.card ? (
                    createElement(template.card, {
                      key,
                      marginBottom: Amount.Default,
                      onClick: () => {
                        if (onItemClick) onItemClick(row);
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

export * from './data-grid-cell';
export * from './data-grid-column';
export * from './data-grid-header';
export * from './data-grid-row';

