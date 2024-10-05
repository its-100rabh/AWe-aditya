import { FlatList, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from 'color';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';
import { usePromoCodes } from '../../../api/queries/merchantCodes.queries';
import { useStudent } from '../../../store/selector';
import Typography from '../../common/Typography';
import type { ExtendedTheme } from '../../../types';
import { IPromoCode, IPromoCodeWithCoupon } from '../../../types/entities';
import MerchantPromoCodeModal from './MerchantPromoCodeModal';

interface MerchantPromoCodesProps {
  merchantId: string;
}

const MerchantPromoCodes: React.FC<MerchantPromoCodesProps> = ({ merchantId }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  const codesQuery = usePromoCodes({
    limit: 100,
    issuedToStudentId: student?._id,
    issuerMerchantId: merchantId,
    isActive: true,
  });

  const codes = React.useMemo(
    () => codesQuery.data?.pages.map((c) => c.promoCodes).flat() ?? [],
    [codesQuery]
  );

  const handleCopy = (item: IPromoCode) => {
    Clipboard.setString(item.promoCode);
    Toast.show({
      text1: item.promoCode,
      text2: 'Code copied to your clipboard',
    });
  };

  const [selectedPromo, setSelectedPromo] = React.useState<IPromoCodeWithCoupon | null>(null);

  const handleInfo = (item: IPromoCodeWithCoupon) => {
    setSelectedPromo(item);
  };

  return (
    <View style={styles.container}>
      <Typography>Coupons</Typography>
      <FlatList
        data={codes}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl
            refreshing={codesQuery.isFetching}
            onRefresh={codesQuery.refetch}
            colors={[theme.colors.primary]}
          />
        }
        onEndReachedThreshold={0.9}
        onEndReached={() => codesQuery.fetchNextPage()}
        renderItem={({ item }) => (
          <View style={styles.coupon}>
            <Icon name="ticket-percent" size={28} color={theme.colors.secondary} />
            <Typography ml={8} fontStyle="bold" fontSize="large">
              {item.promoCode}
            </Typography>
            <TouchableOpacity style={styles.info} onPress={() => handleInfo(item)}>
              <Icon name="information-outline" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.copy} onPress={() => handleCopy(item)}>
              <Icon name="content-copy" size={24} color={theme.colors.secondary} />
            </TouchableOpacity>
          </View>
        )}
      />

      <MerchantPromoCodeModal
        code={selectedPromo}
        onClose={() => setSelectedPromo(null)}
        isVisible={!!selectedPromo}
      />
    </View>
  );
};

export default MerchantPromoCodes;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.lg,
    },
    coupon: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Color(theme.colors.secondary).alpha(0.2).rgb().toString(),
      paddingVertical: 4,
      paddingHorizontal: 8,
      borderRadius: 8,
      marginTop: theme.spacing.sm,
    },
    info: {
      marginLeft: 'auto',
    },
    copy: {
      marginLeft: 10,
    },
    modal: {},
  });
