import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useProducts } from '../../../api/queries/products.queries';
import { IProduct } from '../../../types/entities';
import Typography from '../../common/Typography';
import ProductCard from './ProductCard';
import Button from '../../common/Button';
import type { ExtendedTheme } from '../../../types';

interface ProductionListProps {
  storeId: string;
}

const ProductionList: React.FC<ProductionListProps> = ({ storeId }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const products = useProducts(storeId);

  const reducedProducts = React.useMemo(
    () =>
      products.data?.pages.reduce(
        (acc, value) => [...acc, ...value.merchantListing],
        [] as Array<IProduct>
      ) ?? [],
    [products.data]
  );

  const flatListRef = React.useRef<FlatList | null>(null);

  return (
    <View>
      <Typography mb={theme.spacing.lg} color="accent" fontStyle="bold">
        Products
      </Typography>
      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            refreshing={products.isFetching}
            onRefresh={products.refetch}
            colors={[theme.colors.primary]}
          />
        }
        onEndReachedThreshold={0.9}
        onEndReached={() => products.fetchNextPage()}
        data={reducedProducts}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard product={item} />}
        style={styles.flatList}
        ListFooterComponent={() =>
          products.hasNextPage ? (
            <View>
              <Button onPress={() => products.fetchNextPage()}>More</Button>
            </View>
          ) : null
        }
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default ProductionList;

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
