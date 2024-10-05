import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { RootStackParamList } from '../../RootNavigator';
import { TabParamList } from '../../HomeTabNavigator';

interface KYSStatusProps {
  percentage?: number;
}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList, 'Home'>,
  NativeStackNavigationProp<RootStackParamList, 'HomeTab'>
>;

const KYSStatus: React.FC<KYSStatusProps> = ({ percentage = 0 }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('KYSStatus')}>
      <Animated.View
        style={[
          styles.progress,
          percentage > 21 ? { width: `${percentage > 44 ? 100 : percentage}%` } : null,
        ]}
      >
        <Typography color="background" fontStyle="bold" align="center">
          {(percentage > 44 ? 100 : percentage).toString()}%
        </Typography>
      </Animated.View>
      <View style={styles.arrow}>
        <Icon name="arrow-right" color={theme.colors.background} size={32} />
      </View>
    </TouchableOpacity>
  );
};

export default KYSStatus;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      borderRadius: 20,
    },
    progress: {
      width: '23%',
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    arrow: {
      position: 'absolute',
      top: 0,
      right: 0,
      backgroundColor: theme.colors.text,
      borderRadius: 20,
      padding: 2,
    },
  });
