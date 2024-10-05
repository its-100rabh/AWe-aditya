import * as React from 'react';
import Svg, { G, Rect, Path, Circle, Defs, ClipPath } from 'react-native-svg';

const IndianFlag = (props) => (
  <Svg
    width={45}
    height={45}
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_315_21285)">
      <Rect
        x={0.199219}
        y={0.235352}
        width={43.9121}
        height={43.9121}
        rx={21.9561}
        fill="#282828"
      />
      <Path fill="#ED7D31" d="M-8.21875 0.234375H52.53095V14.872275H-8.21875z" />
      <Path fill="#D9D9D9" d="M-8.21875 14.8721H52.53095V29.509999999999998H-8.21875z" />
      <Path fill="#3C6003" d="M-8.21875 29.5088H52.53095V44.1467H-8.21875z" />
      <Circle cx={22.1552} cy={22.1914} r={5.05366} fill="#003585" />
    </G>
    <Defs>
      <ClipPath id="clip0_315_21285">
        <Rect x={0.199219} y={0.235352} width={43.9121} height={43.9121} rx={21.9561} fill="#fff" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IndianFlag;
