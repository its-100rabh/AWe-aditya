import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={19} height={19} fill="none" {...props}>
    <Path
      d="M17.747 9.134v.736a8 8 0 1 1-4.744-7.312m4.744.912-8 8.007-2.4-2.4"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TermsIcon = memo(SvgComponent);
export default TermsIcon;
