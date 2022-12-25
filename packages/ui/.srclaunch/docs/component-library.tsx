// import { Exception } from '@srclaunch/exceptions';
// import { BasicIcons, DualLightIcons } from '@srclaunch/icons';
// import {
//   ComponentLibraryConfig,
//   ComponentSpec,
//   DocumentationType,
//   Primitives,
// } from '@srclaunch/types';
// import { useState } from 'react';

// import {
//   AlignHorizontal,
//   Amount,
//   BackgroundColor,
//   BreadcrumbNavigation,
//   Button,
//   ButtonType,
//   CheckboxInput,
//   CloseButton,
//   CodeVerificationForm,
//   Color,
//   Container,
//   DataGrid,
//   DropdownInput,
//   Fill,
//   ForgotPasswordForm,
//   ImageInput,
//   Inbox,
//   InputLabel,
//   LoadingOverlay,
//   LoginForm,
//   MediaGrid,
//   Menu,
//   MenuButton,
//   MessageComposer,
//   ModalHeader,
//   MoreMenu,
//   NumberInput,
//   PricingPlans,
//   SearchInput,
//   SignupForm,
//   Size,
//   SlidePanel,
//   Tab,
//   Tabs,
//   TextColor,
//   TextInput,
//   TitleCard,
//   ToggleInput,
//   UserMenu,
//   Validation,
//   Workspace,
// } from './packages/ui/src/index';

// export default <DocumentationConfig<
// DocumentationType.ComponentLibrary,>{
//   components: [
//     {
//       path: '/animation',
//       title: 'Animation',
//     },
//     {
//       components: [
//         {
//           component: CodeVerificationForm,
//           description: 'A form for verifying a user’s code',
//           examples: [
//             {
//               code: `import { CodeVerificationForm } from '@srclaunch/ui';

// <CodeVerificationForm
//   onSubmit: ({
//     fields,
//   }: {
//     fields: Record<string, unknown>;
//   }) => {
//     console.log(fields);
//   }}
// />
//               `,
//               properties: {
//                 onSubmit: ({
//                   fields,
//                 }: {
//                   readonly fields?: Record<string, unknown>;
//                 }) => {
//                   console.log(fields);
//                 },
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/authentication/code-verification-form',
//           title: 'CodeVerificationForm',
//         },
//         {
//           component: ForgotPasswordForm,
//           description: 'A form for resetting a user’s password',
//           examples: [
//             {
//               code: `import { ForgotPasswordForm } from '@srclaunch/ui';

// <ForgotPasswordForm
//   onSubmit: ({
//     fields,
//   }: {
//     fields: Record<string, unknown>;
//   }) => {
//     console.log(fields);
//   }}
// />
//               `,
//               properties: {
//                 onSubmit: ({
//                   fields,
//                 }: {
//                   readonly fields?: Record<string, unknown>;
//                 }) => {
//                   console.log(fields);
//                 },
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/authentication/forgot-password-form',
//           title: 'ForgotPasswordForm',
//         },
//         {
//           component: LoginForm,
//           description: 'A form for logging in a user',
//           examples: [
//             {
//               code: `import { LoginForm } from '@srclaunch/ui';

// <LoginForm
//   onSubmit: ({
//     fields,
//   }: {
//     fields: Record<string, unknown>;
//   }) => {
//     console.log(fields);
//   }}
// />
//               `,
//               properties: {
//                 onSubmit: ({
//                   fields,
//                 }: {
//                   readonly fields?: Record<string, unknown>;
//                 }) => {
//                   console.log(fields);
//                 },
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/authentication/login-form',
//           title: 'LoginForm',
//         },
//         {
//           component: SignupForm,
//           description: 'A form for signing up a user',
//           examples: [
//             {
//               code: `import { SignupForm } from '@srclaunch/ui';

