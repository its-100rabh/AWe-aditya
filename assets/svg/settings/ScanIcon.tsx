import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = ({ fill = '#fff', ...props }: SvgProps) => (
  <Svg width={28} height={20} fill="none" {...props}>
    <Path
      d="M10.323 1.237H7.418a1.937 1.937 0 0 0-1.936 1.936v2.905m17.43 0V3.173a1.937 1.937 0 0 0-1.938-1.936H18.07m0 17.43h2.904a1.937 1.937 0 0 0 1.937-1.937v-2.905m-17.43 0v2.905a1.937 1.937 0 0 0 1.937 1.936h2.905M1.631 9.65H26.38"
      stroke={fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ScanIcon = memo(SvgComponent);
export default ScanIcon;
