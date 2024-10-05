import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={29} height={28} fill="none" {...props}>
    <Path
      d="m14.3.113 3.036 10.815 10.815 3.037L17.336 17l-3.037 10.815-3.036-10.815L.448 13.965l10.815-3.037L14.299.113Z"
      fill="#fff"
    />
  </Svg>
);

const FourStarIcon = memo(SvgComponent);
export default FourStarIcon;
