import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import dayjs from 'dayjs';
import type { ExtendedTheme } from '../../types';
import { ITransaction, Merchant, TRANSACTION_STATUS } from '../../types/entities';
import Typography from '../common/Typography';

interface TransactionCardProps {
  transaction: ITransaction;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const getStatusColor = React.useCallback(() => {
    switch (transaction.status) {
      case TRANSACTION_STATUS.PENDING:
        return theme.colors.secondary;
      case TRANSACTION_STATUS.FAILED:
        return theme.colors.error;
      case TRANSACTION_STATUS.CANCELLED:
        return theme.colors.error;
      case TRANSACTION_STATUS.PAID:
        return theme.colors.primary;
      default:
        return theme.colors.text;
    }
  }, [transaction]);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Typography>
          {'Transaction '}
          <Typography fontStyle="medium">
            #{transaction._id.substring(transaction._id.length - 4, transaction._id.length)}
          </Typography>
        </Typography>

        <Typography style={{ color: getStatusColor() }} fontStyle="bold">
          {transaction.status}
        </Typography>
      </View>

      <View style={styles.divider} />

      <View style={styles.amountContainer}>
        <View>
          <Typography fontSize="small">Amount</Typography>
          <Typography fontSize="large" fontStyle="medium">
            ₹ {transaction.amount / 100}
          </Typography>
        </View>

        <View>
          <Typography fontSize="small">Discount</Typography>
          <Typography fontSize="large" fontStyle="medium">
            {transaction.discount} %
          </Typography>
        </View>

        <View>
          <Typography fontSize="small">U Pay</Typography>
          <Typography fontSize="large" fontStyle="medium">
            ₹{' '}
            {(
              (transaction.amount - transaction.amount * (transaction.discount / 100)) /
              100
            ).toFixed(2)}
          </Typography>
        </View>
      </View>

      <Typography fontSize="small">Availed At</Typography>
      <Typography fontSize="large" fontStyle="medium">
        {(transaction.receiverDetails as Merchant).name}
      </Typography>

      <Typography fontSize="medium" fontStyle="medium" mt={4} align="right" color="border">
        {dayjs(transaction.createdAt).format('h:mm A, DD MMM YYYY')}
      </Typography>
    </View>
  );
};

export default TransactionCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.sm,
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      width: '100%',
      backgroundColor: theme.colors.accent,
    },
    amountContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.sm,
    },
  });
