import * as React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/AntDesign';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import type { ExtendedTheme, FontSize } from '../../types';
import Typography from './Typography';

interface ButtonProps extends TouchableOpacityProps {
  children?: string | React.ReactElement;
  isLoading?: boolean;
  iconName?: string;
  antDesignIconName?: string;
  iconSize?: number;
  fontSize?: keyof FontSize | number;
  backgroundColor?: keyof ExtendedTheme['colors'];
  textColor?: keyof ExtendedTheme['colors'];
  paddingVertical?: number;
  marginVertical?: number;
  textAlign?: string;
  buttonWidth?: string | number;
  iconBackgroundColor?: string;
  iconColor?: string;
  borderColor?: string;
  rightIconPosition?: number;
}

const ButtonProceed: React.FC<ButtonProps> = ({
  children,
  style,
  isLoading = false,
  iconName,
  antDesignIconName,
  iconSize = 28,
  fontSize = 'medium',
  backgroundColor,
  textColor,
  disabled = false,
  paddingVertical,
  marginVertical,
  buttonWidth,
  iconBackgroundColor,
  iconColor,
  borderColor,
  rightIconPosition,
  // textAlign = 'center',
  ...props
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const isPressed = useSharedValue(0);

  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(10 * isPressed.value) }],
  }));

  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[
        styles.container,
        { paddingRight: iconName ? theme.spacing.lg + 24 : theme.spacing.md },
        { paddingVertical: paddingVertical || theme.spacing.md },
        { borderColor: borderColor ?? theme.colors.transparent },
        { marginVertical: marginVertical || 10 },
        { backgroundColor: backgroundColor ? theme.colors[backgroundColor] : theme.colors.primary },
        disabled ? styles.disabled : null,
        style,
      ]}
      onPressIn={() => {
        isPressed.value = 1;
      }}
      onPressOut={() => {
        isPressed.value = 0;
      }}
    >
      <Typography
        style={[
          styles.text,
          {
            color: textColor ? theme.colors[textColor] : theme.colors.background,
            marginLeft: isPressed.value ? -30 : -30,
          },
          { width: buttonWidth || '100%' },
        ]}
        fontSize={fontSize}
        fontStyle="medium"
        align="center"
      >
        {children}
      </Typography>
      {iconName ? (
        <Animated.View
          style={[
            iconStyle,
            styles.rightIcon,
            { backgroundColor: iconBackgroundColor ?? theme.colors.text },
            { right: rightIconPosition ?? 10 },
            paddingVertical && { top: paddingVertical + 4 },
          ]}
        >
          {isLoading ? (
            <ActivityIndicator color={theme.colors.white} size={iconSize} />
          ) : (
            <Icon name={iconName} color={iconColor ?? theme.colors.background} size={iconSize} />
          )}
        </Animated.View>
      ) : null}
      {antDesignIconName ? (
        <Animated.View
          style={[
            iconStyle,
            styles.rightIcon,
            { backgroundColor: iconBackgroundColor ?? theme.colors.text },
            { right: rightIconPosition ?? 10 },
            paddingVertical && { top: paddingVertical + 4 },
          ]}
        >
          {isLoading ? (
            <ActivityIndicator color={theme.colors.white} size={iconSize} />
          ) : (
            <Icons
              name={antDesignIconName}
              color={iconColor ?? theme.colors.background}
              size={iconSize}
            />
          )}
        </Animated.View>
      ) : isLoading ? (
        <ActivityIndicator color={theme.colors.white} size={iconSize} style={styles.loader} />
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonProceed;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      borderRadius: 40,
      borderWidth: 1,
      paddingHorizontal: theme.spacing.md,
      paddingRight: theme.spacing.lg + 24,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.background,
    },
    rightIcon: {
      padding: 1,
      top: 20,
      borderRadius: 20,
      position: 'absolute',
      right: 10,
    },
    loader: {
      marginLeft: theme.spacing.sm,
    },
    disabled: {
      opacity: 0.5,
    },
  });
