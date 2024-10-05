import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Color from 'color';
import type { ExtendedTheme } from '../types';
import ScoinsCard from './home/ScoinsCard';
import NotificationIcon from '../assets/svg/settings/NotificationIcon';
import ScanIcon from '../assets/svg/settings/ScanIcon';
import SettingsIcon from '../assets/svg/settings/SettingsIcon';

const AppHeader: React.FC<NativeStackHeaderProps> = ({ navigation, back }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const insets = useSafeAreaInsets();

  const handleScan = () => {
    navigation.navigate('Scan');
  };

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        {back ? (
          <TouchableOpacity onPress={navigation.goBack} style={styles.back}>
            <Icon name="arrow-left" size={28} color={theme.colors.text} />
          </TouchableOpacity>
        ) : null}
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
    </View>
  );
};

export default AppHeader;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: theme.colors.background,
      paddingHorizontal: theme.spacing.sm,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.lightBackground,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      borderRadius: 18,
    },
    back: {
      marginRight: theme.spacing.sm,
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
      padding: 4,
      borderRadius: 20,
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
