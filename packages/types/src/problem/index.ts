export enum ProblemSeverity {
  Low = 'low',
  Medium = 'medium',
  High = 'high',
  Emergency = 'emergency',
}

export enum ProblemType {
  Bug = 'bug',
}

export interface Problem {
  readonly severity: ProblemSeverity;
  readonly type: ProblemType;
}
