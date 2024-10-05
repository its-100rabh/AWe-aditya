import type { TextStyle } from 'react-native';

export interface FontStyles {
  regular: TextStyle;
  medium: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
  clashDisplayRegular: TextStyle;
  clashDisplayMedium: TextStyle;
  clashDisplaySemibold: TextStyle;
  clashDisplayBold: TextStyle;
  goteskDisplayRegular: TextStyle;
  goteskDisplayMedium: TextStyle;
  goteskDisplaySemibold: TextStyle;
  goteskDisplayBold: TextStyle;
}

const fonts: FontStyles = {
  regular: {
    fontFamily: 'Poppins-Regular',
  },
  medium: {
    fontFamily: 'Poppins-Medium',
  },
  semibold: {
    fontFamily: 'Poppins-SemiBold',
  },
  bold: {
    fontFamily: 'Poppins-Bold',
  },
  clashDisplayRegular: {
    fontFamily: 'ClashDisplay-Regular',
  },
  clashDisplayMedium: {
    fontFamily: 'ClashDisplay-Medium',
  },
  clashDisplaySemibold: {
    fontFamily: 'ClashDisplay-Semibold',
  },
  clashDisplayBold: {
    fontFamily: 'ClashDisplay-Bold',
  },
  goteskDisplayRegular: {
    fontFamily: 'ClashGrotesk-Regular',
  },
  goteskDisplayMedium: {
    fontFamily: 'ClashGrotesk-Medium',
  },
  goteskDisplaySemibold: {
    fontFamily: 'ClashGrotesk-Semibold',
  },
  goteskDisplayBold: {
    fontFamily: 'ClashGrotesk-Bold',
  },
};

export default fonts;
