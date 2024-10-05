import { StyleSheet, View, ViewProps, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
// import ViewProps from 'deprecated-react-native-prop-types';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const Card: React.FC<CardProps> = ({ children, style, containerStyle }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.view, containerStyle]}>
      <View style={[styles.innerView, style]}>{children}</View>
      <View style={styles.bottomView} />
    </View>
  );
};

export default Card;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    view: {
      position: 'relative',
      marginBottom: theme.spacing.md,
    },
    innerView: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 16,
      padding: theme.spacing.md,
      position: 'relative',
      zIndex: 1,
    },
    bottomView: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 16,
      position: 'absolute',
      top: 6,
      bottom: -6,
      left: 6,
      right: -6,
      zIndex: -1,
    },
  });
