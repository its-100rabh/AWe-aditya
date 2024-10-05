import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import type { ExtendedTheme } from '../../types';

interface RatingButtonProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  active?: boolean;
}

const RatingButton: React.FC<RatingButtonProps> = ({ onPress, style, active = false }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const pressed = useSharedValue(false);

  const starStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: pressed.value
          ? withSequence(
              withTiming(1.5, { duration: 300, easing: Easing.elastic() }),
              withTiming(1, { duration: 300, easing: Easing.elastic() }, (finished) => {
                if (finished) pressed.value = false;
              })
            )
          : 1,
      },
    ],
  }));

  return (
    <Pressable
      onPress={onPress}
      style={style}
      onPressIn={() => {
        pressed.value = true;
      }}
    >
      <Animated.View style={starStyle}>
        <Icon
          name={active ? 'star' : 'staro'}
          size={24}
          color={theme.colors.text}
          style={styles.star}
        />
      </Animated.View>
    </Pressable>
  );
};

interface RatingProps {
  style?: StyleProp<ViewStyle>;
}

const Rating: React.FC<RatingProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const [rating, setRating] = React.useState<number | undefined | null>();

  const handlePress = (value: number) => {
    setRating(value);
  };

  return (
    <View style={[styles.container, style]}>
      {Array.from({ length: 5 }, (_, i) => i).map((i) => (
        <RatingButton key={i} onPress={() => handlePress(i + 1)} active={(rating ?? 0) >= i + 1} />
      ))}
    </View>
  );
};

export default Rating;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    star: {
      marginRight: theme.spacing.xs,
    },
  });
