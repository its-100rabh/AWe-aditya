import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { RootStackParamList } from '../../RootNavigator';
import { TabParamList } from '../../HomeTabNavigator';
import { IMerchantStoreLocation, Merchant } from '../../types/entities';
import Discount from '../../assets/svg/Discount';

interface StoreCardProps {
  store: IMerchantStoreLocation;
  merchant: Merchant;
}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

const StoreCard: React.FC<StoreCardProps> = ({ store, merchant }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => navigation.navigate('Store', { storeId: store._id })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: merchant.logo?.path }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Typography fontSize="medium" fontStyle="medium" mb={2}>
          {store.name}
        </Typography>
        <Typography fontSize="small" fontStyle="medium" color="border" numberOfLines={1}>
          {store.address?.formattedAddress}
        </Typography>

        <View style={styles.divider} />

        <View style={styles.discountContainer}>
          <Discount />
          <Typography fontSize="medium" fontStyle="bold">
            {` upto ${merchant.discount}% off`}
          </Typography>
        </View>
      </View>

      {/* <View style={styles.premiumMerchant}>
        <View style={styles.premiumMerchantContainer}>
          <Typography
            fontStyle="medium"
            color="background"
            style={styles.premiumText}
            numberOfLines={1}
          >
            {'Get '}
            <Typography fontStyle="bold" color="background">
              2x
            </Typography>
            {' Scoins'}
          </Typography>
        </View>
      </View> */}
    </TouchableOpacity>
  );
};

export default StoreCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      padding: 0,
      flexDirection: 'row',
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
    imageContainer: {
      borderRadius: theme.rounded.card,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: theme.rounded.card,
      borderColor: theme.colors.dark,
      borderWidth: 8,
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      paddingTop: theme.spacing.sm,
    },
    divider: {
      backgroundColor: theme.colors.border,
      width: '100%',
      height: StyleSheet.hairlineWidth,
      marginVertical: theme.spacing.xs,
    },
    discountContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    premiumMerchant: {
      backgroundColor: theme.colors.primary,
      width: 30,
      flexDirection: 'row',
    },
    premiumMerchantContainer: {
      width: 120,
    },
    premiumText: {
      transform: [{ rotate: '-90deg' }, { translateX: 6 }, { translateY: 14 }],
      flex: 1,
    },
  });
