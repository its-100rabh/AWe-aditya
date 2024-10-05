import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ControlledSelect from '../common/form/ControlledSelect';

interface LanguageCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const options = [
  { label: 'English', value: 'english' },
  { label: 'Bengali', value: 'bengali' },
  { label: 'Hindi', value: 'hindi' },
  { label: 'Marathi', value: 'marathi' },
  { label: 'Kannada', value: 'kannada' },
  { label: 'Punjabi', value: 'punjabi' },
  { label: 'Telugu', value: 'telugu' },
  { label: 'Tamil', value: 'tamil' },
  { label: 'Gujrati', value: 'gujrati' },
  { label: 'Urdu', value: 'urdu' },
  { label: 'Odia', value: 'Odia' },
  { label: 'Malayalam', value: 'malayalam' },
  { label: 'Assamese', value: 'assamese' },
  { label: 'Sanskrit', value: 'sanskrit' },
  { label: 'Maithili', value: 'maithili' },
  { label: 'Meitei', value: 'meitei' },
];

const LanguageCard: React.FC<LanguageCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          {'Which '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            language
          </Typography>
          {' did you speak from the '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            day your were born?
          </Typography>
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledSelect
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Mother Tongue
              </Typography>
            </>
          )}
          name="language"
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

export default LanguageCard;

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
