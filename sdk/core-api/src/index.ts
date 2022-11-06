import { CaughtException } from '@srclaunch/exceptions';
import { CoreAPIServer } from '@srclaunch/core-api-server';
import SequelizeModels from '@srclaunch/sequelize-models-sdk';
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
