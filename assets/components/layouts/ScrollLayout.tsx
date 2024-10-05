import { StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import type { ExtendedTheme } from '../../types';

interface ScrollLayoutProps {
  children: React.ReactNode;
  scrollViewProps?: React.ComponentProps<typeof KeyboardAwareScrollView>;
  statusBarProps?: React.ComponentProps<typeof StatusBar>;
  edges?: SafeAreaViewProps['edges'];
  containerHorizontalPadding?: string | number;
}

const ScrollLayout: React.FC<ScrollLayoutProps> = ({
  children,
  scrollViewProps,
  edges = ['left', 'right'],
  containerHorizontalPadding = 16,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(
    () => createStyles(theme, containerHorizontalPadding),
    [theme, containerHorizontalPadding]
  );

  return (
    <SafeAreaView style={styles.safeArea} edges={edges}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.dark} animated />

      <KeyboardAwareScrollView
        {...scrollViewProps}
        contentContainerStyle={[styles.scrollContainer, scrollViewProps?.contentContainerStyle]}
      >
        {children}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ScrollLayout;

const createStyles = (theme: ExtendedTheme, containerHorizontalpadding: string | number) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    scrollContainer: {
      paddingHorizontal: containerHorizontalpadding,
      flexGrow: 1,
    },
    userInfo: {
      marginBottom: 20,
    },
  });
