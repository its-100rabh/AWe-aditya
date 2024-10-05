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
}

const ScrollLayoutSplash: React.FC<ScrollLayoutProps> = ({
  children,
  scrollViewProps,
  edges = ['left', 'right'],
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

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

export default ScrollLayoutSplash;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    scrollContainer: {
      flexGrow: 1,
    },
    userInfo: {
      marginBottom: 20,
    },
  });
