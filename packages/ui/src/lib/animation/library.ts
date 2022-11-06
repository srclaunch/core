import { Animation, AnimationProps, AnimationTimingProps } from '../../types';

export const FadeIn: AnimationProps<{ readonly opacity?: number }> = {
  animateFrom: {
    opacity: 0,
  },
  animateTo: {
    opacity: 1,
  },
  animationName: Animation.FadeIn,
};

export const FadeOut: AnimationProps = {
  animateFrom: {
    visibility: {
      opacity: 1,
    },
  },
  animateTo: {
    visibility: {
      opacity: 0,
    },
  },
  animationName: Animation.FadeOut,
};

export const SlideDown: AnimationProps = {
  animateFrom: {
    transform: {
      translate: {
        y: '-100%',
      },
    },
  },
  animateTo: {
    transform: {
      translate: {
        y: 0,
      },
    },
  },
  animationName: Animation.SlideDown,
};

export const SlideLeft: AnimationProps = {
  animateFrom: {
    transform: {
      translate: {
        x: '-100%',
      },
    },
  },
  animateTo: {
    transform: {
      translate: {
        x: 0,
      },
    },
  },
  animationName: Animation.SlideLeft,
};

export const SlideRight: AnimationProps = {
  animateFrom: {
    transform: {
      translate: {
        x: '100%',
      },
    },
  },
  animateTo: {
    transform: {
      translate: {
        x: 0,
      },
    },
  },

  animationName: Animation.SlideRight,
};
