import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const TickIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.667 1.907c-4.592 0-8.334 3.742-8.334 8.334 0 4.591 3.742 8.333 8.334 8.333 4.591 0 8.333-3.742 8.333-8.333 0-4.592-3.742-8.334-8.333-8.334zm3.983 6.417l-4.725 4.725a.624.624 0 01-.883 0l-2.359-2.358a.629.629 0 010-.884.629.629 0 01.884 0l1.916 1.917 4.284-4.283a.629.629 0 01.883 0 .629.629 0 010 .883z"
      fill="#131313"
    />
  </Svg>
);

export default TickIcon;
