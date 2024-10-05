import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import Color from 'color';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import ScoinsCard from './ScoinsCard';
import NotificationIcon from '../../assets/svg/settings/NotificationIcon';
import ScanIcon from '../../assets/svg/settings/ScanIcon';
import SettingsIcon from '../../assets/svg/settings/SettingsIcon';
import { TabParamList } from '../../HomeTabNavigator';
import { RootStackParamList } from '../../RootNavigator';

interface AppBarProps {
  style?: StyleProp<ViewStyle>;
}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList, 'HomeTab'>
>;

const AppBar: React.FC<AppBarProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();

  const handleScan = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={[styles.container, style]}>
      <ScoinsCard style={styles.scoins} />

      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate('Notification')}
      >
        <NotificationIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={handleScan}>
        <ScanIcon fill={theme.colors.primary} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Settings')}>
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
};

export default AppBar;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.lightBackground,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      borderRadius: 18,
    },
    iconButton: {
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
      padding: 6,
      borderRadius: 20,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: theme.spacing.md,
    },
    scoins: {
      marginRight: 'auto',
      marginTop: 6,
    },
  });
