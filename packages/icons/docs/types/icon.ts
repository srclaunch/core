import { ElementType } from 'react';

export type Icon = {
  icon?: ElementType;
  icons?: Icon[];
  description?: string;
  examples?: [
    {
      code?: string;
      description?: string;
      properties?: Record<string, any>;
      title: string;
    },
  ];
  name?: string;
  path: string;
  properties?: {
    [key: string]: {
      types: string[];
      required?: boolean;
    };
  };
  title: string;
};

export type IconLibrary = {
  name: string;
  description?: string;
  icons?: Icon[];
};
