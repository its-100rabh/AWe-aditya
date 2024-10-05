import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Card from '../common/Card';
import Typography from '../common/Typography';
import FloatingTextInput from '../common/FloatingTextInput';
import Button from '../common/Button';
import Rating from '../common/Rating';

interface MerchantReviewFormProps {}

const MerchantReviewForm: React.FC<MerchantReviewFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <Card>
      <Typography>How was your experience</Typography>
      <View style={styles.divider} />

      <FloatingTextInput label="" multiline numberOfLines={4} textAlignVertical="top" />

      <View style={styles.bottomContainer}>
        <Rating />
        <Button>Submit</Button>
      </View>
    </Card>
  );
};

export default MerchantReviewForm;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {},
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.text,
      marginVertical: theme.spacing.md,
    },
    bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  });
