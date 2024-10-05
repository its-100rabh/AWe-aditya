import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';

const ArrowRightIcon = (props) => (
  <Svg
    width={109}
    height={7}
    viewBox="0 0 109 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M108.399 3.5L105.512.613 102.625 3.5l2.887 2.887 2.887-2.887zM.191 4h105.321V3H.192v1z"
      fill="url(#paint0_linear_315_24022)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_315_24022"
        x1={105.512}
        y1={3.5}
        x2={0.191406}
        y2={3.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#131313" />
        <Stop offset={1} stopColor="#131313" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default ArrowRightIcon;