// <SignupForm
//   onSubmit: ({
//     fields,
//   }: {
//     fields: Record<string, unknown>;
//   }) => {
//     console.log(fields);
//   }}
// />
//               `,
//               properties: {
//                 onSubmit: ({
//                   fields,
//                 }: {
//                   readonly fields?: Record<string, unknown>;
//                 }) => {
//                   console.log(fields);
//                 },
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/authentication/signup-form',
//           title: 'SignupForm',
//         },
//       ],
//       description: 'Components used for authentication',
//       path: '/authentication',
//       title: 'Authentication',
//     },
//     {
//       components: [
//         {
//           component: PricingPlans,
//           description: 'A list of pricing plans',
//           examples: [
//             {
//               properties: {},
//             },
//           ],
//           path: '/billing/pricing-plans',
//           title: 'PricingPlans',
//         },
//       ],
//       description: 'Billing, payments, and subscription related components.',
//       path: '/billing',
//       title: 'Billing',
//     },
//     {
//       components: [
//         {
//           component: TitleCard,
//           description:
//             'A card with an icon, title, subtitle, and a metric or value',
//           examples: [
//             {
//               code: `import { TitleCard } from '@srclaunch/ui';

// <TitleCard
//   icon: {
//     name: DualLightIcons.Alarm
//   },
//   label: 'Title',
//   value: 43
// />`,
//               properties: {
//                 icon: {
//                   name: DualLightIcons.Tool,
//                   size: {
//                     height: Size.Default,
//                     width: Size.Default,
//                   },
//                 },
//                 label: 'Title',
//                 value: 43,
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/cards/title-card',
//           title: 'TitleCard',
//         },
//       ],
//       description: 'Cards for various purpose',
//       path: '/cards',
//       title: 'Cards',
//     },
//     {
//       path: '/charts',
//       title: 'Charts',
//     },
//     {
//       components: [
//         {
//           component: Workspace,
//           description:
//             'A container that provides functionality for dashboard workspaces.',
//           examples: [
//             {
//               code: `import { Workspace } from '@srclaunch/ui';

// const Example = () => (
//   <Workspace
//     header: {
//       title: 'Workspace',
//     },
//   >
//     Some Page content
//   </Workspace>
// );
// `,
//               properties: {
//                 header: {
//                   title: 'Workspace',
//                 },
//               },
//               title: 'Default',
//             },
//             {
//               code: `import { Workspace } from '@srclaunch/ui';

// const Example = () => (
//   <Workspace
//     header: {
//       title: 'Workspace',
//       subTitle: 'SubTitle'
//     },
//   >
//     Some Page content
//   </Workspace>
// );
// `,
//               properties: {
//                 header: {
//                   subTitle: 'SubTitle',
//                   title: 'Workspace',
//                 },
//               },
//               title: 'With Subtitle',
//             },
//             {
//               code: `import { Workspace } from '@srclaunch/ui';

// const Example = () => (
//   <Workspace
//     header: {
//       actions: <Button>Action</Button>,
//       title: 'Workspace',
//       subTitle: 'SubTitle',
//     },
//   >
//     Some Page content
//   </Workspace>
// );
// `,
//               properties: {
//                 header: {
//                   actions: <Button type={ButtonType.Primary}>Action</Button>,
//                   subTitle: 'SubTitle',
//                   title: 'Workspace',
//                 },
//               },
//               title: 'With action',
//             },
//           ],
//           path: '/containers/workspace',
//           title: 'Workspace',
//         },
//       ],
//       description: 'Containers for various purpose',
//       path: '/containers',
//       title: 'Containers',
//     },
//     {
//       components: [
//         {
//           component: DataGrid,
//           description: 'A grid of data',
//           examples: [
//             {
//               code: `import { DataGrid } from '@srclaunch/ui';

// <DataGrid
//   columns: [
//     {
//       label: 'Name',
//       field: 'name',
//       type: Primitives.String,
//     },
//     {
//       label: 'Age',
//       field: 'age',
//       type: Primitives.Number,
//     },
//   ],
//   data: [
//     {
//       name: 'John',
//       age: '42',
//     },
//     {
//       name: 'Jane',
//       age: '43',
//     },
//   ]
// />`,
//               properties: {
//                 columns: [
//                   {
//                     field: 'name',
//                     label: 'Name',
//                     type: Primitives.String,
//                   },
//                   {
//                     field: 'age',
//                     label: 'Age',
//                     type: Primitives.Number,
//                   },
//                 ],
//                 data: [
//                   {
//                     age: '42',
//                     name: 'John',
//                   },
//                   {
//                     age: '43',
//                     name: 'Jane',
//                   },
//                 ],
//               },
//               title: 'Default',
//             },
//             {
//               code: `import { DataGrid } from '@srclaunch/ui';

