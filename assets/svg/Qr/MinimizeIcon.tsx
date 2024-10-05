import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const MinimizeIcon = (props) => (
  <Svg
    width={37}
    height={37}
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={18.5469} cy={18.8164} r={17.5} fill="#FFCE45" stroke="#000" />
    <Path
      d="M11.975 8.816c-.42 0-.75.34-.75.75v2.03h-2.03a.749.749 0 100 1.5h2.78c.41 0 .75-.34.75-.75v-2.78c0-.41-.34-.75-.75-.75zM27.694 24.536h-2.78c-.41 0-.75.34-.75.75v2.78c0 .41.34.75.75.75s.75-.34.75-.75v-2.03h2.03c.41 0 .75-.34.75-.75s-.34-.75-.75-.75z"
      fill="#131313"
    />
    <Path
      d="M23.163 25.287c0-.96.79-1.75 1.75-1.75h.69v-6.67c0-2.89-2.34-5.23-5.23-5.23h-6.65v.69c0 .96-.79 1.75-1.75 1.75h-.7v6.67c0 2.89 2.34 5.23 5.23 5.23h6.67v-.69h-.01z"
      fill="#131313"
    />
  </Svg>
);

export default MinimizeIcon;
