import fs from 'fs-extra';
import path from 'node:path';

import { constructSrcLaunchModelExports } from '../exports';
import { buildSrcLaunchModels } from '../outputs/srclaunch';
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
} from './models';

export async function copyStubModels() {
  try {
    const BUILD_PATH = path.join(path.resolve(), 'sdk/models/src');

    await fs.ensureDir(BUILD_PATH);

    const modelsPath = path.join(BUILD_PATH, 'srclaunch');
    await fs.ensureDir(modelsPath);

    const modelExportsIndexFile = await constructSrcLaunchModelExports();

    await Promise.all([
      await fs.writeFile(
        path.join(modelsPath, 'Message.ts'),
        getMessageModel(),
        'utf8',
      ),
      await fs.writeFile(
        path.join(modelsPath, 'Organization.ts'),
        getOrganizationModel(),
      ),
      await fs.writeFile(path.join(modelsPath, 'Team.ts'), getTeamModel()),
      await fs.writeFile(
        path.join(modelsPath, 'Document.ts'),
        getDocumentModel(),
      ),
      await fs.writeFile(
        path.join(modelsPath, 'Payment.ts'),
        getPaymentModel(),
      ),
      await fs.writeFile(
        path.join(modelsPath, 'Invoice.ts'),
        getInvoiceModel(),
      ),
      await fs.writeFile(
        path.join(modelsPath, 'PaymentMethod.ts'),
        getPaymentMethodModel(),
      ),
      await fs.writeFile(path.join(modelsPath, 'Person.ts'), getPersonModel()),
      await fs.writeFile(
        path.join(modelsPath, 'Subscription.ts'),
        getSubscriptionModel(),
      ),
      await fs.writeFile(path.join(modelsPath, 'User.ts'), getUserModel()),
      await fs.writeFile(
        path.join(modelsPath, 'UserGroup.ts'),
        getUserGroupModel(),
      ),
      await fs.writeFile(
        path.join(modelsPath, 'UserRole.ts'),
        getUserRoleModel(),
      ),
      await buildSrcLaunchModels('srclaunch', 'sdk/models'),
      await fs.writeFile(
        path.join(BUILD_PATH, 'index.ts'),
        modelExportsIndexFile,
        'utf8',
      ),
    ]).catch(error => {
      console.error(error);
    });
  } catch (error) {
    console.error(error);
  }
}