// <DataGrid
//   columns={[
//     {
//       label: 'Name',
//       field: 'name',
//       type: Primitives.String,
//     },
//     {
//       label: 'Age',
//       field: 'age',
//       type: Primitives.Number,
//     },
//   ]]}
//   data={[
//     {
//       name: 'John',
//       age: '42',
//     },
//     {
//       name: 'Jane',
//       age: '43',
//     },
//   ]}
//   header={{
//     search: {
//       placeholder: 'Search examples',
//     },
//   }}
// />`,
//               properties: {
//                 columns: [
//                   {
//                     field: 'name',
//                     label: 'Name',
//                     type: Primitives.String,
//                   },
//                   {
//                     field: 'age',
//                     label: 'Age',
//                     type: Primitives.Number,
//                   },
//                 ],
//                 data: [
//                   {
//                     age: '42',
//                     name: 'John',
//                   },
//                   {
//                     age: '43',
//                     name: 'Jane',
//                   },
//                 ],
//                 header: {
//                   search: {
//                     placeholder: 'Search examples',
//                   },
//                 },
//               },
//               title: 'With header and search',
//             },
//             {
//               code: `import { DataGrid } from '@srclaunch/ui';

//     <DataGrid
//       columns={[
//         {
//           label: 'Name',
//           field: 'name',
//           type: Primitives.String,
//         },
//         {
//           label: 'Age',
//           field: 'age',
//           type: Primitives.Number,
//         },
//       ]]}
//       data={[
//         {
//           name: 'John',
//           age: '42',
//         },
//         {
//           name: 'Jane',
//           age: '43',
//         },
//       ]}
//       header={{
//         export: true,
//         search: {
//           placeholder: 'Search examples',
//         },
//       }}
//     />`,
//               properties: {
//                 columns: [
//                   {
//                     field: 'name',
//                     label: 'Name',
//                     type: Primitives.String,
//                   },
//                   {
//                     field: 'age',
//                     label: 'Age',
//                     type: Primitives.Number,
//                   },
//                 ],
//                 data: [
//                   {
//                     age: '42',
//                     name: 'John',
//                   },
//                   {
//                     age: '43',
//                     name: 'Jane',
//                   },
//                 ],
//                 header: {
//                   export: true,
//                   search: {
//                     placeholder: 'Search examples',
//                   },
//                 },
//               },
//               title: 'With search input and export button',
//             },
//             {
//               code: `import { DataGrid } from '@srclaunch/ui';

//               <DataGrid
//                 columns={[
//                   {
//                     label: 'Name',
//                     field: 'name',
//                     type: Primitives.String,
//                   },
//                   {
//                     label: 'Age',
//                     field: 'age',
//                     type: Primitives.Number,
//                   },
//                 ]]}
//                 data={[
//                   {
//                     name: 'John',
//                     age: '42',
//                   },
//                   {
//                     name: 'Jane',
//                     age: '43',
//                   },
//                 ]}
//                 header={{
//                   export: true,
//                   search: {
//                     placeholder: 'Search examples',
//                   },
//                 }}
//               />`,
//               properties: {
//                 columns: [
//                   {
//                     field: 'name',
//                     label: 'Name',
//                     type: Primitives.String,
//                   },
//                   {
//                     field: 'age',
//                     label: 'Age',
//                     type: Primitives.Number,
//                   },
//                 ],
//                 data: [
//                   {
//                     age: '42',
//                     name: 'John',
//                   },
//                   {
//                     age: '43',
//                     name: 'Jane',
//                   },
//                 ],
//                 header: {
//                   create: {
//                     label: 'Create new example',
//                   },
//                   search: {
//                     placeholder: 'Search examples',
//                   },
//                 },
//               },
//               title: 'With search input and create button',
//             },
//           ],
//           path: '/data/data-grid',
//           title: 'DataGrid',
//         },
//       ],
//       description: 'Components for displaying data of various types.',
//       path: '/data',
//       title: 'Data',
//     },

