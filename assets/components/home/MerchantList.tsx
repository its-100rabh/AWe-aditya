import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import MerchantCard from './MerchantCard';
import { Merchant } from '../../types/entities';
import Button from '../common/Button';

interface MerchantListProps {
  merchants: Array<Merchant>;
  isFetching?: boolean;
  onRefresh?: () => void;
  onNextPage?: () => void;
  hasNextPage?: boolean;
  ListHeaderComponent?: React.ReactElement;
  stickyHeaderIndices?: number[];
}

const MerchantList: React.FC<MerchantListProps> = ({
  merchants,
  isFetching = false,
  onRefresh,
  onNextPage,
  hasNextPage,
  ListHeaderComponent,
  stickyHeaderIndices,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const flatListRef = React.useRef<FlatList | null>(null);

  return (
    <View>
      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
          />
        }
        ListHeaderComponent={ListHeaderComponent}
        stickyHeaderIndices={stickyHeaderIndices}
        onEndReachedThreshold={0.9}
        onEndReached={onNextPage}
        data={merchants}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <MerchantCard merchant={item} />}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        ListFooterComponent={() =>
          hasNextPage ? (
            <View>
              <Button onPress={onNextPage}>More</Button>
            </View>
          ) : null
        }
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    </View>
  );
};

export default MerchantList;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    flatList: {
      marginHorizontal: -theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    flatListContent: {
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.xxl,
    },
    divider: {
      width: '100%',
      marginVertical: theme.spacing.sm,
    },
  });
