# budgetbloom-web

## Building Application and Dependencies From Scratch using Github and AWS.

1. Create VPC with name of repository, in this case "budgetbloom-web".
2. Create two public subnets and assign to VPC.
3. ??? Create Internet Gateway or something and attach to subnets ???
4. Execute `./cloudformation-templates/deploy-iam-user-and-role.sh` to create the required roles and service user.
5. Execute `./cloudformation-templates/get-iam-access-keys.sh` to retrieve the AWS access key and access secret token.
6. Create new secrets on Github with the AWS key/token values as `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.

## Branching Strategy

## Environments

### Developer Environment

1. `brew install nvm`
2. `nvm install 14.17`
3. `nvm alias default 14.17`
4. `npm install`
5. `npm run dev`

### Test Environment

### Preview Environment

### Production Environment

## Setting up developer environment
