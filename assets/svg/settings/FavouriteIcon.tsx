import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={21} height={23} fill="none" {...props}>
    <Path
      d="m11.435 1.277-10 12h9l-1 8 10-12h-9l1-8Z"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const FavouriteIcon = memo(SvgComponent);
export default FavouriteIcon;
