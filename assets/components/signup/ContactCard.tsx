import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ContactNumberField from '../common/form/ContactNumberField';

interface ContactCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          Your current unique{' '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            ten digit number
          </Typography>{' '}
          ;) Except Sconto's.
        </Typography>
      </View>

      <View style={styles.form}>
        <ContactNumberField
          name="contactNumber"
          onNext={onNext}
          label={(isError) => (
            <>
              {'Enter '}
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Contact Number
              </Typography>
            </>
          )}
          returnKeyType="next"
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

export default ContactCard;

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
