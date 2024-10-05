import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ActiveHomeIcon = (props) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.05 3.267L4.437 7.642c-.937.73-1.698 2.281-1.698 3.458v7.72c0 2.416 1.969 4.395 4.386 4.395h12.062a4.399 4.399 0 004.386-4.386v-7.583c0-1.26-.844-2.875-1.875-3.594l-6.438-4.51c-1.458-1.02-3.802-.969-5.208.125z"
      fill="#FCBA00"
    />
    <Path
      d="M13.154 19.048v-3.125"
      stroke="#131313"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ActiveHomeIcon;
