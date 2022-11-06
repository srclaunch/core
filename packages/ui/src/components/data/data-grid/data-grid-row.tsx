import { Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

// import { fetchFromObject } from '../../../lib/data/object';
// import { downloadDataAsFile } from '@srclaunch/actions';
// import { formatObjectToCSVData } from '@srclaunch/transform';
import { Amount, BackgroundColor } from '../../../types';
import { Container, ContainerProps } from '../../layout/container';
import { Scrollable } from '../../layout/scrollable';

export const DataGridRow = memo(
  ({
    backgroundColor = BackgroundColor.Lightest,
    className = '',
    borderRadiusBottomLeft = Amount.Least,
    borderRadiusBottomRight = Amount.Least,
    // columns,
    // // columnCount = 3,
    // data,
    // // depth = Depth.Highest,
    // display = DataGridDisplayType.Table,
    // header,
    // // hideOnProp,
    // // loaded,
    // model,
    // onItemClick,
    // shadow = Shadow.Highest,

    // template,
    ...props
  }: ContainerProps<{
    readonly onClick?: (row: Record<string, Primitives | unknown>) => unknown;
  }>): ReactElement => {
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [hoveredRow, setHoveredRow] = useState<number | undefined>();
    // const MIN_COLUMN_WIDTH = 150;
    // const MAX_COLUMN_WIDTH = 300;
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

    return (
      <Container
        backgroundColor={backgroundColor}
        borderRadiusBottomLeft={borderRadiusBottomLeft}
        borderRadiusBottomRight={borderRadiusBottomRight}
        className={`${className} data-grid-row`}
        {...props}
        // size={{ minHeight }}
      >
        <Scrollable>
          {/* {data &&
            data.map((row: DataGridRow, key: number) => {
              return (
                <Container
                  alignment={{
                    orientation: Orientation.Horizontal,
                  }}
                  background={{
                    color: BackgroundColor.DataGridCell,
                  }}
                  // borderRadius={
                  //   data.length === key + 1
                  //     ? {
                  //         bottomLeft: Amount.Least,
                  //         bottomRight: Amount.Least,
                  //       }
                  //     : undefined
                  // }
                  className="data-grid-row"
                  cursor={Cursor.Pointer}
                  events={{
                    mouse: {
                      onClick: () => {
                        // if (onItemClick) onItemClick(row);
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
                  {columns.map((column: DataGridColumn, columnKey: number) => {
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
                          maxWidth: column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                          minWidth: column.size?.minWidth ?? MIN_COLUMN_WIDTH,
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
                  })}
                </Container>
              );
            })} */}
        </Scrollable>
      </Container>
    );
  },
);

// const NoResults = styled.div`
//   color: #9b9b9b;
//   font-size: 13px;
//   font-weight: 500;
//   padding: 50px 0;
//   text-align: center;
// `;
