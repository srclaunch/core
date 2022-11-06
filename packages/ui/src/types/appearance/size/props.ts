import { Size } from '../../common/proportion/size';
import { LayoutProps } from '../../layout';
import { AppearanceProps } from '../props';

export type SizeProps = {
  readonly height?: Size | number | string;
  readonly maxHeight?: Size | number | string;
  readonly maxWidth?: Size | number | string;
  readonly minHeight?: Size | number | string;
  readonly minWidth?: Size | number | string;
  readonly size?: Size;
  readonly width?: Size | number | string;
} & { readonly parentProps?: AppearanceProps & LayoutProps };
