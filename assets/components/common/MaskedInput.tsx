import {
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
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
import MaskInput, { MaskInputProps } from 'react-native-mask-input';
import type { ExtendedTheme } from '../../types';

type LabelChild = string | React.ReactElement;
export type LabelChildren = LabelChild | LabelChild[] | ((isError: boolean) => React.ReactElement);

export interface MaskedTextInputProps extends MaskInputProps {
  label?: LabelChildren;
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  error?: string;
  name?: string;
  required?: boolean;
  right?: React.ReactNode;
}

const MaskedTextInput = React.forwardRef<TextInput, MaskedTextInputProps>(
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
      editable = true,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    const styles = React.useMemo(() => createStyles(theme, !!error, editable), [theme, error]);

    const labelStyle = useAnimatedStyle(() => ({
      color: error ? theme.colors.error : theme.colors.border,
    }));

    const errorTextStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: error
            ? withDelay(
                200,
                withSequence(
                  withTiming(10, {
                    duration: 200,
                    easing: Easing.bounce,
                  }),
                  withTiming(0, {
                    duration: 200,
                    easing: Easing.bounce,
                  })
                )
              )
            : 0,
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
          <Animated.Text style={[styles.text, labelStyle]}>
            {isFunction(label) ? label(!!error) : label}
            {required ? <Animated.Text style={styles.required}>*</Animated.Text> : null}
          </Animated.Text>
        ) : null}
        <View style={[styles.textInputContainer, inputContainerStyle]}>
          <MaskInput
            selectionColor={theme.colors.primary}
            accessibilityLabel={name}
            {...props}
            value={value}
            editable={editable}
            onChangeText={(masked, unmasked) => {
              if (isFunction(onChangeText)) {
                onChangeText(unmasked);
              }
            }}
            style={styles.input}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={ref}
            placeholderTextColor={theme.colors.border}
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

MaskedTextInput.displayName = 'MaskedTextInput';

export default MaskedTextInput;

const createStyles = (theme: ExtendedTheme, isError?: boolean, isEditable?: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    text: {
      color: theme.colors.text,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.medium,
      marginBottom: theme.spacing.sm,
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: isError ? theme.colors.error : theme.colors.lightBackground,
      borderWidth: 1,
      borderRadius: 15,
      backgroundColor: theme.colors.lightBackground,
    },
    input: {
      flex: 1,
      ...theme.fonts.regular,
      color: isEditable ? theme.colors.text : theme.colors.border,
      fontSize: theme.fontSize.large,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      margin: 0,
      borderWidth: 0,
    },
    errorText: {
      color: theme.colors.error,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.small,
    },
    required: {
      color: theme.colors.primary,
      ...theme.fonts.regular,
      position: 'absolute',
      fontSize: theme.fontSize.large,
      left: theme.spacing.sm,
    },
  });
