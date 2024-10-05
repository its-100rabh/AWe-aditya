import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MailSignInIcon = (props) => (
  <Svg
    width={25}
    height={25}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12.656 20.518h-5c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3"
      stroke="#EFEFEF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.656 9.018l-3.13 2.5c-1.03.82-2.72.82-3.75 0l-3.12-2.5M19.867 14.788l-3.54 3.54c-.14.14-.27.4-.3.59l-.19 1.35c-.07.49.27.83.76.76l1.35-.19c.19-.03.46-.16.59-.3l3.54-3.54c.61-.61.9-1.32 0-2.22-.89-.89-1.6-.6-2.21.01zM19.355 15.297c.3 1.08 1.14 1.92 2.22 2.22"
      stroke="#EFEFEF"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MailSignInIcon;
