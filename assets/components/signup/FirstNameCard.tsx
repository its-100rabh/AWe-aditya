import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Typography from '../common/Typography';
import Button from '../common/Button';

interface FirstNameCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const FirstNameCard: React.FC<FirstNameCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Hi,
        </Typography>
        <Typography fontSize={38} fontStyle="bold">
          What's your
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          First Name?
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledFloatingTextInput
          name="firstName"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                First Name
              </Typography>
            </>
          )}
          returnKeyType="next"
          onNext={onNext}
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

export default FirstNameCard;

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
