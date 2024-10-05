import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import { IMerchantStoreLocation, Merchant } from '../../types/entities';
import placeholder from '../../assets/images/logo.png';
import Typography from '../common/Typography';

interface MerchantWithStoreCardProps {
  merchant: Merchant;
  store: IMerchantStoreLocation;
}

const MerchantWithStoreCard: React.FC<MerchantWithStoreCardProps> = ({ merchant, store }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.card}>
      <Image style={styles.image} source={placeholder} />
      <View style={styles.textContainer}>
        <Typography color="accent" fontSize="h1" align="center" fontStyle="semibold">
          {store.name}
        </Typography>
        <Typography
          color="text"
          fontSize={16}
          align="center"
          fontStyle="semibold"
          mb={store.address?.formattedAddress ? 0 : 24}
        >
          {merchant.name}
        </Typography>
        {store.address?.formattedAddress ? (
          <Typography color="border" fontSize="small" align="center" fontStyle="regular">
            {store.address?.formattedAddress}
          </Typography>
        ) : null}
      </View>
    </View>
  );
};

export default MerchantWithStoreCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
    },
    textContainer: {
      padding: 16,
    },
    image: {
      borderRadius: theme.rounded.card,
      width: '100%',
      height: 160,
    },
  });
