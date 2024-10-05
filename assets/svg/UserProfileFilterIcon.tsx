import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const UserProfileFilterIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_315_26571)" fill="#292D32">
      <Path d="M17.694 9.656a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM6.616 9.656a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM17.694 21.956a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92zM6.616 21.956a2.96 2.96 0 100-5.92 2.96 2.96 0 000 5.92z" />
    </G>
    <Defs>
      <ClipPath id="clip0_315_26571">
        <Path fill="#fff" transform="translate(.156 .846)" d="M0 0H24V24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default UserProfileFilterIcon;
