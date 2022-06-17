// import WinstonCloudWatch from 'winston-cloudwatch';

export function getCloudwatchTransport({
  awsAccessKeyId,
  awsRegion,
  awsSecretKey,
  level: logLevel,
  logGroupName,
  logStreamName,
  retentionInDays = 90,
}: {
  readonly awsAccessKeyId: string;
  readonly awsRegion: string;
  readonly awsSecretKey: string;
  readonly level?: string;
  readonly logGroupName: string;
  readonly logStreamName: string;
  readonly retentionInDays?: number;
}) {
  // : WinstonCloudWatch
  // const cloudwatchConfig =
  //   // : WinstonCloudWatch.CloudwatchTransportOptions
  //   {
  //     awsAccessKeyId,
  //     awsRegion,
  //     awsSecretKey,
  //     level: logLevel,
  //     logGroupName,
  //     logStreamName,
  //     messageFormatter: ({
  //       level,
  //       message,
  //       meta,
  //     }: {
  //       level: string;
  //       message: string;
  //       meta?: string;
  //     }): string =>
  //       `[${level}] : ${message} ${JSON.stringify(meta, undefined, 2)}}`,
  //     name: 'CloudwatchTransport',
  //     retentionInDays,
  //   };
  // return new WinstonCloudWatch(cloudwatchConfig);
}
