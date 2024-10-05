import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DownloadRecieptIcon = (props) => (
  <Svg
    width={17}
    height={16}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.844 7.333v4L8.177 10M6.845 11.333L5.512 10"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.51 6.666V10c0 3.333-1.334 4.666-4.668 4.666h-4c-3.333 0-4.666-1.333-4.666-4.666V6c0-3.334 1.333-4.667 4.666-4.667h3.334"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.51 6.666h-2.668c-2 0-2.666-.666-2.666-2.666V1.333l5.333 5.333z"
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DownloadRecieptIcon;
