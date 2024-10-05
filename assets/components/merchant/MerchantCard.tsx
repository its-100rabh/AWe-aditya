import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import placeholder from '../../assets/images/logo.png';
import { Address } from '../../types/entities';

interface MerchantCardProps {
  style?: StyleProp<ViewStyle>;
  name: string;
  logo?: string;
  address?: Address;
}

const MerchantCard: React.FC<MerchantCardProps> = ({ style, name, logo, address }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, style]}>
      <Typography
        color="text"
        fontSize="large"
        align="center"
        fontStyle="semibold"
        mt={24}
        mb={address?.formattedAddress ? 4 : 24}
      >
        {name}
      </Typography>
      {address?.formattedAddress ? (
        <Typography color="text" fontSize="small" align="center" fontStyle="regular" mb={24}>
          {address?.formattedAddress}
        </Typography>
      ) : null}

      <Image style={styles.image} source={logo ? { uri: logo } : placeholder} />
    </View>
  );
};

export default MerchantCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      paddingHorizontal: theme.spacing.sm,
    },
    image: {
      borderRadius: theme.rounded.card,
      width: '100%',
      height: 160,
    },
  });
