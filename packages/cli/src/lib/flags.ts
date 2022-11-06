import { Flag, FlagType } from 'meow';

export type InteractiveModeFlagType = {
  readonly interactive: Flag<'boolean', true, false>;
};

export const InteractiveModeFlag: InteractiveModeFlagType = {
  interactive: {
    alias: 'i',
    default: true,
    type: 'boolean',
  },
};
