import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={12} height={19} fill="none" {...props}>
    <Path
      d="M6.587 13.375h.25v-.862c0-1.25.81-1.894 1.789-2.675l.17-.137c1.038-.83 2.148-1.82 2.148-3.814 0-1.402-.479-2.54-1.468-3.408C8.514 1.614 7.271 1.19 5.77 1.19c-1.582 0-2.894.482-3.81 1.401-.916.92-1.409 2.248-1.409 3.886v.25h2.384v-.25c0-1.012.271-1.79.748-2.313.474-.52 1.179-.817 2.11-.817.9 0 1.587.282 2.048.736.462.454.72 1.101.72 1.872 0 1.366-.836 2.008-1.828 2.77l-.128.098c-.514.396-1.055.833-1.465 1.422-.414.596-.686 1.338-.686 2.336v.794h2.133Zm-1.924 4.26a1.387 1.387 0 0 0 1.942 0 1.387 1.387 0 0 0 0-1.941 1.387 1.387 0 0 0-1.942 0 1.387 1.387 0 0 0 0 1.942Z"
      fill="#000"
      stroke="#000"
      strokeWidth={0.5}
    />
  </Svg>
);

const HelpIcon = memo(SvgComponent);
export default HelpIcon;
