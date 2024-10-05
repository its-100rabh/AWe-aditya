import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CommunityIcon = (props) => (
  <Svg
    width={25}
    height={26}
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.154 23.226h22M19.934 23.236V18.59M19.954 11.652c-1.22 0-2.2 1.021-2.2 2.292v2.365c0 1.27.98 2.291 2.2 2.291 1.22 0 2.2-1.02 2.2-2.291v-2.365c0-1.27-.98-2.292-2.2-2.292zM2.254 23.226V6.59c0-2.094 1-3.146 2.99-3.146h6.23c1.99 0 2.98 1.052 2.98 3.146v16.636M5.955 8.902h4.95M5.955 12.809h4.95M8.404 23.226v-3.907"
      stroke="#A7A7A7"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CommunityIcon;
