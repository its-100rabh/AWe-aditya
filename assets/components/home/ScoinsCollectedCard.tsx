import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import scoinsImage from '../../assets/images/scoins-big.png';
import FourStarIcon from '../../assets/svg/FourStartIcon';
import { useStudent } from '../../store/selector';
import ScontoLogo from '../../assets/svg/ScontoLogo';

interface ScoinsCollectedCardProps {
  style?: StyleProp<ViewStyle>;
}

const ScoinsCollectedCard: React.FC<ScoinsCollectedCardProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  const positionY = useSharedValue(0);

  positionY.value = withRepeat(withTiming(20, { duration: 2000, easing: Easing.ease }), -1, true);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: positionY.value }],
  }));

  return (
    <View style={[styles.container, style]}>
      <Typography color="text" fontSize="large" align="center" fontStyle="semibold">
        Scoins Collected
      </Typography>

      <Typography color="border" fontSize="medium" align="center">
        Let's save, a lot, together
      </Typography>

      <Animated.View style={animatedStyle}>
        <Image source={scoinsImage} style={styles.image} />
      </Animated.View>

      <View style={styles.itemContainer}>
        <FourStarIcon />
        <View style={styles.textContainer}>
          <Typography fontSize="large" fontStyle="semibold" color="primary">
            You're doin' great !
          </Typography>
          <Typography fontSize="large" fontStyle="semibold" color="text">
            Unlock more with Scoins
          </Typography>
        </View>
      </View>

      <View style={styles.scoinsContainer}>
        <View style={styles.rupee}>
          <ScontoLogo color={theme.colors.text} />
        </View>

        <Typography fontSize={32} fontStyle="semibold" color="border" mr={14}>
          <Typography fontSize={32} fontStyle="semibold" color="background">
            {student?.scoins ?? 0}
          </Typography>
        </Typography>
      </View>
    </View>
  );
};

export default ScoinsCollectedCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: theme.spacing.lg,
      padding: theme.spacing.lg,
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
      marginBottom: -40,
    },
    itemContainer: {
      flexDirection: 'row',
    },
    textContainer: {
      marginLeft: theme.spacing.sm,
      marginBottom: theme.spacing.md,
      width: '100%',
      flexWrap: 'wrap',
      flexShrink: 1,
    },
    scoinsContainer: {
      backgroundColor: theme.colors.text,
      padding: theme.spacing.sm,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: theme.rounded.card,
      marginLeft: -theme.spacing.lg,
      marginRight: -theme.spacing.lg,
      marginBottom: -theme.spacing.lg,
    },
    rupee: {
      backgroundColor: theme.colors.lightBackground,
      width: 48,
      height: 48,
      borderRadius: theme.rounded.card,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing.md,
    },
    days: {
      marginLeft: theme.spacing.md,
      backgroundColor: theme.colors.lightBackground,
      height: 48,
      borderRadius: theme.rounded.card,
      paddingHorizontal: theme.spacing.sm,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      width: '100%',
    },
  });
