import * as React from 'react';
import Svg, { SvgProps, Rect, Path, Circle } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={28} height={28} fill="none" {...props}>
    <Rect
      x={3.494}
      y={3.451}
      width={23.67}
      height={23.67}
      rx={11.835}
      fill="#fff"
      stroke="#000"
      strokeWidth={0.8}
    />
    <Rect
      x={1.27}
      y={1.228}
      width={23.67}
      height={23.67}
      rx={11.835}
      fill="#fff"
      stroke="#000"
      strokeWidth={0.8}
    />
    <Path
      d="M14.847 6.982a4.772 4.772 0 1 0-2.47 9.219l.847-3.162A1.499 1.499 0 0 1 14 10.144l.847-3.162Z"
      fill="#070707"
    />
    <Path
      d="M11.406 19.175a4.772 4.772 0 1 0 2.47-9.22l-.847 3.163a1.499 1.499 0 0 1-.776 2.895l-.847 3.162Z"
      fill="#070707"
    />
    <Circle cx={10.201} cy={17.164} r={1.493} transform="rotate(15 10.201 17.164)" fill="#070707" />
    <Circle cx={16.255} cy={8.905} r={1.493} transform="rotate(15 16.255 8.905)" fill="#070707" />
  </Svg>
);

const ScontoOverlayLogo = memo(SvgComponent);
export default ScontoOverlayLogo;
