import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Card from '../common/Card';
import { TabParamList } from '../../HomeTabNavigator';
import { RootStackParamList } from '../../RootNavigator';
import { IMerchantStoreLocation, Merchant } from '../../types/entities';

interface MerchantStoreLocationCardProps {
  store: IMerchantStoreLocation;
  merchant: Merchant;
}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList, 'Explore'>,
  NativeStackNavigationProp<RootStackParamList, 'Merchant'>
>;

const MerchantStoreLocationCard: React.FC<MerchantStoreLocationCardProps> = ({
  store,
  merchant,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('MerchantDetails', { storeId: store._id })}
    >
      <Card style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: merchant.logo?.path }} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <Typography fontSize="medium" fontStyle="medium">
            {store.name}
          </Typography>

          <View style={styles.divider} />

          <Typography fontSize="small" fontStyle="regular">
            Lorem ipsum dolor sit amet consectetur
          </Typography>

          <View style={styles.bottomContainer}>
            <View style={styles.discountContainer}>
              <Typography fontSize="text" fontStyle="regular" style={styles.smallText}>
                {'upto '}
              </Typography>

              <Typography fontSize="large" fontStyle="regular">
                {`${merchant.discount}%`}
              </Typography>

              <Typography fontSize="text" fontStyle="regular" style={styles.smallText}>
                {' off'}
              </Typography>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
              <Icon name="arrow-right" size={32} color={theme.colors.background} />
            </TouchableOpacity>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default MerchantStoreLocationCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      padding: 0,
      flexDirection: 'row',
    },
    imageContainer: {
      borderRadius: 14,
    },
    image: {
      width: 145,
      height: 145,
      borderRadius: 14,
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      paddingTop: theme.spacing.lg,
    },
    divider: {
      backgroundColor: theme.colors.text,
      width: '100%',
      height: 1,
      marginVertical: theme.spacing.xs,
    },
    discountContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'baseline',
    },
    smallText: {
      fontSize: 12,
    },
    buttonContainer: {
      marginTop: 'auto',
      alignSelf: 'flex-end',
      backgroundColor: theme.colors.text,
      borderRadius: 32,
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 'auto',
    },
  });
