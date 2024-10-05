import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MobileSignInIcon = (props) => (
  <Svg
    width={18}
    height={22}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.156 6.018v10c0 4-1 5-5 5h-6c-4 0-5-1-5-5v-10c0-4 1-5 5-5h6c4 0 5 1 5 5zM11.156 4.518h-4"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.155 18.118a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1z"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MobileSignInIcon;
