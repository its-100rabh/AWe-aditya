import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const DiscoverIcon = (props) => (
  <Svg
    width={25}
    height={26}
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.453 2.496L8.523 5.09c-1.45.375-2.92 1.906-3.28 3.417L2.753 18.85c-.75 3.125 1.09 5.052 4.1 4.271l9.93-2.583c1.44-.375 2.92-1.917 3.28-3.417l2.49-10.354c.75-3.125-1.1-5.052-4.1-4.27z"
      stroke="#A7A7A7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.654 16.455c1.933 0 3.5-1.632 3.5-3.646 0-2.014-1.567-3.646-3.5-3.646s-3.5 1.632-3.5 3.646c0 2.014 1.567 3.646 3.5 3.646z"
      stroke="#A7A7A7"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default DiscoverIcon;
