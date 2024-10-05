import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import { GENDER_TYPE } from '../../types/entities';
import ControlledSelect from '../common/form/ControlledSelect';

interface GenderCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const options = [
  { label: 'Male', value: GENDER_TYPE.MALE },
  { label: 'Female', value: GENDER_TYPE.FEMALE },
  { label: 'Non-binary', value: GENDER_TYPE.NON_BINARY },
];

const GenderCard: React.FC<GenderCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          {'And your '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            Gender?
          </Typography>
        </Typography>
      </View>

      <View style={styles.form}>
        <ControlledSelect
          label={(isError) => (
            <>
              {'Select '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Gender
              </Typography>
            </>
          )}
          name="gender"
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

export default GenderCard;

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
