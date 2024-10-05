import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Path
      d="M12.926 20.596a2 2 0 0 1-3.46 0m11.73-4h-20a3 3 0 0 0 3-3v-5a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const NotificationIcon = memo(SvgComponent);
export default NotificationIcon;
