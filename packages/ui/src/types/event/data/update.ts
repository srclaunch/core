export type UpdateEventProps<A = Record<string, unknown>> = {
  readonly onUpdate?: (a: A) => void;
};
