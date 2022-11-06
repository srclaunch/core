import { ImgHTMLAttributes, memo, ReactElement } from 'react';
import styled, { css } from 'styled-components';

import { getSizeStyles } from '../../styles/appearance/size';
import { getMarginStyles } from '../../styles/layout/margin';
import { getPaddingStyles } from '../../styles/layout/padding';
import {
  CommonComponentProps,
  MarginProps,
  PaddingProps,
  SizeProps,
} from '../../types';

/**
 * Image component for displaying GIFs, JPGs or PNGs.
 *
 * @param description - A description to be used for accessibility
 * @param url - A full URL path to an image
 * @param path - A relative path to an image located in the 'Assets" repo
 */
export type ImageProps = CommonComponentProps<
  ImgHTMLAttributes<HTMLImageElement>,
  MarginProps &
    PaddingProps &
    SizeProps & {
      readonly description?: string;
      readonly path?: string;
      readonly url?: string;
    }
>;

const Img = styled.img<ImageProps>`
  ${props =>
    css`
      ${getSizeStyles(props)}
      ${getMarginStyles(props)}
      ${getPaddingStyles(props)}
    `}
`;

export const Image = memo(
  ({
    alt,
    className = '',
    description,
    path,
    src,
    url,
    ...props
  }: ImageProps): ReactElement => {
    return (
      <Img
        alt={description ?? alt}
        as="img"
        className={`${className} image`}
        src={path ?? url ?? src}
        {...props}
      />
    );
  },
);
