import { FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Color from 'color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { usePromoCoupons, useRedeemCouponCode } from '../../../api/queries/merchantCodes.queries';
import type { ExtendedTheme } from '../../../types';
import Typography from '../../common/Typography';
import { useStudent } from '../../../store/selector';
import { IPromoCoupon } from '../../../types/entities';

interface MerchantCouponsProps {
  merchantId: string;
}

const MerchantCoupons: React.FC<MerchantCouponsProps> = ({ merchantId }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();
  const redeem = useRedeemCouponCode();

  const couponsQuery = usePromoCoupons({
    limit: 100,
    issuerMerchantId: merchantId,
    isActive: true,
  });

  const coupons = React.useMemo(
    () => couponsQuery.data?.pages.map((c) => c.promoCoupons).flat() ?? [],
    [couponsQuery]
  );

  const handleRedeem = (item: IPromoCoupon) => {
    if (student?._id) {
      redeem.mutate({
        promoCouponId: item._id,
        issuedToStudentId: student._id,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Typography>Redeem Coupons</Typography>
      <FlatList
        data={coupons}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl
            refreshing={couponsQuery.isFetching}
            onRefresh={couponsQuery.refetch}
            colors={[theme.colors.primary]}
          />
        }
        onEndReachedThreshold={0}
        onEndReached={() => couponsQuery.fetchNextPage()}
        renderItem={({ item }) => (
          <View style={styles.coupon}>
            <Icon name="ticket" size={30} color={theme.colors.primary} />
            <Typography fontSize="large" fontStyle="bold" ml={8}>
              {item.name}
            </Typography>
            <TouchableOpacity style={styles.button} onPress={() => handleRedeem(item)}>
              <Typography color="background" fontStyle="bold">
                Redeem
              </Typography>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MerchantCoupons;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.lg,
    },
    coupon: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Color(theme.colors.primary).alpha(0.2).rgb().toString(),
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
      marginTop: theme.spacing.sm,
    },
    button: {
      marginLeft: 'auto',
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 4,
      paddingVertical: 4,
      borderRadius: 4,
    },
  });
