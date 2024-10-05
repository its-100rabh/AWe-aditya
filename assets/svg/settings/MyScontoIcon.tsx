import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={16} height={18} fill="none" {...props}>
    <Path
      d="M9.737 1.912a5.517 5.517 0 1 0-2.856 10.659l.98-3.656a1.732 1.732 0 1 1 .896-3.347l.98-3.656Z"
      fill="#070707"
    />
    <Path
      d="M5.758 16.01A5.518 5.518 0 0 0 8.614 5.35l-.98 3.656a1.733 1.733 0 0 1-.897 3.347l-.98 3.656Z"
      fill="#070707"
    />
    <Circle cx={4.366} cy={13.684} r={1.726} transform="rotate(15 4.366 13.684)" fill="#070707" />
    <Circle cx={11.364} cy={4.135} r={1.726} transform="rotate(15 11.364 4.135)" fill="#070707" />
  </Svg>
);

const MyScontoIcon = memo(SvgComponent);
export default MyScontoIcon;
