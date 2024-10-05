import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import { useMerchantStoreLocations } from '../../api/queries/merchantStore.queries';
import { IMerchantStoreLocation, Merchant } from '../../types/entities';
import StoreCard from './StoreCard';
import Typography from '../common/Typography';
import Button from '../common/Button';

interface StoreListProps {
  merchant: Merchant;
}

const StoreList: React.FC<StoreListProps> = ({ merchant }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const stores = useMerchantStoreLocations(merchant._id);

  const storeLocations = React.useMemo(
    () =>
      stores.data?.pages.reduce(
        (acc, value) => [...acc, ...value.merchantStoreLocations],
        [] as Array<IMerchantStoreLocation>
      ) ?? [],
    [stores.data]
  );

  const flatListRef = React.useRef<FlatList | null>(null);

  if (storeLocations.length === 0) return null;

  return (
    <View>
      <Typography mb={theme.spacing.lg} color="accent" fontStyle="bold">
        Stores
      </Typography>
      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            refreshing={stores.isFetching}
            onRefresh={stores.refetch}
            colors={[theme.colors.primary]}
          />
        }
        onEndReachedThreshold={0.9}
        onEndReached={() => stores.fetchNextPage()}
        data={storeLocations}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <StoreCard merchant={merchant} store={item} />}
        style={styles.flatList}
        ListFooterComponent={() =>
          stores.hasNextPage ? (
            <View>
              <Button onPress={() => stores.fetchNextPage()}>More</Button>
            </View>
          ) : null
        }
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default StoreList;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    flatList: {
      marginBottom: theme.spacing.lg,
    },
    divider: {
      width: '100%',
      marginVertical: theme.spacing.sm,
    },
  });
