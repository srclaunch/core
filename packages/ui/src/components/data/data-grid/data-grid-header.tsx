// import { Model, Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

// import { fetchFromObject } from '../../../lib/data/object';
// import { downloadDataAsFile } from '@srclaunch/actions';
// import { formatObjectToCSVData } from '@srclaunch/transform';
import {
  AlignVertical,
  Amount,
  BackgroundColor,
  Fill,
  Orientation,
  Size,
} from '../../../types';
import { MenuButton } from '../../forms/buttons/menu-button';
import {
  SearchInput,
  SearchInputProps as SearchInputProperties,
} from '../../forms/inputs/text/search-input';
import { Container, ContainerProps } from '../../layout/container';
import { Spacer } from '../../layout/spacer';

export const DataGridHeader = memo(
  ({
    // background = {},
    borderRadiusTopLeft = Amount.Least,
    borderRadiusTopRight = Amount.Least,
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
    // shadow = Shadow.Highest,
    exportButton = true,
    search = {
      placeholder: 'Search',
      size: Size.Default,
    },
  }: // size = {},
  // states = {},
  // template,
  // ...props
  ContainerProps<{
    readonly exportButton?: boolean;
    readonly search?: SearchInputProperties | boolean;
  }>): ReactElement => {
    // const [searchTerm, setSearchTerm] = useState<string>('');
    // const [hoveredRow, setHoveredRow] = useState<number | undefined>();

    return (
      <Container
        orientation={Orientation.Horizontal}
        alignVertical={AlignVertical.Center}
        backgroundColor={BackgroundColor.Lighter}
        borderRadiusTopLeft={borderRadiusTopLeft}
        borderRadiusTopRight={borderRadiusTopRight}
        className="data-grid-header"
        paddingLeft={Amount.Less}
        paddingRight={Amount.Less}
        size={Size.Larger}
      >
        {search && (
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
            placeholder={
              typeof search === 'object' ? search.placeholder : 'Search'
            }
            size={typeof search === 'object' ? search.size : Size.Default}
            width={160}
            // {...search}
          />
        )}

        <Spacer fill={Fill.Horizontal} />

        {exportButton && (
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
            // size={{
            //   ...header.export.size,
            // }}
            // {...header.export}
          />
        )}
        {/* 
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
        )} */}
      </Container>
    );
  },
);

export default DataGridHeader;
