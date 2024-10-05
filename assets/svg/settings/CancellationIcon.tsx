import * as React from 'react';
import Svg, { SvgProps, G, Circle, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={33} fill="none" {...props}>
    <G filter="url(#a)" stroke="#000" strokeWidth={2}>
      <Circle cx={16.436} cy={12.623} r={10.893} />
      <Path d="M24.124 4.935 8.747 20.312" strokeLinecap="round" />
    </G>
    <Defs />
  </Svg>
);

const CancellationIcon = memo(SvgComponent);
export default CancellationIcon;