//     {
//       path: '/editors',
//       title: 'Editors',
//     },
//     {
//       path: '/engineering',
//       title: 'Engineering',
//     },
//     {
//       path: '/errors',
//       title: 'Errors',
//     },
//     {
//       path: '/feeds',
//       title: 'Feeds',
//     },
//     {
//       components: [
//         {
//           components: [
//             {
//               component: Button,
//               description:
//                 'A button is a clickable element that performs an action',
//               examples: [
//                 {
//                   code: `import { Button } from '@srclaunch/ui';

//                   const Example = () => (
//                     <Button>Click me</Button>
//                   );`,

//                   description: 'A basic button',
//                   properties: {
//                     children: 'Click me',
//                   },
//                   title: 'Basic',
//                 },
//                 {
//                   code: `import { Button } from '@srclaunch/ui';

//                   const Example = () => (
//                     <Button>Click me</Button>
//                   );`,
//                   description: 'A primary button',
//                   properties: {
//                     children: 'Hi ARI!!!',
//                     type: ButtonType.Primary,
//                   },
//                   title: 'Primary',
//                 },
//                 {
//                   code: `import { Button } from '@srclaunch/ui';

//                   const Example = () => (
//                     <Button>Click me</Button>
//                   );`,
//                   description: 'A secondary button',
//                   properties: {
//                     borderRadius: { all: Amount.Least },
//                     children: 'Click me',
//                     type: ButtonType.Secondary,
//                   },
//                   title: 'Secondary',
//                 },
//                 {
//                   code: `import { Button } from '@srclaunch/ui';

//                   const Example = () => (
//                     <Button>Click me</Button>
//                   );`,
//                   description: 'An inline button',
//                   properties: {
//                     children: 'Do something',
//                     size: {
//                       fill: Fill.None,
//                     },
//                   },
//                   title: 'Inline',
//                 },
//               ],
//               path: '/forms/buttons/button',
//               properties: {
//                 children: {
//                   required: true,
//                   types: ['ReactElement', 'string'],
//                 },
//                 disabled: {
//                   required: false,
//                   types: ['boolean'],
//                 },
//                 form: {
//                   required: false,
//                   types: ['string'],
//                 },
//               },
//               title: 'Button',
//             },
//             {
//               component: MenuButton,
//               description:
//                 'A menu button is a button that opens a menu when clicked',
//               examples: [
//                 {
//                   code: `import { MenuButton } from '@srclaunch/ui';

//                   const Example = () => (
//                     <MenuButton>Click me</MenuButton>
//                   );`,
//                   description: 'A basic menu button',
//                   properties: {
//                     label: 'Click me',
//                     menu: [
//                       {
//                         label: 'Menu item',
//                         onClick: () => {},
//                       },
//                     ],
//                   },
//                   title: 'Basic',
//                 },
//                 {
//                   code: `import { MenuButton } from '@srclaunch/ui';

//                   const Example = () => (
//                     <MenuButton>Click me</MenuButton>
//                   );`,
//                   description: 'With menu visible',
//                   properties: {
//                     label: 'Click me',
//                     menu: [
//                       {
//                         label: 'Menu item',
//                         onClick: () => {},
//                       },
//                     ],
//                     states: {
//                       state: {
//                         dropdown: {
//                           visible: true,
//                         },
//                       },
//                     },
//                   },
//                   title: 'With menu visible',
//                 },
//               ],
//               path: '/forms/buttons/menu-button',
//               title: 'MenuButton',
//             },
//           ],
//           description:
//             'Buttons are elements users interact with to perform an action',
//           path: '/forms/buttons',
//           title: 'Buttons',
//         },

//         {
//           components: [
//             {
//               components: [
//                 {
//                   component: CheckboxInput,
//                   description:
//                     'A checkbox is a boolean input that can be checked or unchecked',
//                   examples: [
//                     {
//                       code: `import { Checkbox } from '@srclaunch/ui';

