"use strict";
exports.__esModule = true;
exports.DeploymentStrategy = void 0;
var DeploymentStrategy;
(function (DeploymentStrategy) {
    DeploymentStrategy["BlueGreen"] = "blue-green";
    DeploymentStrategy["Canary"] = "canary";
    DeploymentStrategy["Rolling"] = "rolling";
})(DeploymentStrategy = exports.DeploymentStrategy || (exports.DeploymentStrategy = {}));
// export type Deployment = {
//   readonly id: string;
//   readonly status: DeploymentStatus;
//   readonly target: DeploymentTarget;
//   readonly ApplicationId: Application['id'];
//   readonly EnvironmentId: Environment['id'];
//   readonly CreatedDate: DateTime;
//   readonly PipelineWorkflowId: PipelineWorkflow['id'];
// };
