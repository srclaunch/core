import { EnvironmentType } from '@srclaunch/types';
import test from 'ava';

import { getEnvironment } from '../index.js';

test('returns development environment', t => {
  // @ts-expect-error
  process = {
    env: {
      NODE_ENV: 'dev',
    },
  };

  const environment = getEnvironment();

  t.is(environment.id, EnvironmentType.Development);
});

test('returns production environment', t => {
  // @ts-expect-error
  process = {
    env: {
      NODE_ENV: 'prod',
    },
  };

  const environment = getEnvironment();

  t.is(environment.id, EnvironmentType.Production);
});

// test('bar is being tested', async (t) => {
//   const bar = Promise.resolve('bar');
//   t.is(await bar, 'bar');
// });
// test('sum of 2 numbers', t => {
//   t.plan(2);
//   t.pass('this assertion passed');
//   t.is(sum(1, 2), 3);
// })