// const Example = () => (
//   <Checkbox
//     label="Enabled"
//     onChange={({ value }) => console.log(value)}
//   />
// );`,
//                       description: '',
//                       properties: {
//                         label: 'Enabled',
//                         onChange: ({ value }: { readonly value: string }) =>
//                           console.log(value),
//                       },
//                     },
//                   ],
//                   path: '/forms/inputs/boolean/checkbox',
//                   title: 'Checkbox',
//                 },
//                 {
//                   component: ToggleInput,
//                   description:
//                     'A toggle input is a boolean input that can be turned on or off',
//                   examples: [
//                     {
//                       code: `import { ToggleInput } from '@srclaunch/ui';

//       const Example = () => (
//         <ToggleInput
//           label="Enabled"
//           onChange={({ value }) => console.log(value)}
//         />
//       );`,
//                       description: '',
//                       properties: {
//                         label: 'Enabled',
//                         onChange: ({ value }: { readonly value: string }) =>
//                           console.log(value),
//                       },
//                     },
//                   ],
//                   path: '/forms/inputs/boolean/toggle-input',
//                   title: 'ToggleInput',
//                 },
//               ],
//               description:
//                 'True/false inputs are used to collect a boolean value',
//               path: '/forms/inputs/boolean',
//               title: 'Boolean',
//             },
//             {
//               components: [
//                 {
//                   component: ImageInput,
//                   description:
//                     'Form input components for media, including images and videos',
//                   examples: [
//                     {
//                       code: `import { ImageInput } from '@srclaunch/ui';

// const Example = () => (
//   <ImageInput
//     label="Image"
//     onChange={({ value }) => console.log(value)}
//   />
// );`,
//                       description: 'A basic image input',
//                       properties: {
//                         label: 'Images',
//                         onChange: ({ value }: { readonly value: string }) =>
//                           console.log(value),
//                       },
//                     },
//                   ],
//                   path: '/forms/inputs/media/image-input',
//                   title: 'ImageInput',
//                 },
//               ],
//               description:
//                 'Form input components for media, including images and videos',
//               path: '/forms/inputs/media',
//               title: 'Media',
//             },
//             {
//               components: [
//                 {
//                   component: DropdownInput,
//                   description: 'A dropdown menu input',
//                   examples: [
//                     {
//                       properties: {
//                         label: 'Dropdown',
//                       },
//                       title: 'Default',
//                     },
//                     {
//                       properties: {
//                         label: 'Dropdown',
//                         menu: [
//                           {
//                             label: 'Menu item',
//                             value: 'menu-item',
//                           },
//                         ],
//                         states: {
//                           state: {
//                             dropdown: {
//                               visible: true,
//                             },
//                           },
//                         },
//                       },
//                       title: 'With a menu',
//                     },
//                   ],
//                   path: '/forms/inputs/menus/dropdown-input',
//                   title: 'DropdownInput',
//                 },
//               ],
//               description: 'Menu and list user inputs',
//               path: '/forms/inputs/menus',
//               title: 'Menus',
//             },
//             {
//               components: [
//                 {
//                   component: NumberInput,
//                   description: 'An input for entering numbers',
//                   examples: [
//                     {
//                       code: `import { NumberInput } from '@srclaunch/ui';

// <NumberInput
//   events={{
//     input: {
//       onValueChange: ({ validation, value }) => {
//         console.log(validation, value);
//       }),
//     }
//   }}
// />`,
//                       properties: {
//                         events: {
//                           input: {
//                             onValueChange: ({
//                               validation,
//                               value,
//                             }: {
//                               readonly validation?: Validation;
//                               readonly value?: string;
//                             }) => {
//                               console.log(validation, value);
//                             },
//                           },
//                         },
//                       },
//                       title: 'Default',
//                     },
//                   ],
//                   path: '/forms/inputs/numbers/number-input',
//                   title: 'NumberInput',
//                 },
//               ],
//               description: 'Menu and list user inputs',
//               path: '/forms/inputs/numbers',
//               title: 'Numbers',
//             },
//             {
//               components: [
//                 {
//                   component: TextInput,
//                   description: 'A form for signing up a user',
//                   examples: [
//                     {
//                       code: `import { TextInput } from '@srclaunch/ui';

