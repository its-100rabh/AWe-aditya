import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ControlledSelect from '../common/form/ControlledSelect';

interface CountryCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const options = [
  { label: 'India', value: 'India' },
  { label: 'Bangladesh', value: 'Bangladesh' },
  { label: 'Sri Lanka', value: 'Sri Lanka' },
  { label: 'Bhutan', value: 'Bhutan' },
];

const CountryCard: React.FC<CountryCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Incase your Prime Minister isn't Narendra Modi,{' '}
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          Drop it down!
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledSelect
          name="address.country"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Nationality
              </Typography>
            </>
          )}
          options={options}
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

export default CountryCard;

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
