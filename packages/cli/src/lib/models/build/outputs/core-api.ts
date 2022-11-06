import fs from 'fs-extra';
import path from 'node:path';

export async function buildCoreAPI({
  sequelizeModelsProject,
}: {
  readonly sequelizeModelsProject: string;
}) {
  const BUILD_PATH = path.join(path.resolve(), 'sdk/core-api/src');
  const DIST_PATH = path.join(path.resolve(), 'sdk/core-api/dist');

  await fs.emptyDir(BUILD_PATH);
  await fs.emptyDir(DIST_PATH);

  const indexFileString = `import { CaughtException } from '@srclaunch/exceptions';
import { CoreAPIServer } from '@srclaunch/core-api-server';
import SequelizeModels from '${sequelizeModelsProject}';
import { Logger } from '@srclaunch/logger';
import { getEnvironment } from '@srclaunch/node-environment';

const dbConfig = {
  alter: false,
  database: process.env.CORE_DB_NAME,
  force: false,
  host: process.env.CORE_DB_HOST,
  password: process.env.CORE_DB_PASSWORD,
  port: Number.parseInt(
    process.env.CORE_DB_PORT ? process.env.CORE_DB_PORT.toString() : '3306',
  ),
  username: process.env.CORE_DB_USERNAME,
};

const environment = getEnvironment();
const logger = new Logger({
  environment,
});

const init = async () => {
  try {
    // @ts-ignore
    const server = new CoreAPIServer({
      aws: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_REGION,
        cognito: {
          identityPoolId: process.env.IDENTITY_POOL_ID,
        },
        s3: {
          bucket: process.env.AWS_S3_BUCKET_NAME,
          region: process.env.AWS_REGION,
        },
      },
      db: {
        connection: dbConfig,
        environment,

        // @ts-ignore
        models: SequelizeModels,
      },
      environment,
      logger,
      security: {
        trustedOrigins: {
          dev: ['http://localhost:3000'],
          test: ['https://app.test.azorak.com'],
          preview: ['https://app.preview.azorak.com'],
          production: ['http://localhost:3000', 'https://app.azorak.com'],
        },
      },
    });

    await server.start();
  } catch (err: any) {
    console.log('err', err);
    const exception = new CaughtException('Failed to start Core API', {
      cause: err,
      origin: {
        file: 'index.ts',
        function: 'init()',
      },
    });

    logger.exception(exception.toJSON());
  }
};

export default init();
`;

  await fs.writeFile(
    path.join(BUILD_PATH, `index.ts`),
    indexFileString,
    'utf8',
  );
}
