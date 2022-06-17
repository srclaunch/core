import { ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';
import { Form } from '@srclaunch/ui';

export const AccountSettings = (): ReactElement => {
  return (
    <Form
      // defaultValue={user?.preferences?.ui.theme}
      events={{
        form: {
          onSubmit: () => {
            console.log('adsf');
          }
        }
      }}
      fields={[
        {
          label: 'First name',
          name: 'given_name',
          value: 'Steven',
          type: Primitives.String,
        },
      ]}
      name="account-settings"
      submitButton={null}
    />
  );
};
