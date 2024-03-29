// @ts-ignore
import colorNamer from 'color-namer';
import hexRgb from 'hex-rgb';
import { memo, useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import rgbHex from 'rgb-hex';
import styled, { css } from 'styled-components';

import {
  InputContainer,
  InputContainerProps as InputContainerProperties,
} from '../shared/input-container';

export const defaultColors = [
  '244,67,54',
  '233,30,99',
  '156,39,176',
  '103,58,183',
  '63,81,181',
  '33,150,243',
  '3,169,244',
  '0,188,212',
  '0,150,136',
  '76,175,80',
  '139,195,74',
  '205,220,57',
  '255,235,59',
  '255,193,7',
  '255,152,0',
  '255,87,34',
  '121,85,72',
  '96,125,139',
];

type ColorInputProperties = InputContainerProperties<string>;

export const ColorInput = memo(
  ({
    defaultValue,
    onValueChange,
    ...props
  }: ColorInputProperties): React.ReactElement => {
    const [value, setValue] = useState(defaultValue);
    const [colorName, setColorName] = useState();

    useEffect(() => {
      setColorName(colorNamer(`rgb(${value})`).pantone[0].name);

      if (value !== defaultValue && onValueChange) onValueChange({ value });
    }, [value]);

    return (
      <InputContainer
        data-testid="color-picker"
        //  modal={modal}
        {...props}
      >
        {/* <ColorPreview modal={modal}>
        <ColorCircle color={value} />
      </ColorPreview> */}
        <ColorMenu
        // modal={modal}
        >
          <ColorName>{colorName}</ColorName>
          <PresetColors>
            {defaultColors.map((color, key) => {
              return (
                <PresetColor
                  onClick={() => setValue(color)}
                  color={color}
                  key={key}
                  selected={color === value}
                />
              );
            })}
          </PresetColors>
          <ColorMixer>
            <HexColorPicker
              color={rgbHex(value?.toString() ?? '')}
              onChange={(color: string) => {
                const rgb = hexRgb(color);

                setValue(`${rgb.red},${rgb.green},${rgb.blue}`);
              }}
            />
          </ColorMixer>
        </ColorMenu>
      </InputContainer>
    );
  },
);

const ColorPreview = styled.div<{
  readonly modal?: boolean;
}>`
  border-radius: 4px 4px 0 0;
  padding: 8px;
`;

const ColorMenu = styled.div<{
  readonly modal?: boolean;
}>`
  background: white;

  border-radius: 12px 0 12px 12px;
  height: 250px;
  overflow: hidden;

  /* ${properties =>
    properties.modal &&
    css`
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      display: none;
      position: absolute;
      right: 0;
      width: 220px;
      z-index: 10001;
    `}; */
`;

const ColorName = styled.div`
  color: #5b5b5b;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  padding: 8px 0;
  text-align: center;
`;

const PresetColors = styled.div`
  height: 60px;
  padding: 9px 4px 9px 9px;
`;

const PresetColor = styled.button<{
  readonly selected?: boolean;
}>`
  background: transparent;
  border-radius: 18px;
  border: ${properties =>
    (properties.selected
      ? `4px solid rgba(${properties.color}, 1)`
      : `9px solid rgba(${properties.color}, 1)`)};
  cursor: pointer;
  float: left;
  height: 18px;
  outline: none;
  margin: 0 5px 5px 0;
  transform: scale(1);
  transition: border 0.2s ease-in-out, transform 0.2s ease-in-out;
  width: 18px;

  &:hover {
    transform: scale(1.2);
  }
`;

const ColorMixer = styled.div`
  height: 190px;
  width: 100%;

  .react-colorful {
    height: 170px;
    width: 220px;
  }
  .react-colorful__saturation {
    border-radius: 3px 3px 0 0;
  }
  .react-colorful__hue {
    height: 30px;
    border-radius: 0 0 3px 3px;
  }
  .react-colorful__saturation-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
  .react-colorful__hue-pointer {
    border-radius: 15px;
    height: 15px;
    width: 15px;
  }
`;

// const ColorCircle = styled.div`
//   background: transparent;
//   border: 5px solid rgba(${props => props.color}, 1);
//   border-radius: 24px;
//   height: 24px;
//   position: relative;
//   width: 24px;
//   z-index: 10000;
// `;
