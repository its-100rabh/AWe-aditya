import { SafeAreaView, StatusBar, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';

interface BaseLayoutProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} animated />
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default BaseLayout;

const createStyles = (_theme: ExtendedTheme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flexGrow: 1,
    },
  });
