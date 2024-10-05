import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';

interface ProgressBarProps {
  style?: StyleProp<ViewStyle>;
  percentage?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage = 0, style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const width = useSharedValue(0);

  React.useEffect(() => {
    width.value = percentage;
  }, [percentage]);

  const progressStyle = useAnimatedStyle(() => ({
    width: withTiming(`${width.value}%`, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }),
  }));

  return (
    <View style={style}>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, progressStyle]} />
      </View>

      <Typography fontSize="medium" fontStyle="medium" style={styles.percentage}>
        {`${Number(percentage).toFixed(2)}%`}
      </Typography>
    </View>
  );
};

export default ProgressBar;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    progressBarContainer: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 3,
      height: 6,
      width: '100%',
      overflow: 'hidden',
    },
    progressBar: {
      backgroundColor: theme.colors.primary,
      height: '100%',
      width: '100%',
    },
    percentage: {
      textAlign: 'center',
      marginTop: theme.spacing.md,
    },
    text: {
      color: theme.colors.text,
      ...theme.fonts.regular,
    },
  });
