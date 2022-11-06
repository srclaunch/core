import { ReactElement } from 'react';
import { Form } from '@srclaunch/ui';
import { Primitives } from '@srclaunch/types';

export const CommunicationPreferences = (): ReactElement => {
  return (
    <Form
      fields={[
        {
          defaultValue: true,
          label:
            'Receive marketing emails related only to AppLab products and services.',
          name: 'marketing',
          type: Primitives.Boolean,
        },
      ]}
      name="communication-settings"
      // onSubmit={() => {
      //   console.log('adsf');
      // }}
      submitButton={null}
    />
  );
};
