import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

type TrashImageSVGProps = SvgProps & {};
const TrashImageSVG: React.FC<TrashImageSVGProps> = ({ ...props }) => (
  <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
    <Path
      d="M21.724 6.0757C20.114 5.9157 18.504 5.7957 16.884 5.7057V5.6957L16.664 4.3957C16.514 3.4757 16.294 2.0957 13.954 2.0957H11.334C9.00397 2.0957 8.78397 3.4157 8.62397 4.3857L8.41397 5.6657C7.48397 5.7257 6.55397 5.7857 5.62397 5.8757L3.58397 6.0757C3.16397 6.1157 2.86397 6.4857 2.90397 6.8957C2.94397 7.3057 3.30397 7.6057 3.72397 7.5657L5.76397 7.3657C11.004 6.8457 16.284 7.0457 21.584 7.5757C21.614 7.5757 21.634 7.5757 21.664 7.5757C22.044 7.5757 22.374 7.2857 22.414 6.8957C22.444 6.4857 22.144 6.1157 21.724 6.0757Z"
      fill="#F50000"
    />
    <Path
      d="M19.884 8.9857C19.644 8.7357 19.314 8.5957 18.974 8.5957H6.33405C5.99405 8.5957 5.65405 8.7357 5.42405 8.9857C5.19405 9.2357 5.06405 9.5757 5.08405 9.9257L5.70405 20.1857C5.81405 21.7057 5.95405 23.6057 9.44405 23.6057H15.864C19.354 23.6057 19.494 21.7157 19.604 20.1857L20.224 9.9357C20.244 9.5757 20.114 9.2357 19.884 8.9857ZM14.314 18.5957H10.984C10.574 18.5957 10.234 18.2557 10.234 17.8457C10.234 17.4357 10.574 17.0957 10.984 17.0957H14.314C14.724 17.0957 15.064 17.4357 15.064 17.8457C15.064 18.2557 14.724 18.5957 14.314 18.5957ZM15.154 14.5957H10.154C9.74405 14.5957 9.40405 14.2557 9.40405 13.8457C9.40405 13.4357 9.74405 13.0957 10.154 13.0957H15.154C15.564 13.0957 15.904 13.4357 15.904 13.8457C15.904 14.2557 15.564 14.5957 15.154 14.5957Z"
      fill="#F50000"
    />
  </Svg>
);

const TrashImage = React.memo(TrashImageSVG);

TrashImage.displayName = 'TrashImage';

export default TrashImage;