// <TextInput
//   events={{
//     input: {
//       onValueChange: ({ validation, value }) => {
//         console.log(validation, value);
//       }),
//     }
//   }}
// />`,
//                       properties: {
//                         events: {
//                           input: {
//                             onValueChange: ({
//                               validation,
//                               value,
//                             }: {
//                               readonly validation?: Validation;
//                               readonly value?: string;
//                             }) => {
//                               console.log(validation, value);
//                             },
//                           },
//                         },
//                       },
//                       title: 'Default',
//                     },
//                     {
//                       code: `import { TextInput } from '@srclaunch/ui';

// <TextInput
//   events={{
//     input: {
//       onValueChange: ({ validation, value }) => {
//         console.log(validation, value);
//       }),
//     }
//   }}
//   label="Enter your name"
// />`,
//                       properties: {
//                         events: {
//                           input: {
//                             onValueChange: ({
//                               validation,
//                               value,
//                             }: {
//                               readonly validation?: Validation;
//                               readonly value?: string;
//                             }) => {
//                               console.log(validation, value);
//                             },
//                           },
//                         },
//                         label: 'Enter your name',
//                       },
//                       title: 'With a label',
//                     },
//                   ],
//                   path: '/forms/inputs/text/text-input',
//                   title: 'TextInput',
//                 },
//                 {
//                   component: SearchInput,
//                   description: 'A search input',
//                   examples: [
//                     {
//                       code: `import { SearchInput } from '@srclaunch/ui';

//     <SearchInput
//       onChange={({ value }) => console.log(value)}
//     />`,
//                       description: '',
//                       properties: {
//                         onChange: ({ value }: { readonly value: string }) =>
//                           console.log(value),
//                       },
//                     },
//                   ],
//                   path: '/forms/inputs/text/search-input',
//                   title: 'SearchInput',
//                 },
//               ],
//               description: 'Text and string user inputs',
//               path: '/forms/inputs/text',
//               title: 'Text',
//             },
//           ],
//           description:
//             'Inputs are elements users interact with to collect user input',
//           path: '/forms/inputs',
//           title: 'Inputs',
//         },
//         {
//           components: [
//             {
//               component: InputLabel,
//               description: 'Label displayed above inputs',
//               examples: [
//                 {
//                   code: `import { InputLabel } from '@srclaunch/ui';

// const Example = () => (
//   <InputLabel>
//     Input name
//   </InputLabel>
// );`,
//                   name: 'Basic',
//                   properties: {
//                     children: 'Input name',
//                   },
//                 },
//                 {
//                   code: `import { InputLabel } from '@srclaunch/ui';
// import { Exception } from '@srclaunch/exceptions';

// const Example = () => (
//   <InputLabel error={
//     new Exception('An error occurred')
//   }>
//     Input name
//   </InputLabel>
// );`,
//                   properties: {
//                     children: 'Input name',
//                     error: [new Exception('An error occurred')],
//                   },
//                   title: 'With error',
//                 },
//               ],
//               path: '/forms/labels/input-label',
//               title: 'InputLabel',
//             },
//           ],
//           description: 'Labels used in forms',
//           path: '/forms/labels',
//           title: 'Labels',
//         },
//       ],
//       description: 'Forms are used to collect user input',
//       path: '/forms',
//       title: 'Forms',
//     },
//     {
//       path: '/layout',
//       title: 'Layout',
//     },
//     {
//       path: '/lists',
//       title: 'Lists',
//     },
//     {
//       components: [
//         {
//           component: MediaGrid,
//           description: 'A grid of media',
//           examples: [
//             {
//               code: `import { MediaGrid } from '@srclaunch/ui';

//               const Example = () => (
//                 <MediaGrid items={[{ path: '/asdfasfd', }]} />
//               );`,
//               properties: {
//                 items: [
//                   {
//                     image: { path: 'asdfasdf' },
//                     title: 'Example',
//                   },
//                 ],
//               },
//               title: 'Basic',
//             },
//             {
//               code: `import { MediaGrid } from '@srclaunch/ui';

//               const Example = () => (
//                 <MediaGrid items={[{ path: '/asdfasfd', title: 'Example 1', }]} />
//               );`,
//               properties: {
//                 items: [
//                   {
//                     image: { path: 'asdfasdf' },
//                     title: 'Example 1',
//                   },
//                 ],
//               },
//               title: 'With titles',
//             },
//             {
//               code: `import { MediaGrid } from '@srclaunch/ui';

