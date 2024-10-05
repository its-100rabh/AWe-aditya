import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={15} height={15} fill="none" {...props}>
    <Path
      d="m9.626 8.973 3.757-3.756m0 0L9.626 1.46m3.757 3.757H4.368a3.005 3.005 0 0 0-3.005 3.005v5.258"
      stroke="#070707"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ShareIcon = memo(SvgComponent);
export default ShareIcon;
