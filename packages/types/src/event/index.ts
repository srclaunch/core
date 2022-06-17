export interface Event {
  readonly context?: Record<string, unknown>;
  readonly id?: string;
  readonly name?: string;
  readonly description?: string;
}
