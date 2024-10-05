import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../../types';
import { FloatingTextInputProps } from '../FloatingTextInput';
import IndianFlag from '../../../assets/svg/IndianFlag';
import Typography from '../Typography';
import ControlledFloatingTextInputContactNumber from './ControlledFloatingTextInputContactNumber';

interface ContactNumberFieldProps extends Omit<FloatingTextInputProps, 'name'> {
  name: string;
  onNext?: () => void;
  maxLength?: number;
}

const ContactNumberField: React.FC<ContactNumberFieldProps> = ({
  label = 'Enter Phone Number',
  name,
  onNext,
  maxLength,
  ...props
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme, false), [theme]);

  // const form = useFormContext();

  return (
    <View style={styles.container}>
      {/* <Controller
        name={`${name}.countryCode`}
        control={form.control}
        defaultValue="+91"
        render={({ field }) => (
          <TextInput
            selectionColor={theme.colors.primary}
            value={field.value}
            onChangeText={field.onChange}
            editable={false}
            style={styles.countryCode}
          />
        )}
      /> */}
      <ControlledFloatingTextInputContactNumber
        {...props}
        keyboardType="phone-pad"
        label={label}
        name={`${name}.number`}
        left={
          <View style={styles.textContainer}>
            <IndianFlag />
            <Typography color="dark" fontSize={25}>
              {' '}
              +91
            </Typography>
          </View>
        }
        containerStyle={styles.number}
        onNext={onNext}
        maxLength={maxLength}
      />
    </View>
  );
};

export default ContactNumberField;

const createStyles = (theme: ExtendedTheme, isError?: boolean) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
    countryCode: {
      ...theme.fonts.regular,
      backgroundColor: theme.colors.inputBackground,
      color: theme.colors.dark,
      fontSize: theme.fontSize.large,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      margin: 0,
      marginTop: 30,
      marginRight: theme.spacing.xs,
      borderColor: isError ? theme.colors.error : theme.colors.lightBackground,
      borderWidth: 1,
      borderRadius: 30,
    },
    number: {
      flex: 1,
    },
    textContainer: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
    },
  });
