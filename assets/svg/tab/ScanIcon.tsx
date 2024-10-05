import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ScanIcon = (props) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.738 9.683V7.08a4.681 4.681 0 014.688-4.687h2.604M16.28 2.392h2.604a4.681 4.681 0 014.687 4.687v2.604M23.57 16.976v1.562a4.681 4.681 0 01-4.687 4.688H17.32M10.03 23.225H7.426a4.681 4.681 0 01-4.688-4.687v-2.604M18.362 10.204v5.208c0 2.084-1.042 3.125-3.125 3.125H11.07c-2.083 0-3.125-1.041-3.125-3.125v-5.208c0-2.083 1.042-3.125 3.125-3.125h4.167c2.083 0 3.125 1.042 3.125 3.125zM20.447 12.808H5.863"
      stroke="#A7A7A7"
      strokeWidth={1.32287}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ScanIcon;
