export interface ValidationProblem {
  readonly message: {
    readonly long: 'Missing a required pattern.';
    readonly short: 'Missing string pattern';
  };
}
