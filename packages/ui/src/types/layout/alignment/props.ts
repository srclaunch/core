import { AppearanceProps } from '../../appearance';
import { LayoutProps } from '../props';
import { Fill } from './fill';
import { AlignHorizontal } from './horizontal';
import { Orientation } from './orientation';
import { Overflow } from './overflow';
import { AlignVertical } from './vertical';

export type AlignmentProps = {
  readonly alignHorizontal?: AlignHorizontal;
  readonly alignVertical?: AlignVertical;
  readonly fill?: Fill;
  readonly orientation?: Orientation;
  readonly overflow?: Overflow;
  readonly parentProps?: AppearanceProps & LayoutProps;
};
