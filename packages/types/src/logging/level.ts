/*
  This is a decent start, but I should make the log level TSDoc's more clear
  of the intention and expected result from using each level.
*/
export enum LogLevel {
  /**
   * Analytics (Business/Web) related events.
   */
  Analytics = 'analytics',
  /**
   * Exception that needs urgent review by engineers.
   */
  Critical = 'critical',
  /**
   * Logging used by developers to temporarily debug an issue.
   */
  Debug = 'debug',
  /**
   * A runtime error that does not require immediate attention.
   */
  Error = 'error',
  /**
   * An HTTP request/response event. Default is 'info' level.
   */
  Http = 'http',
  /**
   * Used for logging general information regarding application processes.
   */
  Info = 'info',
  /**
   * Used to warn about possible issues.
   */
  Warning = 'warning',
}
