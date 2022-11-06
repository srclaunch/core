import { NotificationType, Primitives } from '@srclaunch/types';
import { memo, ReactElement } from 'react';

import { NotificationLabel } from '../../../notifications/notification-label';
import { InputLabel } from '../../../typography/labels/forms/input-label';
// import Menu from '../ui/Menu';
import { InputRow } from '../../layout/input-row';
// import TextInput from './TextInput';

type DynamicInputProps = {
  readonly label: string;
  readonly type: Primitives;
};

export const DynamicInput = memo(
  ({ label, type }: DynamicInputProps): ReactElement => {
    const getInputComponentByType = () => {
      switch (type) {
        case Primitives.String:
          return (
            <InputRow>
              <InputLabel>{label}</InputLabel>
              {/* <TextInput onChange={onChange} /> */}
            </InputRow>
          );
        case Primitives.Menu:
          return (
            <InputRow>
              {/* <Menu onChange={(val: string) => onChange(val)} items={/> */}
            </InputRow>
          );
        default:
          return (
            <NotificationLabel
              type={NotificationType.Error}
            >{`Unimplemented field type! ${label} : ${type}`}</NotificationLabel>
          );
      }
    };

    return getInputComponentByType();
  },
);
