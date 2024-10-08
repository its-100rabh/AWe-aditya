import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const WrongIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.667 1.907c-4.592 0-8.334 3.742-8.334 8.334 0 4.591 3.742 8.333 8.334 8.333 4.591 0 8.333-3.742 8.333-8.333 0-4.592-3.742-8.334-8.333-8.334zm2.8 10.25a.629.629 0 010 .884.618.618 0 01-.442.183.618.618 0 01-.442-.183l-1.916-1.917-1.917 1.917a.618.618 0 01-.442.183.618.618 0 01-.441-.183.629.629 0 010-.884l1.916-1.916-1.916-1.917a.629.629 0 010-.883.629.629 0 01.883 0l1.917 1.916 1.916-1.916a.629.629 0 01.884 0 .629.629 0 010 .883l-1.917 1.917 1.917 1.916z"
      fill="#F50000"
    />
  </Svg>
);

export default WrongIcon;
