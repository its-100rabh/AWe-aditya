import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={13} height={15} fill="none" {...props}>
    <Path
      d="M6.976.888H2.309A1.333 1.333 0 0 0 .976 2.22v10.667a1.333 1.333 0 0 0 1.333 1.333h8a1.333 1.333 0 0 0 1.333-1.333V5.555L6.976.888Z"
      fill="#070707"
    />
    <Path d="M6.976.888v4.667h4.666" fill="#070707" />
    <Path
      d="M6.976.888H2.309A1.333 1.333 0 0 0 .976 2.22v10.667a1.333 1.333 0 0 0 1.333 1.333h8a1.333 1.333 0 0 0 1.333-1.333V5.555M6.976.888l4.666 4.667M6.976.888v4.667h4.666"
      stroke="#070707"
      strokeWidth={1.333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AppPermissionIcon = memo(SvgComponent);
export default AppPermissionIcon;
