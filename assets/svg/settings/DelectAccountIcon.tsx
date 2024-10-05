import * as React from 'react';
import Svg, { SvgProps, Circle, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={21} height={21} fill="none" {...props}>
    <Circle cx={10.747} cy={10.617} r={9.061} fill="#070707" />
    <Path
      d="M10.748 14.326v-3.709m0-3.709h.009m9.263 3.71a9.273 9.273 0 1 1-18.546 0 9.273 9.273 0 0 1 18.546 0Z"
      stroke="#fff"
      strokeWidth={1.855}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DeleteAccountIcon = memo(SvgComponent);
export default DeleteAccountIcon;
