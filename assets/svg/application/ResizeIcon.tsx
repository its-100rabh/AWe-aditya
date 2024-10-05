import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ResizeIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.344 2.846h-8.37c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.64 2.17 5.81 5.81 5.81h8.37c3.64 0 5.81-2.17 5.81-5.81v-8.37c0-3.64-2.17-5.81-5.81-5.81zm-5.19 5.5c0 .28-.22.5-.5.5h-1.5c-.55 0-1 .45-1 1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-1.5c0-2.21 1.79-4 4-4h1.5c.28 0 .5.22.5.5v2zm8 7.5c0 2.21-1.79 4-4 4h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h1.5c.55 0 1-.45 1-1v-1.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v1.5z"
      fill="#848484"
    />
  </Svg>
);

export default ResizeIcon;
