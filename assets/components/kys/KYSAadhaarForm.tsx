import { StyleSheet, View, Image as RNImage } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import * as yup from 'yup';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'react-native-image-crop-picker';
import { isEmpty } from 'lodash';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';
import Button from '../common/Button';
import ScontoFullLogo from '../../assets/svg/ScontoFullLogo';
import { RootStackParamList } from '../../RootNavigator';
import { UpdateKYSAadhaarCardDetails } from '../../types/entities';
import ImageUploadInput from '../common/form/ImageUploadInput';
import { useUploadFile } from '../../api/queries/index.queries';
import { useKYSAadhaarUpdate, useKYSDetails } from '../../api/queries/kys.queries';
import ControlledMaskedInput from '../common/form/ControlledMaskedInput';

interface KYSAadhaarFormProps {}

const aadhaarMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const schema = yup.object({
  aadhaarNumber: yup
    .string()
    .required()
    .label('Aadhaar Number')
    .length(12, 'Enter a valid 12 digit Aadhaar Number')
    .matches(/^\d+$/, 'Aadhaar Number must be a number'),
  aadhaarDocument: yup.mixed().required().label('Aadhaar'),
});

type FormInputs = {
  aadhaarNumber: UpdateKYSAadhaarCardDetails['aadhaarNumber'];
  aadhaarDocument: Image;
};

const KYSAadhaarForm: React.FC<KYSAadhaarFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const form = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const kys = useKYSDetails();

  const isAlreadyHasValue = React.useMemo(
    () => !!(kys.data?.aadhaarNumber && kys.data.aadhaarDocument),
    [kys.data]
  );

  const uploadFile = useUploadFile();
  const updateAadhaar = useKYSAadhaarUpdate();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const formData = new FormData();

      formData.append('file', {
        uri: data.aadhaarDocument?.path,
        type: data.aadhaarDocument.mime,
        name: data.aadhaarDocument.filename,
        width: data.aadhaarDocument?.cropRect?.width,
        height: data.aadhaarDocument?.cropRect?.height,
      });

      const uploadedFile = await uploadFile.mutateAsync(formData);

      await updateAadhaar.mutateAsync({
        aadhaarNumber: data.aadhaarNumber,
        aadhaarDocument: uploadedFile._id,
      });

      form.reset();

      navigation.navigate('KYSCollegeID');
    } catch (err) {
      //
    }
  });

  const onNext = () => {
    if (isAlreadyHasValue) {
      const values = form.getValues();
      const isDirty = values.aadhaarDocument === undefined && isEmpty(values.aadhaarNumber);

      if (!isDirty) {
        onSubmit();
      } else {
        navigation.navigate('KYSCollegeID');
      }
    } else {
      onSubmit();
    }
  };

  const getMaskedAadhaar = React.useCallback(
    () => `XXXX XXXX ${kys.data?.aadhaarNumber?.substring(7, 12)}`,
    [kys.data?.aadhaarNumber]
  );

  return (
    <View>
      <Typography fontSize="large" fontStyle="medium" style={styles.heading}>
        Aadhaar Card Verification
      </Typography>

      {kys.data?.aadhaarNumber ? (
        <View style={styles.details}>
          <View>
            <Typography fontStyle="regular" color="border" fontSize={11}>
              Aadhaar Card
            </Typography>
            <Typography fontStyle="bold" color="primary">
              {getMaskedAadhaar()}
            </Typography>
          </View>
          <RNImage source={{ uri: kys.data.aadhaarDocument }} style={styles.image} />
        </View>
      ) : null}

      <Typography fontSize={12} color="border" mb={theme.spacing.md}>
        Enter your Aadhaar Card Number and click a photo of your original Aadhaar Card
      </Typography>

      <FormProvider {...form}>
        <ControlledMaskedInput name="aadhaarNumber" keyboardType="number-pad" mask={aadhaarMask} />

        <ImageUploadInput name="aadhaarDocument" label="Capture your Aadhaar Card" />

        <View style={styles.buttonContainer}>
          <Button
            iconName="arrow-right"
            style={styles.button}
            onPress={onNext}
            isLoading={form.formState.isSubmitting}
          >
            Next
          </Button>
        </View>

        <View style={styles.bottomLogo}>
          <ScontoFullLogo />
        </View>
      </FormProvider>
    </View>
  );
};

export default KYSAadhaarForm;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    heading: {
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      paddingVertical: theme.spacing.xs,
      marginBottom: theme.spacing.md,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: theme.spacing.xxl,
    },
    button: {
      marginHorizontal: 4,
    },
    bottomLogo: {
      marginVertical: theme.spacing.xxl,
      alignItems: 'center',
    },
    details: {
      backgroundColor: theme.colors.lightBackground,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      marginBottom: theme.spacing.lg,
      borderRadius: theme.spacing.md,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.primary,
    },
    image: {
      width: 80,
      height: 40,
      backgroundColor: theme.colors.background,
      borderRadius: 8,
    },
  });
