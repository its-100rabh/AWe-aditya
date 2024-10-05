import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Path
      d="M21.329 16.135v3a1.999 1.999 0 0 1-2.18 2 19.789 19.789 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67 2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2.001 2.001 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7a2 2 0 0 1 1.72 2.03Z"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ContactUsIcon = memo(SvgComponent);
export default ContactUsIcon;
