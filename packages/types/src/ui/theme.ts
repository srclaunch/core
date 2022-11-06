export type CSSModule = {
  readonly [className: string]: string;
};

export type Theme = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly css: CSSModule;
};
