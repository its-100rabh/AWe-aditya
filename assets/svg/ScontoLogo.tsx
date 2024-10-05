import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';

type ScontoLogoSVGProps = SvgProps & {};

const ScontoLogoSVG: React.FC<ScontoLogoSVGProps> = ({ color = '#070707', ...props }) => (
  <Svg width={20} height={23} fill="none" {...props}>
    <Path
      d="M12.478 2.751a6.939 6.939 0 0 0-3.592 13.405l1.232-4.598a2.178 2.178 0 1 1 1.128-4.209l1.232-4.598Z"
      fill={color}
    />
    <Path
      d="M7.474 20.48a6.938 6.938 0 1 0 3.591-13.404l-1.231 4.597a2.179 2.179 0 1 1-1.128 4.21L7.474 20.48Z"
      fill={color}
    />
    <Circle cx={5.724} cy={17.556} r={2.171} transform="rotate(15 5.724 17.556)" fill={color} />
    <Circle cx={14.524} cy={5.548} r={2.171} transform="rotate(15 14.524 5.548)" fill={color} />
  </Svg>
);

const ScontoLogo = React.memo(ScontoLogoSVG);

ScontoLogo.displayName = 'ScontoLogo';

export default ScontoLogo;
