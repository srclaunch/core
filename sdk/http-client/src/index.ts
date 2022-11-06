import { HttpClient } from '@srclaunch/http-client';
import { Environment } from '@srclaunch/types';
import { getEnvironment } from '@srclaunch/web-environment';
import documentEndpoints from './documentEndpoints';
import invoiceEndpoints from './invoiceEndpoints';
import messageEndpoints from './messageEndpoints';
import organizationEndpoints from './organizationEndpoints';
import paymentEndpoints from './paymentEndpoints';
import paymentmethodEndpoints from './paymentmethodEndpoints';
import personEndpoints from './personEndpoints';
import subscriptionEndpoints from './subscriptionEndpoints';
import teamEndpoints from './teamEndpoints';
import userEndpoints from './userEndpoints';
import usergroupEndpoints from './usergroupEndpoints';
import userroleEndpoints from './userroleEndpoints';


const environment: Environment = getEnvironment();

const hosts = {
  development: 'http://localhost:3000',

}

export const httpClient = new HttpClient({
  basePath: 'core-api',
  // @ts-ignore
  host: hosts[environment.id],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // headers: { 'X-Requested-With': 'XMLHttpRequest' },
  },
  retry: {
    condition: error => !error.response,
    count: 2,
    delay: 5000,
  },
  preAuthResourceIncludes: '/auth',
  responseType: 'json',
  withCredentials: true,
});

export default {
  ...documentEndpoints
,...invoiceEndpoints
,...messageEndpoints
,...organizationEndpoints
,...paymentEndpoints
,...paymentmethodEndpoints
,...personEndpoints
,...subscriptionEndpoints
,...teamEndpoints
,...userEndpoints
,...usergroupEndpoints
,...userroleEndpoints

};