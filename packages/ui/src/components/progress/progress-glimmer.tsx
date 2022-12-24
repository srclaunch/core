import styled from 'styled-components';

const Container = styled.div<{
  readonly visible?: boolean;
}>`
  animation: shimmer 1s infinite;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.07) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: 100% 100%;
  bottom: 0;
  left: 0;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s ease-in-out;

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`;

export const ProgressGlimmer = ({
  visible,
}: {
  readonly visible?: boolean;
}) => {
  return <Container visible={visible} />;
};