//               const Example = () => (
//                 <MediaGrid items={[{ path: '/asdfasfd', title: 'Example 1',}]} />
//               );`,
//               properties: {
//                 items: [
//                   {
//                     image: { path: 'asdfasdf' },
//                     menu: [{ label: 'Edit' }],
//                     title: 'Example',
//                   },
//                 ],
//               },
//               title: 'With titles and more menu',
//             },
//           ],
//           path: '/media/media-grid',
//           title: 'MediaGrid',
//         },
//       ],
//       description: 'Components used for displaying different media types',
//       path: '/media',
//       title: 'Media',
//     },
//     {
//       components: [
//         {
//           component: Menu,
//           description: 'Displays a list of items',
//           examples: [
//             {
//               properties: {
//                 menu: [
//                   {
//                     label: 'Menu item',
//                     value: 'menu-item',
//                   },
//                   {
//                     label: 'Menu item 2',
//                     value: 'menu-item-2',
//                   },
//                 ],
//                 size: {
//                   minWidth: 200,
//                 },
//               },
//               title: 'Default',
//             },
//             {
//               properties: {
//                 menu: [
//                   {
//                     label: 'Menu item',
//                     value: 'menu-item',
//                   },
//                   {
//                     label: 'Menu item 2',
//                     states: {
//                       current: {
//                         background: {
//                           color: BackgroundColor.Warning,
//                         },
//                       },
//                       state: {
//                         current: true,
//                       },
//                     },
//                     value: 'menu-item-2',
//                   },
//                 ],
//                 size: {
//                   minWidth: 200,
//                 },
//               },
//               title: 'With a selected item',
//             },
//             {
//               properties: {
//                 menu: [
//                   {
//                     label: 'Chi CHi',
//                     value: 'menu-item-3',
//                   },
//                   {
//                     label: 'Bogey',
//                     value: 'menu-item-2',
//                   },
//                   {
//                     label: "Lil' Bro",
//                     value: 'menu-item-3',
//                   },
//                   {
//                     background: {
//                       color: BackgroundColor.Error,
//                     },
//                     icon: {
//                       color: Color.White,
//                       name: BasicIcons.Alert,
//                       size: {
//                         height: Size.Smaller,
//                         width: Size.Smaller,
//                       },
//                     },
//                     label: 'Kitters',
//                     textColor: TextColor.White,
//                     value: 'menu-item',
//                   },
//                 ],
//                 size: {
//                   minWidth: 200,
//                 },
//               },
//               title: 'With an icon and background color',
//             },
//           ],
//           path: '/menus/menu',
//           title: 'Menu',
//         },
//         {
//           component: MoreMenu,
//           description: 'A button that displays a menu when clicked.',
//           examples: [
//             {
//               render: () => (
//                 <Container alignment={{ horizontal: AlignHorizontal.Center }}>
//                   <MoreMenu
//                     menu={[
//                       {
//                         label: 'Menu item',
//                         value: 'menu-item',
//                       },
//                       {
//                         label: 'Menu item 2',
//                         value: 'menu-item-2',
//                       },
//                     ]}
//                   />
//                 </Container>
//               ),
//               title: 'Default',
//             },
//           ],
//           path: '/menus/more-menu',
//           title: 'MoreMenu',
//         },
//       ],
//       description:
//         'Menu components for displaying lists of items that can be interacted with.',
//       path: '/menus',
//       title: 'Menus',
//     },
//     {
//       components: [
//         {
//           component: Inbox,
//           description:
//             'A combined navigation, message list and composition view.',
//           examples: [
//             {
//               properties: {},
//               size: {
//                 minHeight: 800,
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/messaging/inbox',
//           title: 'Inbox',
//         },
//         {
//           component: MessageComposer,
//           description: 'Message composition component',
//           examples: [
//             {
//               properties: {},
//               title: 'Default',
//             },
//           ],
//           path: '/messaging/message-composer',
//           title: 'MessageComposer',
//         },
//       ],
//       description: 'Components related to messaging.',
//       path: '/messaging',
//       title: 'Messaging',
//     },
//     {
//       components: [
//         {
//           component: CloseButton,
//           description: 'A button that can be used to close modals',
//           examples: [
//             {
//               properties: {},
//               title: 'Default',
//             },
//           ],
//           path: '/modals/close-button',
//           title: 'CloseButton',
//         },
//         {
//           component: ModalHeader,
//           description: 'A header for a modal',
//           examples: [
//             {
//               properties: {
//                 size: {
//                   width: 300,
//                 },
//                 title: 'Example Title',
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/modals/modal-header',
//           title: 'ModalHeader',
//         },
//         {
//           component: SlidePanel,
//           description:
//             'A modal panel that slides out from the edge of thes screen.',
//           examples: [
//             {
//               render: () => {
//                 const [slidePanelVisible, setSlidePanelVisible] =
//                   useState(false);

