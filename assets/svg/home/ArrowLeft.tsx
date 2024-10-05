import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ArrowLeft = (props) => (
  <Svg
    width={108}
    height={7}
    viewBox="0 0 108 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.625 3.5l2.887 2.887L6.398 3.5 3.512.613.625 3.5zm2.887.5h104.293V3H3.512v1z"
      fill="url(#paint0_linear_315_24024)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_315_24024"
        x1={3.51172}
        y1={3.5}
        x2={107.805}
        y2={3.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#131313" />
        <Stop offset={1} stopColor="#131313" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ArrowLeft;
