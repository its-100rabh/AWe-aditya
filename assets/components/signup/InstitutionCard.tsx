import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useController, useFormContext } from 'react-hook-form';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import SelectInstitute from '../common/SelectInstitute';

interface InstitutionCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const InstitutionCard: React.FC<InstitutionCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const form = useFormContext();

  const controller = useController({
    control: form.control,
    name: 'institution',
    defaultValue: undefined,
  });

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Where do you do initiate those{' '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            canteen gossip?
          </Typography>
        </Typography>
      </View>

      <View style={styles.form}>
        <SelectInstitute
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Name of Institution
              </Typography>
            </>
          )}
          value={controller.field.value}
          onChange={controller.field.onChange}
          error={controller.fieldState.error?.message}
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

export default InstitutionCard;

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
