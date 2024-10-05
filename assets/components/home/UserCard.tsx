import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Share from 'react-native-share';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Color from 'color';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import { useStudent } from '../../store/selector';
import Typography from '../common/Typography';
import NotificationIcon from '../../assets/svg/UserCard/NotificationIcon';
import PercentageIcon from '../../assets/svg/UserCard/PercentageIcon';
import SettingsIcon from '../../assets/svg/UserCard/SettingIcon';
import NewScontoLogo from '../../assets/svg/NewScontoLogo';
import { TabParamList } from '../../HomeTabNavigator';
import { RootStackParamList } from '../../RootNavigator';

interface UserCardProps {}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList, 'home'>,
  NativeStackNavigationProp<RootStackParamList, 'HomeTab'>
>;

const UserCard: React.FC<UserCardProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  const navigation = useNavigation<NavigationProp>();

  const handleScan = () => {
    navigation.navigate('Scan');
  };
  const handleShare = async () => {
    try {
      await Share.open({
        message: `Hey there! I've joined sconto. Use my referral code: ${student?.referralCode} to get more scoins.`,
        title: "Hey, I'm on Sconto!",
        url: 'https://sconto.ai/app',
        subject: 'Join Sconto',
      });
    } catch (error) {
      // Handle the error if the sharing fails
    }
  };
  return (
    <View style={styles.container}>
      <View style={[styles.flexItem, styles.topItemContainer]}>
        <NewScontoLogo color={theme.colors.dark} />
        <View style={[styles.flexItem, styles.iconContainer]}>
          <TouchableOpacity onPress={() => navigation.navigate('TransactionNew')}>
            <PercentageIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <NotificationIcon />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SettingsNew')}>
            <SettingsIcon />
          </TouchableOpacity>
        </View>
      </View>
      {/* <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Typography color="dark" fontStyle="goteskDisplayRegular" fontSize={24}>
            Wassup,
          </Typography>
          <Typography color="dark" fontStyle="goteskDisplayRegular" fontSize={34}>
            {student.firstName}
          </Typography>
        </View>
        <View>
          <Typography style={{ textAlign: 'right', marginBottom: 10 }} color="dark">
            {student.scontoId}
          </Typography>
          <TouchableOpacity onPress={handleShare}>
            <Typography
              color="dark"
              style={{
                backgroundColor: '#FCBA00',
                borderRadius: 16,
                paddingHorizontal: 10,
                paddingVertical: 3,
              }}
              fontSize={13}
            >
              Refer & earn upto ₹1,000
            </Typography>
          </TouchableOpacity>
        </View>
      </ScrollView> */}
    </View>
  );
};

export default UserCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.colors.primary,
      paddingHorizontal: theme.spacing.md,
      width: '100%',
    },
    linear: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    imageBackground: {
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      zIndex: 2,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.45,
    },
    content: {
      position: 'relative',
      padding: theme.spacing.lg,
      paddingVertical: theme.spacing.xxl,
      zIndex: 3,
    },
    overlay: {
      backgroundColor: theme.colors.primary,
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.1,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
    scoins: {
      marginBottom: theme.spacing.lg,
    },
    name: {
      marginVertical: theme.spacing.md,
    },
    icons: {
      position: 'absolute',
      top: theme.spacing.xxl,
      right: theme.spacing.md,
      zIndex: 1,
    },
    iconButton: {
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
      padding: 6,
      borderRadius: 20,
      marginBottom: theme.spacing.lg,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    iconContainer: {
      width: '30%',
    },
    topItemContainer: {
      marginVertical: 30,
    },
    flexItems: {
      display: 'flex',
      flexDirection: 'row',
    },
  });
