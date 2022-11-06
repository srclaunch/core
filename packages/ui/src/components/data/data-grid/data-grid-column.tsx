import { Model, Primitives } from '@srclaunch/types';
import { memo, ReactElement, SyntheticEvent } from 'react';

// import { fetchFromObject } from '../../../lib/data/object';
// import { downloadDataAsFile } from '@srclaunch/actions';
// import { formatObjectToCSVData } from '@srclaunch/transform';
import {
  AlignHorizontal,
  AlignVertical,
  Amount,
  BackgroundColor,
  BorderColor,
  BorderStyle,
  Fill,
  Orientation,
  Shadow,
  Size,
  TextColor,
  TextSize,
} from '../../../types';
import {
  Button,
  ButtonProps as ButtonProperties,
  ButtonType,
} from '../../forms/buttons/button';
import {
  MenuButton,
  MenuButtonProps as MenuButtonProperties,
} from '../../forms/buttons/menu-button';
import {
  SearchInput,
  SearchInputProps as SearchInputProperties,
} from '../../forms/inputs/text/search-input';
import { Container, ContainerProps } from '../../layout/container';
import { Spacer } from '../../layout/spacer';
import { LoadingOverlay } from '../../progress/loading-overlay';
import { Label } from '../../typography/label';
import { DataGridDisplayType } from '.';

export const DataGridColumn = memo(
  ({
    backgroundColor = BackgroundColor.Darker,
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

    shadow = Shadow.Highest,

    state,

    ...props
  }: ContainerProps<{
    readonly columnCount?: number;
    readonly columns: ReadonlyArray<
      ContainerProps<{
        readonly label?: string;
      }>
    >;
    readonly data?: readonly Record<string, Primitives | unknown>[];
    readonly display?: DataGridDisplayType;
    readonly fallbackField?: string;
    readonly field: string;
    readonly fields?: readonly string[];
    readonly header?: {
      readonly create?: ButtonProperties;
      readonly export?: MenuButtonProperties;
      readonly search?: SearchInputProperties;
    };
    readonly hideOnProp?: string;
    readonly label: string;
    readonly model?: Model;
    readonly onItemClick?: (row: Record<string, unknown>) => unknown;
    readonly template?: {
      readonly card?: ({
        // onClick,
        row,
      }: ContainerProps & {
        // onClick?: (row: Record<string, Primitives>) => unknown;
        readonly row: Record<string, Primitives>;
      }) => ReactElement;
      readonly row?: ({
        // onClick,
        row,
      }: ContainerProps & {
        // onClick?: (row: Record<string, Primitives>) => unknown;
        readonly row: Record<string, Primitives>;
      }) => ReactElement;
    };
    readonly type: Primitives;
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
            orientation={Orientation.Horizontal}
            alignVertical={AlignVertical.Center}
            backgroundColor={BackgroundColor.Lighter}
            borderRadius={borderRadius}
            borderRadiusTopLeft={Amount.Least}
            borderRadiusTopRight={Amount.Least}
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
                placeholder={header.search.placeholder}
                width={180}
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
                {...header.export}
              />
            )}

            {header.create && (
              <Button
                lineHeight={Size.Default}
                textSize={header.create.textSize ?? TextSize.Default}
                type={header.create.type ?? ButtonType.Primary}
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
                {columns.map((column, key: number) => {
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
                      borderRightStyle={
                        key !== columns.length - 1
                          ? BorderStyle.Solid
                          : undefined
                      }
                      className="data-grid-header-cell"
                      key={key}
                      paddingLeft={Amount.Default}
                      paddingRight={Amount.Default}
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
                backgroundColor={BackgroundColor.Lighter}
                borderRadiusBottomLeft={Amount.Least}
                borderRadiusBottomRight={Amount.Least}
                className="data-grid-rows"
                minHeight={minHeight}
              >
                {/* <Scrollable size={{ minHeight }}>
                  {data &&
                    data.map((row: DataGridRow, key: number) => {
                      return (
                        <Container
                          alignment={{
                            orientation: Orientation.Horizontal,
                          }}
                          background={{
                            color: BackgroundColor.DataGridCell,
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
                                color: BackgroundColor.Primary,
                              },
                            },
                          }}
                        >
                          {columns.map(
                            (column: DataGridColumn, columnKey: number) => {
                              return (
                                <DataGridCell
                                  alignment={{
                                    horizontal: column.align,
                                    orientation: Orientation.Horizontal,
                                    vertical: AlignVertical.Center,
                                  }}
                                  fieldName={column.field}
                                  key={columnKey}
                                  lineHeight={Size.Large}
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
                                      textColor: TextColor.PrimaryContrast,
                                    },
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
                </Scrollable> */}
              </Container>
            </>
          ) : (
            <Container>
              {/* {!states.state?.loading === true && data && data.length === 0 ? (
                <NoResults as={Container}>
                  <Label>No results</Label>
                </NoResults>
              ) : (
                data && 
                // data.map((row: DataGridRow, key: number) => {
                //   return template && template.card ? (
                //     <>{row}</>
                //   ) : (
                //     // createElement(template.card, {
                //     //   events: {
                //     //     mouse: {
                //     //       onClick: () => {
                //     //         if (onItemClick) onItemClick(row);
                //     //       },
                //     //     },
                //     //   },
                //     //   key,
                //     //   margin: {
                //     //     bottom: Amount.Default,
                //     //   },
                //     // })
                //     <>Need a card template here</>
                //   );
                // })
              // )}*/}
            </Container>
          )}
        </Container>
      </Container>
    );
  },
);
export default DataGridColumn;
