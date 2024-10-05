import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Button from '../common/Button';

interface MiddleNameCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const MiddleNameCard: React.FC<MiddleNameCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const methods = useFormContext();
  const firstName = methods.watch('firstName');

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          {'Hey '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            {firstName}!
          </Typography>
        </Typography>
        <Typography fontSize={38} fontStyle="bold" style={styles.textMargin}>
          Nice to meet you.
        </Typography>

        <Typography fontSize={38} fontStyle="bold">
          Do you have a
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          Middle Name?
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledFloatingTextInput
          name="middleName"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Middle Name
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

export default MiddleNameCard;

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
    textMargin: {
      marginBottom: theme.spacing.md,
    },
  });
