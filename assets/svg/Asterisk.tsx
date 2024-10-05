import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = ({ fill, ...props }: SvgProps) => (
  <Svg width={39} height={37} fill="none" {...props}>
    <Path
      d="m11.642 36.424-6.024-4.381 8.652-11.171L.745 16.765l2.3-7.065 13.307 4.71L16.023.227h7.447l-.328 14.183L36.394 9.7l2.3 7.065-13.471 4.107 8.543 11.171-6.024 4.38-7.995-11.609-8.105 11.61Z"
      fill={fill}
    />
  </Svg>
);

const Asterisk = memo(SvgComponent);
export default Asterisk;
