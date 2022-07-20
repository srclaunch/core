import { RootState, useSelector } from '@srclaunch/web-app';

export function useConfig() {
  const config = useSelector((state: RootState) => state);

  return config;
}
