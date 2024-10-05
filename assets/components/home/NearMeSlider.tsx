import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import PagerView from 'react-native-pager-view';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { ExtendedTheme } from '../../types';
import AppTheme from '../../theme/theme';
import Typography from '../common/Typography';

import discover from '../../assets/images/carousel/discover.png';
import usePagerScrollHandler from '../../hooks/usePagerScrollHandler';

interface NearMeSliderProps {}

const BLEED = 20;
const HEIGHT =
  (Dimensions.get('screen').width - AppTheme.spacing.md * 2) * (2 / 3) +
  BLEED +
  AppTheme.spacing.md;

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const NearMeSlider: React.FC<NearMeSliderProps> = () => {
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
              colors={['#8DFF78', '#FFF175']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.headerContainer}>
                <View style={styles.header}>
                  <Typography fontStyle="medium" style={styles.headerText}>
                    Today's Discovery
                  </Typography>
                </View>
                <View style={styles.headerBackdrop} />
              </View>
              <Image source={discover} style={styles.image} resizeMode="contain" />
              <LinearGradient colors={['#ffffff00', '#ffffff9f']} style={styles.whiteOverlay} />
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

export default NearMeSlider;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {},
    pagerView: {
      marginBottom: 20,
      height: HEIGHT,
      overflow: 'visible',
      marginHorizontal: -theme.spacing.md,
      marginVertical: theme.spacing.md,
    },
    view: {
      height: HEIGHT,
      borderRadius: 20,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
    },
    linearGradient: {
      flex: 1,
      borderRadius: 20,
    },
    image: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      bottom: -(BLEED - theme.spacing.md) / 2,
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
    whiteOverlay: {
      position: 'absolute',
      zIndex: 10,
      width: '100%',
      height: '100%',
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      borderRadius: 20,
    },
    indicatorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: theme.spacing.md * 3,
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
    headerContainer: {
      position: 'absolute',
      alignSelf: 'flex-start',
      top: -theme.spacing.md,
    },
    header: {
      backgroundColor: theme.colors.text,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.spacing.sm,
      borderColor: theme.colors.background,
      borderWidth: 1,
      zIndex: 2,
    },
    headerText: {
      color: theme.colors.background,
    },
    headerBackdrop: {
      backgroundColor: theme.colors.text,
      position: 'absolute',
      bottom: -theme.spacing.xs,
      zIndex: 1,
      width: '100%',
      height: theme.spacing.xl,
      borderRadius: theme.spacing.sm,
      borderColor: theme.colors.background,
      borderWidth: 1,
    },
  });
