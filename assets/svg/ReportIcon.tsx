import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

type ReportIconSVGProps = SvgProps & {};
const ReportIconSVG: React.FC<ReportIconSVGProps> = ({ ...props }) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M19.6642 6.15859L13.7242 2.72859C12.7542 2.16859 11.5542 2.16859 10.5742 2.72859L4.64422 6.15859C3.67422 6.71859 3.07422 7.75859 3.07422 8.88859V15.7286C3.07422 16.8486 3.67422 17.8886 4.64422 18.4586L10.5842 21.8886C11.5542 22.4486 12.7542 22.4486 13.7342 21.8886L19.6742 18.4586C20.6442 17.8986 21.2442 16.8586 21.2442 15.7286V8.88859C21.2342 7.75859 20.6342 6.72859 19.6642 6.15859ZM11.4042 8.05859C11.4042 7.64859 11.7442 7.30859 12.1542 7.30859C12.5642 7.30859 12.9042 7.64859 12.9042 8.05859V13.3086C12.9042 13.7186 12.5642 14.0586 12.1542 14.0586C11.7442 14.0586 11.4042 13.7186 11.4042 13.3086V8.05859ZM13.0742 16.9386C13.0242 17.0586 12.9542 17.1686 12.8642 17.2686C12.6742 17.4586 12.4242 17.5586 12.1542 17.5586C12.0242 17.5586 11.8942 17.5286 11.7742 17.4786C11.6442 17.4286 11.5442 17.3586 11.4442 17.2686C11.3542 17.1686 11.2842 17.0586 11.2242 16.9386C11.1742 16.8186 11.1542 16.6886 11.1542 16.5586C11.1542 16.2986 11.2542 16.0386 11.4442 15.8486C11.5442 15.7586 11.6442 15.6886 11.7742 15.6386C12.1442 15.4786 12.5842 15.5686 12.8642 15.8486C12.9542 15.9486 13.0242 16.0486 13.0742 16.1786C13.1242 16.2986 13.1542 16.4286 13.1542 16.5586C13.1542 16.6886 13.1242 16.8186 13.0742 16.9386Z"
      fill="#131313"
    />
  </Svg>
);

const ReportIcon = React.memo(ReportIconSVG);

ReportIcon.displayName = 'ReportIcon';

export default ReportIcon;
