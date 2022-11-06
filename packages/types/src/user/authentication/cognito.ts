import { UserVerificationStatus } from './verification';

export type CognitoUsernameAttributeType = 'phone_number' | 'email' | string;

type CognitoAttributeNameType = string;
type CognitoAttributeValueType = string;
interface CognitoAttributeType {
  Name: CognitoAttributeNameType;
  Value?: CognitoAttributeValueType;
}
type CognitoAttributeListType = CognitoAttributeType[];

export type CognitoUser = {
  attributes?: CognitoAttributeListType;
  status?: UserVerificationStatus;
  username?: CognitoUsernameAttributeType;
};
