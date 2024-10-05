import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Button from '../common/Button';
import { useStudent } from '../../store/selector';
import { AUTH_TYPE } from '../../types/entities';

interface EmailCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const EmailCard: React.FC<EmailCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const [student] = useStudent();

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          We all have the official{' '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            @t-the-rate
          </Typography>{' '}
          stuffs, what's your?
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledFloatingTextInput
          name="email"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Email Address
              </Typography>
            </>
          )}
          editable={student?.initialVerificationWith !== AUTH_TYPE.EMAIL}
          returnKeyType="next"
          autoCapitalize="none"
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

export default EmailCard;

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
