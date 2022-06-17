import { RootState, useSelector } from '@srclaunch/web-application-state';

export function useConfig() {
  const config = useSelector((state: RootState) => state);

  return config;
}
