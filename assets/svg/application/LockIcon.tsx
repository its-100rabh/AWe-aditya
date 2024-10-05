import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const LockIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M12.153 18.195a1.63 1.63 0 100-3.26 1.63 1.63 0 000 3.26z" fill="#131313" />
    <Path
      d="M18.434 10.376v-1.25c0-2.7-.65-6.28-6.28-6.28s-6.28 3.58-6.28 6.28v1.25c-2.8.35-3.72 1.77-3.72 5.26v1.86c0 4.1 1.25 5.35 5.35 5.35h9.3c4.1 0 5.35-1.25 5.35-5.35v-1.86c0-3.49-.92-4.91-3.72-5.26zm-6.28 9.21c-1.67 0-3.02-1.36-3.02-3.02 0-1.67 1.36-3.02 3.02-3.02a3.03 3.03 0 013.02 3.02c0 1.67-1.35 3.02-3.02 3.02zm-4.65-9.3h-.23v-1.16c0-2.93.83-4.88 4.88-4.88s4.88 1.95 4.88 4.88v1.17H7.504v-.01z"
      fill="#848484"
    />
  </Svg>
);

export default LockIcon;
