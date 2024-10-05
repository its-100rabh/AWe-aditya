import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import DownRightArrow from '../../assets/svg/DownRightArrow';
import userImage from '../../assets/images/placeholder/user/user.png';
import { useStudent } from '../../store/selector';

type State = 'collapsed' | 'expanded';

const DURATION = 300;

interface UserProfileProps {
  onPress: () => void;
  state: State;
}

const UserProfile: React.FC<UserProfileProps> = ({ onPress, state }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();
  const hidden = useSharedValue(true);

  React.useEffect(() => {
    'worklet';

    if (state === 'expanded') hidden.value = false;
  }, [state]);

  const imageStyle = useAnimatedStyle(() => ({
    width: withTiming(state === 'collapsed' ? 32 : 80, {
      duration: DURATION,
      easing: Easing.inOut(Easing.ease),
    }),
    height: withTiming(
      state === 'collapsed' ? 32 : 80,
      {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease),
      },
      (finished) => {
        if (finished) {
          if (state === 'collapsed') hidden.value = true;
        }
      }
    ),
  }));

  const opacityStyle = useAnimatedStyle(() => ({
    opacity: withTiming(state === 'collapsed' ? 0 : 1, {
      duration: DURATION,
      easing: Easing.inOut(Easing.ease),
    }),
  }));

  const hiddenStyle = useAnimatedStyle(() => ({
    display: hidden.value ? 'none' : 'flex',
  }));

  const invertedHiddenStyle = useAnimatedStyle(() => ({
    display: hidden.value ? 'flex' : 'none',
  }));

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconViewCircle}>
        <View style={styles.iconView}>
          <Animated.Image
            source={
              student?.profilePicture?.path ? { uri: student?.profilePicture?.path } : userImage
            }
            style={[styles.image, imageStyle]}
          />
        </View>
      </View>

      <Animated.View style={[styles.verticalDivider, opacityStyle, hiddenStyle]} />

      <View style={styles.rightContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.textView}>
            <Typography fontSize="small" fontStyle="medium" style={styles.id}>
              {`Sconto Id: ${student?.scontoId}`}
            </Typography>

            <Icon name="check-decagram" size={16} color={theme.colors.primary} />
          </View>

          {/* <Animated.View style={[styles.divider, opacityStyle, hiddenStyle]} />

          <Animated.View style={[styles.textContainer, opacityStyle, hiddenStyle]}>
            <Typography fontSize="small" fontStyle="medium" style={styles.id}>
              Id valid until
            </Typography>
            <Typography fontSize="small" fontStyle="bold" style={styles.id}>
              08.02.2023
            </Typography>
          </Animated.View> */}
        </View>

        <Animated.View style={[styles.icon, invertedHiddenStyle]}>
          <DownRightArrow />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default UserProfile;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    rightContainer: {
      marginLeft: theme.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    infoContainer: {},
    verticalDivider: {
      backgroundColor: theme.colors.border,
      width: 1,
      height: '80%',
      marginLeft: theme.spacing.md,
    },
    iconViewCircle: {
      backgroundColor: theme.colors.background,
      padding: 2,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 15,
    },
    iconView: {
      backgroundColor: theme.colors.text,
      borderRadius: 15,
    },
    image: {
      width: 32,
      height: 32,
      borderRadius: 15,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    textView: {
      flexDirection: 'row',
    },
    id: {
      marginRight: theme.spacing.sm,
    },
    icon: {
      marginLeft: 'auto',
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.border,
      marginVertical: theme.spacing.sm,
    },
  });
