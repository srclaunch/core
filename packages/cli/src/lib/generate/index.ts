import { generateModelsSDK } from './sdk/models';

export async function generateSDKs() {
  await generateModelsSDK();
  // await generateSDK('core-api');
  // await generateSDK('data-client');
  // await generateSDK('exceptions');
  // await generateSDK('http-client');

  // await generateSDK('redux-store');
  // await generateSDK('rtk-query-services');
  // await generateSDK('rtk-slices');
  // await generateSDK('sequelize-models');
  // await generateSDK('types');
}
