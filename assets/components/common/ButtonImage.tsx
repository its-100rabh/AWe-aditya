import * as React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import type { ExtendedTheme, FontSize } from '../../types';
import Typography from './Typography';

interface ButtonProps extends TouchableOpacityProps {
  children?: string | React.ReactElement;
  isLoading?: boolean;
  iconName?: string;
  iconSize?: number;
  fontSize?: keyof FontSize;
  backgroundColor?: keyof ExtendedTheme['colors'];
  textColor?: keyof ExtendedTheme['colors'];
  paddingVertical?: number;
  marginVertical?: number;
  textAlign?: string;
}

const ButtonImage: React.FC<ButtonProps> = ({
  children,
  style,
  isLoading = false,
  iconName,
  iconSize = 28,
  fontSize = 'medium',
  backgroundColor,
  textColor,
  disabled = false,
  paddingVertical,
  marginVertical,
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
        { paddingRight: iconName ? theme.spacing.lg + 24 : theme.spacing.lg },
        { paddingVertical: paddingVertical || 10 },
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
          },
          { width: '100%' },
        ]}
        fontSize={fontSize}
        fontStyle="medium"
        align="center"
      >
        {children}
      </Typography>
      {iconName ? (
        <Animated.View style={[iconStyle, styles.rightIcon]}>
          {isLoading ? (
            <ActivityIndicator color={theme.colors.background} size={iconSize} />
          ) : (
            <Icon name={iconName} color={theme.colors.background} size={iconSize} />
          )}
        </Animated.View>
      ) : isLoading ? (
        <ActivityIndicator color={theme.colors.text} size={iconSize} style={styles.loader} />
      ) : null}
    </TouchableOpacity>
  );
};

export default ButtonImage;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.sm,
      paddingRight: theme.spacing.lg + 24,
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.background,
    },
    rightIcon: {
      backgroundColor: theme.colors.text,
      padding: theme.spacing.xs,
      borderRadius: 20,
      position: 'absolute',
      right: 0,
    },
    loader: {
      marginLeft: theme.spacing.sm,
    },
    disabled: {
      opacity: 0.5,
    },
  });
