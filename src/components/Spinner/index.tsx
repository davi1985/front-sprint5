import { css } from '@emotion/react';
import MoonLoader from 'react-spinners/MoonLoader';

const override = css`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;
`;

type SpinnerProps = {
  loading: boolean;
};

export function Spinner({ loading }: SpinnerProps) {
  return (
    <MoonLoader
      css={override}
      size={50}
      color="#6464da"
      loading={loading}
      speedMultiplier={0.5}
    />
  );
}
