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
  Fill,
  Orientation,
  Size,
  Sizes,
  TextSize,
} from '../../../types';
import { Button, ButtonType } from '../../forms/buttons/button';
import { MenuButton } from '../../forms/buttons/menu-button';
import {
  SearchInput,
  SearchInputProps as SearchInputProperties,
} from '../../forms/inputs/text/search-input';
import {
  Container,
  ContainerProps as ContainerProperties,
} from '../../layout/container';
import { Spacer } from '../../layout/spacer';

export type DataGridHeaderProps = ContainerProperties & {
  readonly exportButton?: boolean;
  readonly search?: SearchInputProperties | boolean;
};

export const DataGridHeader = memo(
  ({
    // background = {},
    borderRadius = {},
    // className = '',
    // columns,
    // columnCount = 3,
    // data,
    // depth = Depth.Highest,
    // display = DataGridDisplayType.Table,
    // header,
    // hideOnProp,
    // loaded,

    // model,
    // onItemClick,
    // shadow = DepthShadow.Highest,
    exportButton = true,
    search = {
      placeholder: 'Search',
      size: {},
    },
  }: // size = {},
  // states = {},
  // template,
  // ...props
  DataGridHeaderProps): ReactElement => {
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [hoveredRow, setHoveredRow] = useState<number | undefined>();

    return (
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
        {search && (
          <SearchInput
            events={{
              input: {
                onValueChange: () =>
                  // {
                  //   //  value
                  // },
                  {
                    // setSearchTerm(value ?? '');
                  },
              },
            }}
            margin={{
              right: Amount.Less,
            }}
            name="search-input"
            placeholder={
              typeof search === 'object' ? search.placeholder : 'Search'
            }
            size={{
              width: 160,
              ...(typeof search === 'object' ? search.size : {}),
            }}
            // {...search}
          />
        )}

        <Spacer
          size={{
            fill: Fill.Horizontal,
          }}
        />

        {exportButton && (
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
            // size={{
            //   ...header.export.size,
            // }}
            // {...header.export}
          />
        )}
        {/* 
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
        )} */}
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

export default DataGridHeader;
