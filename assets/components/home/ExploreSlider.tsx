import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';
import type { ExtendedTheme } from '../../types';
import usePagerScrollHandler from '../../hooks/usePagerScrollHandler';
import AppTheme from '../../theme/theme';

import explore from '../../assets/images/carousel/explore.png';

const BLEED = 0;
const HEIGHT = (Dimensions.get('screen').width - AppTheme.spacing.md * 2) * (34 / 35) + BLEED;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

interface ExploreSliderProps {}

const ExploreSlider: React.FC<ExploreSliderProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const position = useSharedValue(0);
  const offset = useSharedValue(0);

  const handler = usePagerScrollHandler({
    onPageScroll: (e: any) => {
      'worklet';

      position.value = e.position;
      offset.value = e.offset;
    },
  });

  const tickerStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(
          offset.value -
            theme.spacing.md * 2 -
            theme.spacing.sm +
            position.value * theme.spacing.sm +
            position.value * theme.spacing.md * 2,
          {
            duration: 500,
            easing: Easing.inOut(Easing.ease),
          }
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <AnimatedPagerView style={styles.pagerView} onPageScroll={handler} initialPage={0}>
        {[0, 1, 2].map((i) => (
          <View key={i.toString()} style={styles.view}>
            <LinearGradient
              colors={['#FA1D5F', '#F2E535']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <Image source={explore} style={styles.image} resizeMode="contain" />
            </LinearGradient>
          </View>
        ))}
      </AnimatedPagerView>

      <View style={styles.indicatorContainer}>
        {[0, 1, 2].map((i) => (
          <View key={i} style={styles.indicator} />
        ))}
        <Animated.View style={[styles.indicatorActive, tickerStyle]} />
      </View>
    </View>
  );
};

export default ExploreSlider;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {},
    pagerView: {
      height: HEIGHT,
      overflow: 'visible',
      marginHorizontal: -theme.spacing.md,
    },
    view: {
      height: HEIGHT,
      borderRadius: 20,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: 6,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 20,
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: -(BLEED - theme.spacing.sm) / 2,
      right: -BLEED / 2,
      zIndex: 1,
    },
    cardBackdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 20,
      zIndex: -1,
      top: 6,
      left: 6,
    },
    indicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: theme.spacing.md,
      width: '100%',
    },
    indicator: {
      width: theme.spacing.sm,
      height: theme.spacing.sm,
      borderRadius: theme.spacing.md,
      backgroundColor: theme.colors.transparent,
      marginHorizontal: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.background,
    },
    indicatorActive: {
      width: theme.spacing.sm,
      height: theme.spacing.sm,
      borderRadius: theme.spacing.md,
      backgroundColor: theme.colors.background,
      marginHorizontal: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.background,
      position: 'absolute',
    },
  });
