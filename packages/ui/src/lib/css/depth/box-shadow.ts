import { Depth, Shadow } from '../../../types';

export function getCSSBoxShadowFromDepth(depth: Depth) {
  switch (depth) {
    case Depth.Lowest:
      return Shadow.Lowest;
    case Depth.Lower:
      return Shadow.Lower;
    case Depth.Low:
      return Shadow.Surface;
    case Depth.High:
      return Shadow.High;
    case Depth.Higher:
      return Shadow.Higher;
    case Depth.Highest:
      return Shadow.Highest;
    default:
      return Shadow.Surface;
  }
}
