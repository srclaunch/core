import { Route, RouteRole } from '@srclaunch/types';

// import { ForgotPassword } from './pages/auth/forgot-password';
// import { Login } from './pages/auth/login';
// import { Signup } from './pages/auth/signup';
// import { Verification } from './pages/auth/verification';
// import { Analytics } from './pages/azorak/analytics';
// import { Documents } from './pages/azorak/documents';
// import { ListingApplication } from './pages/azorak/listings/listing-application';
// import { ListingDetail } from './pages/azorak/listings/listing-detail';
// import { Listings } from './pages/azorak/listings/listings';
// import { Messages } from './pages/azorak/messages/index';
// import { Properties } from './pages/azorak/property/properties';
// import { Property } from './pages/azorak/property/property';
// import { Unit } from './pages/azorak/property/unit';
// import { Rewards } from './pages/azorak/rewards';
// import { ServiceRequests } from './pages/azorak/service-requests';
// import { Tenant } from './pages/azorak/tenant/tenant';
// import { Tenants } from './pages/azorak/tenant/tenants';
// import { Invoice } from './pages/billing/payments/invoice';
// import { Invoices } from './pages/billing/payments/invoices';
// import { Payment } from './pages/billing/payments/payment';
// import { Payments } from './pages/billing/payments/payments';
import { Overview } from './pages/overview';
import { PageNotFound } from './pages/page-not-found';
// import { Settings } from './pages/user/settings';

const routes: readonly Route[] = [
  // {
  //   component: ForgotPassword,
  //   path: 'forgot-password',
  //   role: RouteRole.ForgotPassword,
  // },
  // {
  //   component: Login,
  //   path: 'login',
  //   role: RouteRole.Login,
  // },
  {
    component: PageNotFound,
    path: '*',
    role: RouteRole.PageNotFound,
  },
  {
    component: Overview,
    loginRequired: false,
    role: RouteRole.Index,
  },
  // {
  //   component: Analytics,
  //   loginRequired: true,
  //   path: 'analytics',
  // },
  // {
  //   component: Documents,
  //   loginRequired: true,
  //   path: 'documents',
  // },
  // {
  //   component: Listings,
  //   loginRequired: false,
  //   path: 'listings',
  // },
  // {
  //   component: ListingApplication,
  //   loginRequired: true,
  //   path: 'listings/:propertyId/:unitId/apply',
  // },
  // {
  //   component: ListingDetail,
  //   loginRequired: false,
  //   path: 'listings/:propertyId/:unitId',
  // },
  // {
  //   component: Messages,
  //   loginRequired: true,
  //   path: 'messages/*',
  // },
  // {
  //   component: Properties,
  //   loginRequired: true,
  //   path: 'properties',
  // },
  // {
  //   component: Property,
  //   loginRequired: true,
  //   path: 'properties/:propertyId',
  // },
  // {
  //   component: Unit,
  //   loginRequired: true,
  //   path: 'properties/:propertyId/units/:unitId',
  // },
  // {
  //   component: Rewards,
  //   loginRequired: true,
  //   path: 'rewards',
  // },
  // {
  //   component: ServiceRequests,
  //   loginRequired: true,
  //   path: 'service-requests',
  // },
  // {
  //   component: Tenants,
  //   loginRequired: true,
  //   path: 'tenants',
  // },
  // {
  //   component: Tenant,
  //   loginRequired: true,
  //   path: 'tenants/:id',
  // },
  // {
  //   component: Settings,
  //   loginRequired: true,
  //   path: 'settings',
  // },
  // {
  //   component: Payment,
  //   loginRequired: true,
  //   path: 'payments/:id',
  // },
  // {
  //   component: Payments,
  //   loginRequired: true,
  //   path: 'payments',
  // },
  // {
  //   component: Invoices,
  //   loginRequired: true,
  //   path: 'invoices',
  // },
  // {
  //   component: Invoice,
  //   loginRequired: true,
  //   path: 'invoice',
  // },
  // {
  //   component: Signup,
  //   path: 'signup',
  //   role: RouteRole.Signup,
  // },
  // {
  //   component: Verification,
  //   path: 'verify/:userId',
  //   role: RouteRole.VerifyCode,
  // },
];

export default routes;
