import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ControlledDatePicker from '../common/form/ControlledDatePicker';

interface BirthdayCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Let's get back to the{' '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            Day you were Born.
          </Typography>
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledDatePicker
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Date of Birth
              </Typography>
            </>
          )}
          name="dob"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button iconName="arrow-right" onPress={onNext}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default BirthdayCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    form: {},
    textContainer: {
      height: 300,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: theme.spacing.md,
    },
  });
