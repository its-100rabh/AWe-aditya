import { StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Card from '../common/Card';
import type { ExtendedTheme } from '../../types';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Button from '../common/Button';

interface DGenieFormProps {}

const schema = yup.object({});

const DGenieForm: React.FC<DGenieFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const form = useForm({ resolver: yupResolver(schema) });

  return (
    <Card>
      <FormProvider {...form}>
        <ControlledFloatingTextInput name="name" label="Restaurant's Name" required />
        <ControlledFloatingTextInput
          name="contactNumber"
          label="Restaurant's Phone Number"
          required
        />
        <ControlledFloatingTextInput name="location" label="Select Location" required />
        <ControlledFloatingTextInput
          name="description"
          label="Anything more you'd like to add about the restaurant"
          multiline
          numberOfLines={2}
          required
        />

        <Button iconName="arrow-right" style={styles.button}>
          Submit
        </Button>
      </FormProvider>
    </Card>
  );
};

export default DGenieForm;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    button: {
      marginTop: theme.spacing.lg,
    },
  });
