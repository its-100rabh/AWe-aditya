import * as React from 'react';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Svg, { Circle, G, Path, Defs, ClipPath, SvgProps } from 'react-native-svg';

const WhatsappIcon = (props: SvgProps) => (
  <Svg
    width={widthPercentageToDP(16)}
    height={widthPercentageToDP(16)}
    viewBox="0 0 67 67"
    fill="none"
    {...props}
  >
    <Circle cx={33.481} cy={33.3403} r={32.1763} fill="#fff" stroke="#CBCBCB" />
    <G clipPath="url(#clip0_315_27447)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44.757 21.986a15.74 15.74 0 00-11.208-4.646c-8.734 0-15.843 7.107-15.846 15.844a15.812 15.812 0 002.115 7.921l-2.248 8.212 8.4-2.204a15.824 15.824 0 007.572 1.928h.007c8.732 0 15.842-7.108 15.845-15.844a15.748 15.748 0 00-4.637-11.21zm-11.208 24.38h-.006c-2.362-.001-4.68-.636-6.703-1.836l-.48-.286-4.986 1.308 1.33-4.86-.312-.499a13.137 13.137 0 01-2.014-7.008c.003-7.261 5.911-13.17 13.176-13.17a13.08 13.08 0 019.31 3.863 13.089 13.089 0 013.854 9.317c-.003 7.262-5.91 13.17-13.17 13.17zm7.224-9.864c-.396-.198-2.343-1.155-2.706-1.287-.363-.133-.627-.199-.89.198-.264.397-1.023 1.289-1.254 1.552-.231.264-.462.297-.858.099-.395-.198-1.671-.616-3.184-1.965-1.177-1.05-1.971-2.346-2.202-2.743-.231-.396-.025-.61.173-.807.177-.178.396-.463.594-.694.198-.23.264-.396.396-.66.132-.265.066-.495-.033-.694-.099-.198-.89-2.147-1.22-2.94-.322-.771-.649-.666-.891-.68-.231-.01-.495-.013-.76-.013-.264 0-.692.099-1.055.495-.363.397-1.386 1.355-1.386 3.303s1.418 3.832 1.617 4.096c.198.264 2.792 4.263 6.763 5.979a22.73 22.73 0 002.257.834c.948.301 1.812.259 2.494.157.76-.114 2.342-.958 2.672-1.883.33-.924.33-1.717.23-1.882-.098-.165-.362-.265-.758-.463v-.002z"
        fill="#25D366"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_315_27447">
        <Path fill="#fff" transform="translate(17.57 17.34)" d="M0 0H31.8232V32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WhatsappIcon;
