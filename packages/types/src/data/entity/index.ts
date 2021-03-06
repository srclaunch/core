export type Entity = {
  id: string;
  created_date: Date;
  updated_date: Date;
} & Record<string, string | number | boolean>;
