import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const CloseIcon = (props) => (
  <Svg
    width={37}
    height={37}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={18.2031} cy={18.125} r={17.5} fill="#FFCE45" stroke="#000" />
    <Path
      d="M18.203 8.125c-5.51 0-10 4.49-10 10s4.49 10 10 10 10-4.49 10-10-4.49-10-10-10zm3.36 12.3c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22s-.38-.07-.53-.22l-2.3-2.3-2.3 2.3c-.15.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 010-1.06l2.3-2.3-2.3-2.3a.754.754 0 010-1.06c.29-.29.77-.29 1.06 0l2.3 2.3 2.3-2.3c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.3 2.3 2.3 2.3z"
      fill="#131313"
    />
  </Svg>
);

export default CloseIcon;
