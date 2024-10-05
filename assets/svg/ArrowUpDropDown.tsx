import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowUpDropDown = (props) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.488 10.314c0 4.592-3.741 8.334-8.333 8.334-4.592 0-8.333-3.742-8.333-8.334s3.741-8.333 8.333-8.333c4.592 0 8.333 3.741 8.333 8.333zM9.713 7.99l-2.941 2.942a.618.618 0 00-.184.442c0 .158.059.316.184.441a.629.629 0 00.883 0l2.5-2.5 2.5 2.5a.629.629 0 00.883 0 .629.629 0 000-.883l-2.941-2.942a.614.614 0 00-.884 0z"
      fill="#B7B7B7"
    />
  </Svg>
);

export default ArrowUpDropDown;
