import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useFormContext } from 'react-hook-form';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Button from '../common/Button';

interface LastNameCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const LastNameCard: React.FC<LastNameCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const methods = useFormContext();
  const firstName = methods.watch('firstName');

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          So, what's your
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          Surname,
        </Typography>
        <Typography fontSize={38} fontStyle="bold">
          {firstName}?
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledFloatingTextInput
          name="lastName"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Last Name
              </Typography>
            </>
          )}
          returnKeyType="next"
          onNext={onNext}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={onNext} iconName="arrow-right">
          Next
        </Button>
      </View>
    </View>
  );
};

export default LastNameCard;

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
