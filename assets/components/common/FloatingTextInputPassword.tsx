import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import { isFunction } from 'lodash';
import type { ExtendedTheme } from '../../types';

type LabelChild = string | React.ReactElement;
export type LabelChildren = LabelChild | LabelChild[] | ((isError: boolean) => React.ReactElement);

export interface FloatingTextInputProps extends TextInputProps {
  label?: LabelChildren;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  error?: string;
  name?: string;
  required?: boolean;
  right?: React.ReactNode;
  left?: React.ReactNode;
  textAlign?: 'right' | 'center' | 'left';
  labelColor?: string;
  maxLength?: number;
}

const FloatingTextInputPassword = React.forwardRef<TextInput, FloatingTextInputProps>(
  (
    {
      label,
      containerStyle,
      inputContainerStyle,
      error,
      name,
      onChangeText,
      value,
      onBlur,
      onFocus,
      required = false,
      right,
      left,
      textAlign,
      labelColor,
      editable = true,
      maxLength,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const styles = React.useMemo(() => createStyles(theme, !!error, editable), [theme, error]);

    const labelStyle = useAnimatedStyle(() => ({
      color: error ? theme.colors.dark : labelColor ?? theme.colors.textLabel,
    }));

    const errorTextStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: error
            ? withDelay(
                150,
                withSequence(
                  withTiming(170, {
                    duration: 200,
                    easing: Easing.bounce,
                  }),
                  withTiming(150, {
                    duration: 200,
                    easing: Easing.bounce,
                  })
                )
              )
            : 150,
        },
      ],
    }));

    const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      if (onBlur) onBlur(e);
    };

    return (
      <View style={[styles.container, containerStyle]}>
        {label ? (
          <Animated.Text style={[styles.text, labelStyle, { fontFamily: 'Poppins-Regular' }]}>
            {isFunction(label) ? label(!!error) : label}
            {required ? <Animated.Text style={styles.required}>*</Animated.Text> : null}
          </Animated.Text>
        ) : null}
        <View style={[styles.textInputContainer, inputContainerStyle]}>
          {left}
          <TextInput
            selectionColor={theme.colors.dark}
            accessibilityLabel={name}
            {...props}
            value={value}
            editable={editable}
            onChangeText={(text) => {
              if (isFunction(onChangeText)) {
                onChangeText(text);
              }
            }}
            style={[styles.input, { textAlign: textAlign ?? 'left' }]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            placeholderTextColor={theme.colors.white}
            maxLength={maxLength}
          />

          {right}
        </View>
        {error ? (
          <Animated.Text style={[styles.errorText, errorTextStyle]}>{error}</Animated.Text>
        ) : null}
      </View>
    );
  }
);

FloatingTextInputPassword.displayName = 'FloatingTextInputPassword';

export default FloatingTextInputPassword;

const createStyles = (theme: ExtendedTheme, isError?: boolean, isEditable?: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    text: {
      color: theme.colors.textLabel,
      // fontStyle: theme.fonts.medium,
      // fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.medium,
      marginBottom: theme.spacing.sm,
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: isError ? theme.colors.transparent : theme.colors.transparent,
      borderWidth: 1,
      borderRadius: 99,
      backgroundColor: theme.colors.inputBackground,
    },
    input: {
      flex: 1,
      ...theme.fonts.regular,
      color: isEditable ? theme.colors.dark : theme.colors.dark,
      // color: theme.colors.dark,
      fontSize: 18,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: 13,
      margin: 0,
      borderWidth: 0,
      textDecorationLine: 'none',
    },
    errorText: {
      color: theme.colors.error,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.medium,
      position: 'absolute',
      justifyContent: 'flex-end',
      letterSpacing: -1,
    },
    required: {
      color: theme.colors.primary,
      ...theme.fonts.regular,
      position: 'absolute',
      fontSize: theme.fontSize.large,
      left: theme.spacing.sm,
    },
  });
