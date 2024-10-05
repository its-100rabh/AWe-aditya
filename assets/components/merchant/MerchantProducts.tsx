import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { Merchant } from '../../types/entities';
import MerchantStoreLocationCard from './MerchantStoreLocationCard';
import { useMerchantStoreLocations } from '../../api/requests/merchantStore.requests';

interface MerchantProductsProps {
  merchant: Merchant;
}

const MerchantProducts: React.FC<MerchantProductsProps> = ({ merchant }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const storeLocations = useMerchantStoreLocations(merchant._id);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Typography fontSize="large" fontStyle="bold">
          {merchant.name}
        </Typography>

        {merchant.isOnline ? (
          <>
            <View style={styles.verticalDivider} />

            <Typography fontSize="medium" fontStyle="medium">
              Online
            </Typography>
          </>
        ) : null}
      </View>

      <View style={styles.divider} />

      <FlatList
        data={storeLocations.data ?? []}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <MerchantStoreLocationCard store={item} merchant={merchant} />}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default MerchantProducts;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    flatList: {
      marginHorizontal: -theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    flatListContent: {
      paddingHorizontal: theme.spacing.md,
    },
    container: {
      marginTop: theme.spacing.md,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    verticalDivider: {
      width: 1,
      height: '100%',
      backgroundColor: theme.colors.text,
      marginHorizontal: theme.spacing.sm,
      transform: [{ translateY: 4 }],
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.text,
      marginVertical: theme.spacing.md,
    },
  });
