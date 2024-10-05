import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
// import { ITransaction, Merchant, TRANSACTION_STATUS } from '../../types/entities';
import Typography from '../common/Typography';
import DownloadRecieptIcon from '../../assets/svg/DownloadRecieptIcon';

const TransactionItem: React.FC = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.card}>
      <View style={styles.flexItem}>
        <View style={styles.colorItem} />
        <Typography color="dark" fontStyle="medium">
          Briyani Canteen
        </Typography>
      </View>
      <View style={styles.flexItem}>
        <View style={styles.colorItemTransparent} />
        <View>
          <Typography color="dark" mt={5} mb={5}>
            ₹ 720.00
          </Typography>
          <View style={styles.flexItem}>
            <Typography color="lightText" mr={20}>
              Total Bill: <Typography color="dark">₹ 840.60</Typography>
            </Typography>
            <Typography color="lightText">
              Discount: <Typography color="dark">18%</Typography>
            </Typography>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.downloadContainer}>
        <DownloadRecieptIcon />
        <Typography color="dark" fontSize="small" ml={8}>
          Reciept
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionItem;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.lightInputBackground,
      borderRadius: theme.rounded.card,
      position: 'relative',
      marginVertical: 10,
    },
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    colorItem: {
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      height: 20,
      width: 20,
      marginRight: 10,
    },
    colorItemTransparent: {
      backgroundColor: theme.colors.transparent,
      borderRadius: 50,
      height: 20,
      width: 20,
      marginRight: 10,
    },
    downloadContainer: {
      position: 'absolute',
      top: 40,
      right: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
