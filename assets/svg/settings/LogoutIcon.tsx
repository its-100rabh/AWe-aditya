import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={15} height={16} fill="none" {...props}>
    <Path
      d="M11.99 4.455a6 6 0 1 1-8.486 0M7.751 1.36v6.667"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const LogoutIcon = memo(SvgComponent);
export default LogoutIcon;
