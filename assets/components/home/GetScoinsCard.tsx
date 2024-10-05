import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Asterisk from '../../assets/svg/Asterisk';
import FourStarIcon from '../../assets/svg/FourStartIcon';
import { useStudent } from '../../store/selector';

interface GetScoinsCardProps {
  style?: StyleProp<ViewStyle>;
}

const GetScoinsCard: React.FC<GetScoinsCardProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const [student] = useStudent();

  const handleRefer = async () => {
    try {
      await Share.open({
        message: `Hey there! I've joined sconto. Use my referral code: ${student?.referralCode} to get more scoins.`,
        title: "Hey, I'm on Sconto!",
        url: 'https://sconto.ai/app',
        subject: 'Join Sconto',
      });
    } catch (error) {
      //
    }
  };

  return (
    <View style={[styles.container, style]}>
      <Typography color="text" fontSize="large" align="center" fontStyle="semibold">
        Get Scoins
      </Typography>

      <Typography color="border" fontSize="medium" align="center" mb={24}>
        Earn more to Spend more.
      </Typography>

      <Asterisk fill={theme.colors.primary} />

      <Typography color="text" fontSize={40} fontStyle="bold" style={styles.heading} mt={8} mb={8}>
        What are{' '}
        <Typography color="primary" fontSize={40} fontStyle="bold" style={styles.heading}>
          Scoins
        </Typography>
        ?
      </Typography>

      {/* <Typography
        color="primary"
        fontSize={40}
        fontStyle="bold"
        style={styles.heading}
        mt={8}
        mb={12}
      >
        Oops! can't do that.
      </Typography> */}

      <Typography mb={8}>
        Sconto aims to reward the Indian college students from the very first day and all you need
        to do is collect SCOINS to unleash your superpowers!{'\n\n'}SCOINS are reward-coins (your
        secret weapon) that you can earn while interacting on the SCONTO app, be it while completing
        your KYS, referring a friend, recommending a merchant or transacting across the
        Sconto-verse!{'\n\n'}You can then use the SCOINS to avail exclusive discounts at our partner
        stores online/on-the-go and gradually level up to super⭐️ status!{'\n\n'}Don’t burn cash,
        just kill the bill!😎
      </Typography>

      <Typography mb={8} fontStyle="medium">
        Watch out for this space for info about Scoins
      </Typography>

      <View style={styles.itemContainer}>
        <FourStarIcon />
        <Typography color="text" fontStyle="bold" style={styles.text}>
          {'Refer '}
          <Typography color="text" fontStyle="bold">
            & Earn
          </Typography>
        </Typography>
        <TouchableOpacity style={styles.button} onPress={handleRefer}>
          <Icon name="arrow-up" color={theme.colors.background} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetScoinsCard;

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
    heading: {
      lineHeight: 50,
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      marginLeft: theme.spacing.sm,
    },
    button: {
      backgroundColor: theme.colors.text,
      borderRadius: 40,
      padding: 8,
      marginLeft: 'auto',
    },
  });
