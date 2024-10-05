import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { Controller, useFormContext } from 'react-hook-form';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ProfilePictureInput from './ProfilePictureInput';
import { RootStackParamList } from '../../RootNavigator';

interface ProfilePictureCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const ProfilePictureCard: React.FC<ProfilePictureCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const form = useFormContext();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleTerms = () =>
    navigation.navigate('WebView', { url: 'https://sconto.ai/terms-and-conditions' });

  return (
    <View style={style}>
      <View style={styles.form}>
        <ProfilePictureInput name="file" />
      </View>

      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          {'And lastly '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            Take a selfie!
          </Typography>
          {' or upload your '}
          <Typography fontSize={38} fontStyle="bold" color="primary">
            Best One!
          </Typography>
        </Typography>
      </View>

      <Controller
        name="isAccepted"
        control={form.control}
        defaultValue={false}
        render={({ field, fieldState }) => (
          <View style={styles.checkboxContainer}>
            <BouncyCheckbox
              size={25}
              fillColor={fieldState.error ? theme.colors.error : theme.colors.primary}
              unfillColor={theme.colors.lightBackground}
              text=""
              onPress={(isChecked: boolean) => {
                field.onChange(isChecked);
              }}
              isChecked={field.value}
            />

            <Typography fontSize="small">
              {'Please accept our '}
              <Typography fontSize="small" color="accent" fontStyle="bold" onPress={handleTerms}>
                Terms & Conditions
              </Typography>
            </Typography>
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <Button iconName="arrow-right" onPress={onNext} isLoading={form.formState.isSubmitting}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default ProfilePictureCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    form: {
      marginBottom: theme.spacing.xxl,
    },
    textContainer: {
      height: 240,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: theme.spacing.md,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
  });
