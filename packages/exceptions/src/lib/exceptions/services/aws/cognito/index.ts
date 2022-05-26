import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../../../types/index';
import {
  ExceptionRemediation,
  RetryStrategy,
} from '../../../../../types/remediation';
import { Exception } from '../../../../exception';
import { AWSException } from '../index';

export class CognitoException extends AWSException {
  override code = ExceptionCode.AWSException;
  override description =
    'An exception originating from the AWS Cognito integration occurred.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class CognitoInternalErrorException extends CognitoException {
  override code = ExceptionCode.CognitoInternalErrorException;
  override description =
    'An internal error occurred originating from AWS Cognito.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class CognitoInvalidUserPoolConfigurationException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidUserPoolConfigurationException;
  override description =
    'This exception is thrown when the user pool configuration ' +
    'is invalid.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidEmailRoleAccessPolicyException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException;
  override description =
    'There is an access policy exception for the role provided for email configuration.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidSmsRoleAccessPolicyException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException;
  override description =
    'This exception is returned when the role provided for SMS configuration ' +
    'does not have permission to publish using Amazon SNS.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidSmsRoleTrustRelationshipException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException;
  override description =
    'This exception is thrown when the trust relationship is invalid for the ' +
    'role provided for SMS configuration. This can happen if you do not trust ' +
    '-idp.amazonaws.com or the external ID provided in the role does not match ' +
    'what is provided in the SMS configuration for the user pool.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
export class CognitoMissingUserPoolClientIdException extends CognitoException {
  override code = ExceptionCode.CognitoMissingUserPoolClientIdException;
  override description =
    'Cognito user pool client ID configuration is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class CognitoMissingUserPoolIdException extends CognitoException {
  override code = ExceptionCode.CognitoMissingUserPoolIdException;
  override description = 'Cognito user pool ID configuration is missing.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class CognitoUnexpectedLambdaException extends CognitoException {
  override code = ExceptionCode.CognitoUnexpectedLambdaException;
  override description =
    'This exception is thrown when the Auth service encounters an ' +
    'unexpected exception with the AWS Lambda service.';
  override logLevel: Exception['logLevel'] = LogLevel.Critical;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class CognitoInvalidParameterException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidParameterException;
  override description =
    'This exception is thrown when the Cognito service encounters an invalid parameter.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class CognitoInvalidLambdaResponseException extends CognitoException {
  override code = ExceptionCode.CognitoInvalidLambdaResponseException;
  override description =
    'This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}
export class CognitoResourceNotFoundException extends CognitoException {
  override code = ExceptionCode.CognitoResourceNotFoundException;
  override description =
    'This exception is thrown when the Cognito service cannot find the requested resource.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class CognitoUserLambdaValidationException extends CognitoException {
  override code = ExceptionCode.CognitoUserLambdaValidationException;
  override description =
    'This exception is thrown when the Cognito service ' +
    'encounters a user validation exception with the AWS ' +
    'Lambda service.';
  override logLevel: Exception['logLevel'] = LogLevel.Exception;
  override remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}
