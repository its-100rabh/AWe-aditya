import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

type ApplicationThemeIconSVGProps = SvgProps & {};
const ApplicationThemeIconSVG: React.FC<ApplicationThemeIconSVGProps> = ({ ...props }) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M18.8046 4.89887C17.0446 3.29887 14.7146 2.33887 12.1546 2.33887C6.65457 2.33887 2.18457 6.80887 2.18457 12.3089C2.18457 17.8089 6.65457 22.2789 12.1546 22.2789C14.7146 22.2789 17.0446 21.3189 18.8046 19.7189C20.8446 17.9089 22.1246 15.2489 22.1246 12.3089C22.1246 9.36887 20.8446 6.70887 18.8046 4.89887ZM12.1246 16.6989C12.1046 18.3489 10.8746 18.7489 9.72457 18.2889C7.35457 17.3389 5.68457 15.0189 5.68457 12.3089C5.68457 9.59887 7.35457 7.27887 9.72457 6.31887C10.8746 5.85887 12.1046 6.26887 12.1246 7.90887V16.6989Z"
      fill="#131313"
    />
  </Svg>
);

const ApplicationThemeIcon = React.memo(ApplicationThemeIconSVG);

ApplicationThemeIcon.displayName = 'ApplicationThemeIcon';

export default ApplicationThemeIcon;
