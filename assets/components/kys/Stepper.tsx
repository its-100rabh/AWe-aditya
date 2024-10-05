import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { RootStackParamList } from '../../RootNavigator';

interface StepperProps {
  step?: number;
}

const NUMBER_OF_STEPS = 3;

const Step: React.FC<{ isActive: boolean; position: number }> = ({ isActive, position }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const circleStyle = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(isActive ? theme.colors.accent : theme.colors.text, {
        duration: 1000,
      }),
    }),
    [isActive]
  );

  const handlePress = () => {
    switch (position) {
      case 0:
        navigation.navigate('KYSAadhaar');
        break;
      case 1:
        navigation.navigate('KYSCollegeID');
        break;
      case 2:
        navigation.navigate('KYSVideo');
        break;
      default:
        break;
    }
  };

  return (
    <TouchableOpacity style={styles.step} onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.outerCircle}>
        <Animated.View style={[styles.innerCircle, circleStyle]}>
          <Icon name="check" size={20} color={theme.colors.background} />
        </Animated.View>
      </View>
      <Typography style={styles.text}>{`Step ${position + 1}`}</Typography>
    </TouchableOpacity>
  );
};

const Stepper: React.FC<StepperProps> = ({ step = 0 }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const position = useSharedValue(0);

  React.useEffect(() => {
    position.value = (step / (NUMBER_OF_STEPS - 1)) * 100;
  }, [step]);

  const progressStyle = useAnimatedStyle(() => ({
    width: withTiming(`${position.value}%`, {
      duration: 500,
    }),
  }));

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        {Array.from({ length: NUMBER_OF_STEPS }, (_, i) => i).map((i) => (
          <Step key={i} isActive={i <= step} position={i} />
        ))}

        <View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, progressStyle]} />
        </View>
      </View>
    </View>
  );
};

export default Stepper;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      paddingVertical: theme.spacing.md,
      backgroundColor: theme.colors.background,
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    step: {
      alignItems: 'center',
    },
    outerCircle: {
      borderColor: theme.colors.text,
      borderWidth: 1,
      borderRadius: 100,
      padding: 4,
    },
    innerCircle: {
      backgroundColor: theme.colors.text,
      borderRadius: 100,
      padding: 4,
    },
    progressBarContainer: {
      position: 'absolute',
      top: 2,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      height: 2,
      backgroundColor: theme.colors.text,
      marginTop: theme.spacing.md,
      marginHorizontal: 6,
    },
    progressBar: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      height: 2,
      backgroundColor: theme.colors.accent,
      width: '0%',
    },
    text: {
      fontSize: 12,
    },
  });
