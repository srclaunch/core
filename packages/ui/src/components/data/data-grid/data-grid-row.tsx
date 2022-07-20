import { Model, Primitive, Primitives } from '@srclaunch/types';
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
import {
  Container,
  ContainerProps as ContainerProperties,
  ContainerProps as ContainerProperties_,
} from '../../layout/container';
import { Scrollable } from '../../layout/scrollable';
import { Spacer } from '../../layout/spacer';
import { LoadingOverlay } from '../../progress/loading-overlay';
import { Label } from '../../typography/label';
import { DataGridColumn, DataGridDisplayType } from '.';
import { DataGridCell } from './data-grid-cell';

export type DataGridRowProps = ContainerProperties_ & {
  readonly onClick?: (row: Record<string, Primitives | unknown>) => unknown;
};

export const DataGridRow = memo(
  ({
    background = {},
    borderRadius = {},
    className = '',
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
    shadow = DepthShadow.Highest,
    size = {},
    states = {},
    // template,
    ...properties
  }: DataGridRowProps): ReactElement => {
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

    return (
      <Container
        background={{
          color: BackgroundColors.DataGridRow,
        }}
        borderRadius={{
          bottomLeft: Amount.Least,
          bottomRight: Amount.Least,
        }}
        className="data-grid-rows"
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
                    color: BackgroundColors.DataGridCell,
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
                        color: BackgroundColors.Primary,
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
                        lineHeight={Sizes.Large}
                        lineWrap={true}
                        model={model}
                        size={{
                          maxWidth: column.size?.maxWidth ?? MAX_COLUMN_WIDTH,
                          minWidth: column.size?.minWidth ?? MIN_COLUMN_WIDTH,
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
