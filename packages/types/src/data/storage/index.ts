export type DataStore = Record<string, unknown>;
export type RedisStore = DataStore & Record<string, unknown>;
export type RdsDatabase = DataStore & Record<string, unknown>;
export type PostgresDatabase = RdsDatabase & Record<string, unknown>;
