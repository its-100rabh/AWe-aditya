/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable react/no-unused-prop-types */
import type { Theme } from '@react-navigation/native';
import { Component } from 'react';
import { TextInputProps, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { CountryCode, CallingCode, Country } from 'react-native-country-picker-modal';
import { CountryFilterProps } from 'react-native-country-picker-modal/lib/CountryFilter';
import type { FontStyles } from '../theme/fonts';

export interface PhoneInputProps {
  withDarkTheme?: boolean;
  withShadow?: boolean;
  autoFocus?: boolean;
  defaultCode?: CountryCode;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  disableArrowIcon?: boolean;
  placeholder?: string;
  onChangeCountry?: (country: Country) => void;
  onChangeText?: (text: string) => void;
  onChangeFormattedText?: (text: string) => void;
  renderDropdownImage?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  textContainerStyle?: StyleProp<ViewStyle>;
  textInputProps?: TextInputProps;
  textInputStyle?: StyleProp<TextStyle>;
  codeTextStyle?: StyleProp<TextStyle>;
  flagButtonStyle?: StyleProp<ViewStyle>;
  countryPickerButtonStyle?: StyleProp<ViewStyle>;
  layout?: 'first' | 'second';
  filterProps?: CountryFilterProps;
  countryPickerProps?: any;
}
export interface PhoneInputState {
  code: CallingCode | undefined;
  number: string;
  modalVisible: boolean;
  countryCode: CountryCode;
  disabled: boolean;
}
export default class PhoneInput extends Component<PhoneInputProps, PhoneInputState> {
  constructor(props: PhoneInputProps, context: any);

  UNSAFE_componentWillMount(): Promise<void>;

  UNSAFE_componentWillReceiveProps(nextProps: PhoneInputProps): Promise<void>;

  getCountryCode: () => 'IN';

  getCallingCode: () => string | undefined;

  isValidNumber: (number: string) => boolean;

  onSelect: (country: Country) => void;

  getNumberAfterPossiblyEliminatingZero: () => { number: string; formattedNumber: string };

  onChangeText: (text: string) => void;

  render(): JSX.Element;
}

export function isValidNumber(number: string, countryCode: CountryCode): boolean;

interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

interface FontSize {
  text: number;
  small: number;
  h1: number;
  medium: number;
  large: number;
}

interface BorderRadii {
  sm: number;
  md: number;
  lg: number;
  card: number;
}

interface ExtendedTheme extends Theme {
  colors: Theme['colors'] & {
    dark: string;
    accent: string;
    secondary: string;
    error: string;
    transparent: string;
    lightBackground: string;
    white: string;
    darkShade: string;
    inputBackground: string;
    lightInputBackground: string;
    lightText: string;
    darkText: string;
    textLabel: string;
    grayBackground: string;
  };
  spacing: Spacing;
  fonts: FontStyles;
  fontSize: FontSize;
  rounded: BorderRadii;
}

declare module '@react-navigation/native' {
  export function useTheme(): ExtendedTheme;
}

declare module 'yup' {
  interface StringSchema {
    stripEmptyString(): StringSchema;
  }
}