//                 return (
//                   <Container>
//                     <SlidePanel
//                       states={{ state: { visible: slidePanelVisible } }}
//                     >
//                       <ModalHeader
//                         title={<>Example</>}
//                         onCloseClick={() => setSlidePanelVisible(false)}
//                       />
//                     </SlidePanel>
//                     <Button
//                       events={{
//                         mouse: {
//                           onClick: () => {
//                             setSlidePanelVisible(true);
//                           },
//                         },
//                       }}
//                     >
//                       Open SlidePanel
//                     </Button>
//                   </Container>
//                 );
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/modals/slide-panel',
//           title: 'SlidePanel',
//         },
//       ],
//       description: 'Modal components for displaying modal dialogs',
//       path: '/modals',
//       title: 'Modals',
//     },
//     {
//       components: [
//         {
//           component: BreadcrumbNavigation,
//           description: 'A breadcrumb navigation component.',
//           examples: [
//             {
//               properties: {
//                 items: [
//                   {
//                     label: 'Home',
//                     path: '#',
//                   },
//                   {
//                     label: 'About',
//                     path: '#',
//                   },
//                   {
//                     label: 'Contact',
//                   },
//                 ],
//               },
//               title: 'Basic',
//             },
//           ],
//           name: 'BreadcrumbNavigation',
//           path: '/navigation/breadcrumb-navigation',
//           title: 'BreadcrumbNavigation',
//         },
//         {
//           component: Tabs,
//           description: 'A tab navigation component.',
//           examples: [
//             {
//               properties: {
//                 children: (
//                   <>
//                     <Tab label="One">Uno</Tab>
//                     <Tab label="Two">Dos</Tab>
//                     <Tab label="Three">Tres</Tab>
//                   </>
//                 ),
//               },
//             },
//           ],
//           path: '/navigation/tabs',
//           title: 'Tabs',
//         },
//       ],
//       description: 'Components useful for navigating through the application.',
//       path: '/navigation',
//       title: 'Navigation',
//     },
//     {
//       path: '/networking',
//       title: 'Networking',
//     },
//     {
//       path: '/notifications',
//       title: 'Notifications',
//     },
//     {
//       components: [
//         {
//           component: LoadingOverlay,
//           examples: [
//             {
//               properties: {
//                 states: {
//                   state: {
//                     visible: true,
//                   },
//                 },
//               },
//               title: 'Default',
//             },
//           ],
//           path: '/progress/loading-overlay',
//           title: 'LoadingOverlay',
//         },
//       ],
//       description: 'Components for displaying progress states.',
//       path: '/progress',
//       title: 'Progress',
//     },
//     {
//       path: '/search',
//       title: 'Search',
//     },
//     {
//       path: '/themes',
//       title: 'Themes',
//     },
//     {
//       path: '/typography',
//       title: 'Typography',
//     },
//     {
//       components: [
//         {
//           component: UserMenu,
//           description: 'A user menu component.',
//           examples: [
//             {
//               name: 'Basic',
//               properties: {
//                 states: {
//                   state: {
//                     authenticated: true,
//                   },
//                 },
//               },
//             },
//           ],
//           name: 'UserMenu',
//           path: '/user/user-menu',
//           title: 'UserMenu',
//         },
//       ],
//       description: 'Components for displaying user information.',
//       path: '/user',
//       title: 'User',
//     },
//   ],
//   description: 'A library of UI components for AppLab applications',
//   name: 'AppLab UI',
//   type: DocumentationType.ComponentLibrary,
// };
