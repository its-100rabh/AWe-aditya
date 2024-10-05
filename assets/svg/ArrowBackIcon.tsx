import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowBackIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.726 6.238l-6.07 6.07 6.07 6.07M20.658 12.309H3.828"
      stroke="#131313"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowBackIcon;
