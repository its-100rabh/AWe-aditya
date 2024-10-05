import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';

interface ReferralCodeCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Got any
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          Referral?
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledFloatingTextInput
          name="registrationReferralCode"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Referral Code
              </Typography>
            </>
          )}
          returnKeyType="next"
          onNext={onNext}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={onNext}
          iconName="arrow-right"
          backgroundColor="lightBackground"
          textColor="text"
        >
          Skip
        </Button>
        <Button onPress={onNext} iconName="arrow-right">
          Next
        </Button>
      </View>
    </View>
  );
};

export default ReferralCodeCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    form: {},
    textContainer: {
      height: 300,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.md,
    },
  });
