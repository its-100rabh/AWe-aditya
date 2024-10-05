import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DropIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.745 8.256l-10.28 10.28c-.48.48-1.3.37-1.59-.24a8.122 8.122 0 01-.82-3.55c-.02-5.52 5.58-10.24 7.48-11.69.37-.28.87-.28 1.23 0 .87.66 2.5 2.03 4.03 3.83.34.4.32 1-.05 1.37zM20.254 14.755c0 4.46-3.63 8.09-8.1 8.09a8.06 8.06 0 01-4.81-1.58c-.49-.36-.53-1.08-.1-1.51l10.07-10.07c.47-.47 1.26-.37 1.58.21.82 1.51 1.37 3.15 1.36 4.86z"
      fill="#848484"
    />
  </Svg>
);

export default DropIcon;
