import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={21} height={23} fill="none" {...props}>
    <Path
      d="M9.225 1.85a2 2 0 0 1 1.942 0l7 3.887a2 2 0 0 1 1.03 1.75v7.645a2 2 0 0 1-1.03 1.748l-7 3.89a2 2 0 0 1-1.942 0l-7-3.89a2 2 0 0 1-1.029-1.747V7.486a2 2 0 0 1 1.03-1.749l7-3.888Z"
      stroke="#fff"
      strokeWidth={2}
    />
    <Circle cx={10.196} cy={11.309} r={3.631} stroke="#fff" strokeWidth={2} />
  </Svg>
);

const SettingsIcon = memo(SvgComponent);
export default SettingsIcon;
