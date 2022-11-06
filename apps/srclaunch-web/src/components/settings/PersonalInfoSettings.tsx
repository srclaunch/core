import { Primitives } from '@srclaunch/types';
import { ButtonType, Form, Size } from '@srclaunch/ui';
import { useSelector } from '@srclaunch/web-app-state';
import { ReactElement } from 'react';

export const PersonalInformationSettings = (): ReactElement => {
  const user = useSelector(state => state.user.details.attributes);

  console.log('user', user);

  return (
    <Form
      fields={[
        {
          defaultValue: user.given_name,
          label: 'First name',
          name: 'name',
          type: Primitives.String,
        },
        {
          defaultValue: user.family_name,
          label: 'Last name',
          name: 'family_name',
          type: Primitives.String,
        },
      ]}
      name="personal-information-settings"
      // onSubmit={() => {
      //   console.log('adsf');
      // }}
      submitButton={{
        label: 'Save',
        // size: Size.Default,
        type: ButtonType.Default,
      }}
    />
  );
};
