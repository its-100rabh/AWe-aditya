import * as React from 'react';
import Svg, { Rect, G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const WhatsAppSigninIcon = (props) => (
  <Svg
    width={147}
    height={49}
    viewBox="0 0 147 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={1.11426}
      y={0.977905}
      width={145.067}
      height={47}
      rx={23.5}
      fill="#F5F5F5"
      stroke="#CBCBCB"
    />
    <G filter="url(#filter0_f_20_17505)">
      <Path
        d="M26.039 35.428l.479.284a13.098 13.098 0 006.676 1.828h.005c7.23 0 13.114-5.883 13.117-13.113a13.032 13.032 0 00-3.839-9.277 13.03 13.03 0 00-9.273-3.845c-7.235 0-13.12 5.882-13.122 13.112a13.078 13.078 0 002.006 6.978l.312.496-1.326 4.839 4.965-1.302zm-8.754 5.05l2.24-8.175a15.749 15.749 0 01-2.107-7.887C17.42 15.716 24.5 8.64 33.199 8.64a15.685 15.685 0 0111.164 4.627 15.678 15.678 0 014.618 11.161c-.004 8.698-7.084 15.777-15.782 15.777h-.007a15.773 15.773 0 01-7.54-1.92l-8.367 2.193z"
        fill="#B3B3B3"
      />
    </G>
    <Path
      d="M17.123 40.316l2.24-8.175a15.749 15.749 0 01-2.107-7.887c.003-8.7 7.082-15.776 15.782-15.776A15.684 15.684 0 0144.2 13.105a15.678 15.678 0 014.618 11.161c-.004 8.698-7.084 15.776-15.782 15.776h-.007a15.773 15.773 0 01-7.54-1.92l-8.367 2.194z"
      fill="#fff"
    />
    <Path
      d="M33.042 11.143c-7.235 0-13.12 5.882-13.122 13.112a13.08 13.08 0 002.005 6.978l.313.496-1.326 4.839 4.965-1.302.48.284a13.1 13.1 0 006.675 1.828h.005c7.23 0 13.114-5.883 13.117-13.113a13.032 13.032 0 00-3.838-9.277 13.03 13.03 0 00-9.274-3.845z"
      fill="url(#paint0_linear_20_17505)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M29.093 17.658c-.296-.656-.607-.67-.887-.681l-.756-.01c-.263 0-.69.1-1.052.494-.36.395-1.38 1.349-1.38 3.289 0 1.94 1.413 3.814 1.61 4.078.197.263 2.728 4.371 6.736 5.952 3.331 1.313 4.009 1.052 4.732.986.723-.065 2.333-.953 2.661-1.874.329-.921.329-1.71.23-1.875-.098-.165-.36-.263-.756-.46-.394-.197-2.333-1.151-2.694-1.283-.361-.132-.624-.197-.887.198-.264.394-1.018 1.282-1.248 1.545-.23.263-.46.296-.855.1-.395-.198-1.664-.614-3.17-1.958-1.173-1.045-1.964-2.336-2.195-2.73-.23-.395-.024-.608.174-.805.176-.176.394-.46.591-.69.198-.23.263-.395.394-.658.131-.262.066-.493-.033-.69-.098-.198-.864-2.148-1.215-2.928z"
      fill="#fff"
    />
    <Path
      d="M70.387 19.72l-2.828 9.758h-1.428l-2.268-7.854-2.352 7.854-1.414.014-2.73-9.772h1.358l2.128 8.274 2.352-8.274h1.428l2.24 8.246 2.142-8.246h1.372zm5.203 1.946c.578 0 1.1.126 1.567.378.467.243.831.611 1.093 1.106.27.495.406 1.097.406 1.806v4.522h-1.26v-4.34c0-.765-.192-1.349-.575-1.75-.382-.41-.905-.616-1.567-.616-.672 0-1.21.21-1.61.63-.393.42-.589 1.031-.589 1.834v4.242h-1.274v-10.36h1.274v3.78a2.52 2.52 0 011.036-.91 3.422 3.422 0 011.499-.322zm4.67 3.948c0-.784.16-1.47.477-2.058a3.458 3.458 0 011.302-1.386c.56-.327 1.18-.49 1.862-.49.672 0 1.255.145 1.75.434.494.29.863.653 1.106 1.092v-1.4h1.288v7.672h-1.288V28.05c-.252.448-.63.821-1.134 1.12-.495.29-1.074.434-1.736.434a3.477 3.477 0 01-1.848-.504 3.534 3.534 0 01-1.302-1.414c-.318-.607-.476-1.297-.476-2.072zm6.497.014c0-.579-.117-1.083-.35-1.512a2.41 2.41 0 00-.952-.98 2.498 2.498 0 00-1.302-.35c-.476 0-.91.112-1.302.336-.392.224-.705.55-.938.98-.234.43-.35.933-.35 1.512 0 .588.116 1.101.35 1.54.233.43.546.76.938.994.392.224.826.336 1.302.336.476 0 .91-.112 1.302-.336.4-.233.718-.565.952-.994.233-.439.35-.947.35-1.526zm4.994-2.772v4.522c0 .373.08.64.239.798.158.15.434.224.826.224h.938v1.078h-1.148c-.71 0-1.242-.163-1.596-.49-.355-.327-.532-.863-.532-1.61v-4.522h-.994v-1.05h.994v-1.932h1.273v1.932h2.002v1.05h-2.002zm6.262 6.748c-.588 0-1.115-.098-1.582-.294-.467-.205-.835-.485-1.106-.84a2.27 2.27 0 01-.448-1.246h1.316c.037.383.215.695.532.938.327.243.751.364 1.274.364.485 0 .868-.107 1.148-.322.28-.215.42-.485.42-.812a.786.786 0 00-.448-.742c-.299-.168-.76-.331-1.386-.49-.57-.15-1.036-.299-1.4-.448a2.658 2.658 0 01-.924-.686c-.252-.308-.378-.71-.378-1.204 0-.392.117-.751.35-1.078.233-.327.565-.583.994-.77.43-.196.92-.294 1.47-.294.85 0 1.535.215 2.058.644.523.43.803 1.017.84 1.764h-1.274a1.307 1.307 0 00-.49-.966c-.29-.243-.681-.364-1.176-.364-.457 0-.821.098-1.092.294-.27.196-.406.453-.406.77 0 .252.08.462.238.63.168.159.373.29.616.392.252.093.597.2 1.036.322.55.15.999.299 1.344.448.345.14.639.355.882.644.252.29.383.667.392 1.134 0 .42-.117.798-.35 1.134-.233.336-.565.602-.994.798-.42.187-.905.28-1.456.28zm4.123-3.99c0-.784.158-1.47.476-2.058a3.454 3.454 0 011.302-1.386c.56-.327 1.18-.49 1.862-.49.672 0 1.255.145 1.75.434.494.29.863.653 1.106 1.092v-1.4h1.288v7.672h-1.288V28.05c-.252.448-.63.821-1.134 1.12-.495.29-1.074.434-1.736.434a3.474 3.474 0 01-1.848-.504 3.53 3.53 0 01-1.302-1.414c-.318-.607-.476-1.297-.476-2.072zm6.496.014c0-.579-.117-1.083-.35-1.512a2.416 2.416 0 00-.952-.98 2.498 2.498 0 00-1.302-.35c-.476 0-.91.112-1.302.336-.392.224-.705.55-.938.98-.234.43-.35.933-.35 1.512 0 .588.116 1.101.35 1.54.233.43.546.76.938.994.392.224.826.336 1.302.336.476 0 .91-.112 1.302-.336.401-.233.718-.565.952-.994.233-.439.35-.947.35-1.526zm4.715-2.408c.252-.439.625-.803 1.12-1.092.504-.299 1.087-.448 1.75-.448.681 0 1.297.163 1.848.49.56.327.998.789 1.316 1.386.317.588.476 1.274.476 2.058 0 .775-.159 1.465-.476 2.072a3.507 3.507 0 01-3.164 1.918c-.654 0-1.232-.145-1.736-.434-.495-.299-.873-.667-1.134-1.106v5.054h-1.274V21.806h1.274v1.414zm5.208 2.394c0-.579-.117-1.083-.35-1.512a2.416 2.416 0 00-.952-.98 2.578 2.578 0 00-1.302-.336c-.467 0-.901.117-1.302.35-.392.224-.71.555-.952.994-.234.43-.35.929-.35 1.498 0 .579.116 1.087.35 1.526.242.43.56.76.952.994.401.224.835.336 1.302.336.476 0 .91-.112 1.302-.336.401-.233.718-.565.952-.994.233-.439.35-.952.35-1.54zm4.252-2.394c.252-.439.626-.803 1.12-1.092.504-.299 1.088-.448 1.75-.448a3.55 3.55 0 011.848.49c.56.327.999.789 1.316 1.386.318.588.476 1.274.476 2.058 0 .775-.158 1.465-.476 2.072a3.5 3.5 0 01-1.316 1.414 3.474 3.474 0 01-1.848.504c-.653 0-1.232-.145-1.736-.434-.494-.299-.872-.667-1.134-1.106v5.054h-1.274V21.806h1.274v1.414zm5.208 2.394c0-.579-.116-1.083-.35-1.512a2.403 2.403 0 00-.952-.98 2.578 2.578 0 00-1.302-.336c-.466 0-.9.117-1.302.35a2.512 2.512 0 00-.952.994c-.233.43-.35.929-.35 1.498 0 .579.117 1.087.35 1.526.243.43.56.76.952.994.402.224.836.336 1.302.336.476 0 .91-.112 1.302-.336.402-.233.719-.565.952-.994.234-.439.35-.952.35-1.54z"
      fill="#131313"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_20_17505"
        x1={32.77}
        y1={12.7173}
        x2={32.903}
        y2={35.1367}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#57D163" />
        <Stop offset={1} stopColor="#23B33A" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default WhatsAppSigninIcon;
