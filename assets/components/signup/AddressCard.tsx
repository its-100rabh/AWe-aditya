import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useController, useFormContext } from 'react-hook-form';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import AddressInput from '../common/form/AddressInput';

interface AddressCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const AddressCard: React.FC<AddressCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const form = useFormContext();
  const controller = useController({
    control: form.control,
    name: 'address',
  });

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          This conversation is going great. Bdw,{' '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            where do you stay?
          </Typography>
        </Typography>
      </View>

      <View style={styles.form}>
        <AddressInput
          name="address"
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Address
              </Typography>
            </>
          )}
          value={controller.field.value}
          onChange={controller.field.onChange}
          error={
            controller.fieldState.error?.message ??
            ((form.formState.errors.address as any)?.formattedAddress?.message as unknown as string)
          }
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

export default AddressCard;

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
