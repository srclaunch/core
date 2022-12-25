import { useState } from 'react';

export function useScroll() {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
  });
  const [scrollDimensions, setScrollDimensions] = useState({
    height: 0,
    width: 0,
  });
  const [clientDimensions, setClientDimensions] = useState({
    height: 0,
    width: 0,
  });

  const onScrollHandler = (e: React.UIEvent<HTMLElement>) => {
    setScrollPosition({
      x: e.currentTarget.scrollLeft,
      y: e.currentTarget.scrollTop,
    });
    setScrollDimensions({
      height: e.currentTarget.scrollHeight,
      width: e.currentTarget.scrollWidth,
    });
    setClientDimensions({
      height: e.currentTarget.clientHeight,
      width: e.currentTarget.clientWidth,
    });
  };

  const getDimensions = (e: HTMLDivElement) => {
    setScrollPosition({
      x: e.scrollLeft,
      y: e.scrollTop,
    });
    setScrollDimensions({
      height: e.scrollHeight,
      width: e.scrollWidth,
    });
    setClientDimensions({
      height: e.clientHeight,
      width: e.clientWidth,
    });
  };

  function getBoxShadow() {
    const isLeft = scrollPosition.x === 0;
    const isRight =
      clientDimensions.width === scrollDimensions.width - scrollPosition.x;
    const isTop = scrollPosition.y === 0;
    const isBottom =
      clientDimensions.height === scrollDimensions.height - scrollPosition.y;

    const none = 'inset 0 0 0 0 rgba(0, 0, 0, 0)';
    const top = 'inset 0 10px 16px -4px rgba(200, 200, 200, .3)';
    const bottom = 'inset 0 -10px 16px -4px rgba(200, 200, 200, .3)';
    const left = 'inset 10px 0 16px -4px rgba(200, 200, 200, .3)';
    const right = 'inset -10px 0px 16px -4px rgba(200, 200, 200, .3)';

    return {
      bottom: isBottom ? none : bottom,
      left: isLeft ? none : left,
      right: isRight ? none : right,
      top: isTop ? none : top,
    };
  }

  return { boxShadow: getBoxShadow(), getDimensions, onScrollHandler };
}
