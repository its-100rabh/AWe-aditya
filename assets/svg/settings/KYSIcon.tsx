import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={21} height={11} fill="none" {...props}>
    <Path
      d="M1.743 10.56H.716c-.185 0-.278-.093-.278-.277V.349c0-.185.093-.277.278-.277h1.027c.185 0 .277.092.277.277v5.17h.05c.108-.293.25-.565.423-.815L5.61.35A.584.584 0 0 1 6.13.072h1.207c.228 0 .266.103.114.31l-3.18 4.322 3.588 5.53c.13.217.065.326-.196.326h-.913c-.294 0-.5-.093-.62-.277l-2.822-4.42L2.02 7.378v2.904c0 .184-.092.277-.277.277Zm9.311 0H10.01c-.185 0-.277-.093-.277-.277V6.678L6.683.366c-.044-.087-.044-.158 0-.213a.217.217 0 0 1 .18-.081h1.304c.142 0 .25.092.326.277L10.5 4.835h.098L12.57.349c.065-.185.174-.277.326-.277h1.305c.087 0 .147.027.18.081.043.055.043.126 0 .213l-3.05 6.312v3.605c0 .184-.093.277-.278.277Zm2.819-2.545v-.424c0-.185.092-.277.277-.277h1.044c.185 0 .277.092.277.277v.294c0 .457.098.788.294.995.207.196.544.293 1.011.293h1.126c.467 0 .804-.103 1.011-.31.207-.217.31-.565.31-1.043v-.376a.949.949 0 0 0-.408-.815c-.26-.207-.587-.337-.979-.392a20.896 20.896 0 0 1-1.288-.26 11.41 11.41 0 0 1-1.289-.376c-.391-.141-.723-.407-.995-.799-.26-.391-.391-.892-.391-1.5v-.686c0-.793.223-1.413.669-1.859.456-.457 1.082-.685 1.875-.685h1.73c.804 0 1.43.228 1.875.685.457.446.685 1.066.685 1.86v.358c0 .185-.092.278-.277.278h-1.044c-.185 0-.277-.093-.277-.278v-.212c0-.467-.104-.799-.31-.995-.196-.206-.527-.31-.995-.31h-1.028c-.467 0-.804.11-1.011.327-.196.206-.294.565-.294 1.076v.506c0 .489.354.82 1.06.995.316.076.659.141 1.028.195.38.055.761.136 1.142.245.38.109.729.256 1.044.44.315.174.57.446.767.816.195.359.293.8.293 1.321v.636c0 .794-.228 1.42-.685 1.876-.446.446-1.066.669-1.86.669h-1.826c-.794 0-1.42-.223-1.876-.669-.457-.457-.685-1.082-.685-1.876Z"
      fill="#000"
    />
  </Svg>
);

const KYSIcon = memo(SvgComponent);
export default KYSIcon;
