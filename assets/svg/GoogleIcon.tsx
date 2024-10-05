import * as React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Circle, Path } from 'react-native-svg';

const GoogleIcon = (props) => (
  <Svg
    width={widthPercentageToDP(15)}
    height={widthPercentageToDP(15)}
    viewBox="0 0 66 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={33.481} cy={33.3403} r={32.1763} fill="#fff" stroke="#CBCBCB" />
    <Path
      d="M33.152 30.43v6.196h8.611c-.378 1.993-1.513 3.68-3.214 4.815l5.192 4.029c3.026-2.793 4.771-6.895 4.771-11.767 0-1.135-.102-2.226-.29-3.273h-15.07z"
      fill="#4285F4"
    />
    <Path
      d="M24.184 36.385l-1.171.896-4.146 3.23c2.633 5.221 8.029 8.828 14.283 8.828 4.32 0 7.942-1.425 10.59-3.869l-5.193-4.029c-1.426.96-3.244 1.542-5.397 1.542-4.16 0-7.694-2.807-8.96-6.589l-.006-.01z"
      fill="#34A853"
    />
    <Path
      d="M18.869 26.168a15.802 15.802 0 00-1.717 7.17c0 2.59.626 5.019 1.717 7.172 0 .014 5.323-4.131 5.323-4.131a9.588 9.588 0 01-.509-3.04c0-1.062.19-2.08.51-3.04l-5.324-4.131z"
      fill="#FBBC05"
    />
    <Path
      d="M33.15 23.71c2.357 0 4.452.815 6.124 2.386l4.582-4.582c-2.778-2.589-6.385-4.174-10.705-4.174-6.255 0-11.651 3.593-14.284 8.829l5.324 4.13c1.265-3.781 4.8-6.588 8.96-6.588z"
      fill="#EA4335"
    />
  </Svg>
);

export default GoogleIcon;
