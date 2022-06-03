// import { writeFile } from '@srclaunch/logic';
import path from 'node:path';

import { constructAppLabModelExports } from '../exports.js';
import {
  getDocumentModel,
  getInvoiceModel,
  getMessageModel,
  getOrganizationModel,
  getPaymentMethodModel,
  getPaymentModel,
  getPersonModel,
  getSubscriptionModel,
  getTeamModel,
  getUserGroupModel,
  getUserModel,
  getUserRoleModel,
} from './models.js';

export async function copyStubModels() {
  try {
    const BUILD_PATH = path.join(path.resolve(), '.applab/dependencies/models');

    const applabModelPath = path.join(BUILD_PATH, 'src');

    // await fs.writeFile(
    //   path.join(applabModelPath, 'Message.ts'),
    //   getMessageModel(),
    //   'utf8',
    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Organization.ts'),
    //   getOrganizationModel(),
    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Team.ts'),
    //   getTeamModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Document.ts'),
    //   getDocumentModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Payment.ts'),
    //   getPaymentModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Invoice.ts'),
    //   getInvoiceModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'PaymentMethod.ts'),
    //   getPaymentMethodModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Person.ts'),
    //   getPersonModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'Subscription.ts'),
    //   getSubscriptionModel(),

    // );

    // await writeFile(
    //   path.join(applabModelPath, 'User.ts'),
    //   getUserModel(),

    // );
    // await writeFile(
    //   path.join(applabModelPath, 'UserGroup.ts'),
    //   getUserGroupModel(),

    // );
    // await writeFile(
    //   path.join(applabModelPath, 'UserRole.ts'),
    //   getUserRoleModel(),

    // );

    // const modelExportsIndexFile = await constructAppLabModelExports();
    // await fs.writeFile(
    //   path.join(BUILD_PATH, 'src', 'index.ts'),
    //   modelExportsIndexFile,
    //   'utf8',
    // );
  } catch (error: any) {
    console.error(error);
  }
}
