export interface AnalyzerClass {
  readonly name?: string;
  readonly description?: string;
  readonly process?: (context: unknown) => Promise<void>;
}

export class Analyzer implements AnalyzerClass {}
