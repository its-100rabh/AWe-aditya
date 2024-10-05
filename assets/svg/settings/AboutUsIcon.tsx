import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={23} fill="none" {...props}>
    <Path
      d="M17.916 8.606h1a4 4 0 0 1 0 8h-1m0-8h-16v9a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-9Zm-12-7v3m4-3v3m4-3v3"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AboutUsIcon = memo(SvgComponent);
export default AboutUsIcon;
