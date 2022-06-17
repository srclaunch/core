import { Exception } from '@srclaunch/exceptions';
// import { Logger } from '@srclaunch/logger';
import * as AWS from 'aws-sdk';

import { ExceptionObject } from '../../../types/src';

AWS.config.update({ region: process.env.AWS_REGION });

// const logger = new Logger();

export async function getSecrets(
  paths: readonly string[],
): Promise<AWS.SSM.ParameterList | void> {
  try {
    const ssm = new AWS.SSM({ region: process.env.AWS_REGION });

    const options = {
      Names: paths as string[],
      WithDecryption: false,
    };

    const parameterPromise = await ssm.getParameters(options).promise();

    // logger.debug({
    //   data: parameterPromise.Parameters,
    //   message: 'AWS SSM Secrets',
    // });

    return parameterPromise.Parameters;
  } catch (error: any) {
    const exception = new Exception(
      `Error caught in getSecret(): ${error.name}`,

      {
        cause: error as Error,
        tags: {
          file: '',
        },
      },
    );

    // logger.exception(exception.toJSON());
  }
}

export async function getParameters(
  paths: readonly string[],
): Promise<AWS.SSM.ParameterList | void> {
  try {
    const ssm = new AWS.SSM({ region: process.env.AWS_REGION });

    const options = {
      Names: paths as string[],
      WithDecryption: false,
    };
    const parameterPromise = await ssm.getParameters(options).promise();

    // logger.debug({
    //   data: parameterPromise.Parameters,
    //   message: 'AWS SSM Parameters',
    // });

    return parameterPromise.Parameters;
    // parameterPromise.then(
    //   (data: PromiseResult<AWS.SSM.GetParameterResult>, err: AWSError) => {
    //     if (err) throw err;

    //     // an error occurred
    //     console.log(data);

    //     return data; // successful response
    //   },
    // );
  } catch (error: any) {
    const exception = new Exception(
      `Error caught in getParameters(): ${error.name}`,
      {
        cause: error as Error,
        tags: {
          file: '',
        },
      },
    );

    // logger.exception(exception.toJSON() as ExceptionObject);
  }
}
