import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={19} height={23} fill="none" {...props}>
    <Path
      d="M9.435 21.032s8-4 8-10v-7l-8-3-8 3v7c0 6 8 10 8 10Z"
      stroke="#111"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const PrivacyPolicyIcon = memo(SvgComponent);
export default PrivacyPolicyIcon;
