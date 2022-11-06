import { ReactElement } from 'react';
import { Primitives } from '@srclaunch/types';
import { Form } from '@srclaunch/ui';

export const AccessibilityPreferences = (): ReactElement => {
  return (
    <Form
      fields={[
        {
          defaultValue: true,
          label: 'Show accessibility outlines',
          name: 'accessibility-outlines',
          type: Primitives.Boolean,
        },
      ]}
      name="accessibility-settings"
      // onSubmit={() => {
      //   console.log('adsf');
      // }}
      submitButton={null}
    />
  );
};
