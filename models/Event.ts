import { Analytics, ModelProps, Primitives } from '@srclaunch/types';

export const Event: ModelProps = {
  fields: {
    data: {
      label: 'Data',
      type: Primitives.JSON,
    },
    exception: {
      label: 'Exception',
      type: Primitives.JSON,
    },
    message: {
      label: 'Message',
      type: Primitives.String,
    },
    type: {
      label: 'Type',
      menu: [
        {
          label: 'Business',
          value: Analytics.Business,
        },
        {
          label: 'Engineering',
          value: Analytics.Engineering,
        },
        {
          label: 'Exception',
          value: Analytics.Exception,
        },
        {
          label: 'Marketing',
          value: Analytics.Marketing,
        },
        {
          label: 'Product',
          value: Analytics.Product,
        },
        {
          label: 'User Login',
          value: Analytics.UserLogin,
        },
        {
          label: 'User Logout',
          value: Analytics.UserLogout,
        },
        {
          label: 'User Signup',
          value: Analytics.UserSignup,
        },
        {
          label: 'User Preferences Changed',
          value: Analytics.UserPreferencesChanged,
        },
        {
          label: 'Web Page View',
          value: Analytics.PageView,
        },
        {
          label: 'Web Page Leave',
          value: Analytics.PageLeave,
        },
        {
          label: 'Website Visit',
          value: Analytics.WebsiteVisit,
        },
      ],
      required: true,
      type: Primitives.Menu,
    },
  },
  name: 'Event',
  relationships: {
    belongsTo: [
      'Application',
      'Organization',
      'Person',
      'Project',
      'Service',
      'Workspace',
    ],
  },
};
