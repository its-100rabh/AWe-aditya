import { StyleSheet, View, Image as RNImage } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { isEmpty } from 'lodash';
import { Image } from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';
import Button from '../common/Button';
import ScontoFullLogo from '../../assets/svg/ScontoFullLogo';
import { RootStackParamList } from '../../RootNavigator';
import ImageUploadInput from '../common/form/ImageUploadInput';
import {
  UpdateCollegeIDCardDetails,
  UpdateRegistrationCertificateDetails,
} from '../../types/entities';
import yup from '../../utils/yup';
import { useUploadFile } from '../../api/queries/index.queries';
import {
  useKYSCollegeIDCardUpdate,
  useKYSDetails,
  useKYSRegistrationCardCertificateUpdate,
} from '../../api/queries/kys.queries';

interface KYSCollegeIDFormProps {}

type FormInputs = {
  collegeIdCardNumber: UpdateCollegeIDCardDetails['collegeIdCardNumber'];
  collegeIdCardDocument: Image;
  registrationCertificateNumber: UpdateRegistrationCertificateDetails['registrationCertificateNumber'];
  registrationCertificateDocument: Image;
};

const schema = yup.object({
  collegeIdCardNumber: yup.string().label('College ID Card Number').stripEmptyString(),
  collegeIdCardDocument: yup
    .mixed()
    .label('College ID Card Document')
    .when('collegeIdCardNumber', {
      is: (value: string | undefined) => !isEmpty(value),
      then: yup.mixed().required().label('College ID Card Document'),
      otherwise: yup.mixed().label('College ID Card Document'),
    }),
  registrationCertificateNumber: yup
    .string()
    .label('Registration Certificate Number')
    .stripEmptyString(),
  registrationCertificateDocument: yup
    .mixed()
    .label('Registration Certificate Document')
    .when('registrationCertificateNumber', {
      is: (value: string | undefined) => !isEmpty(value),
      then: yup.mixed().required().label('Registration Certificate Document'),
      otherwise: yup.mixed().label('Registration Certificate Document'),
    }),
});

const KYSCollegeIDForm: React.FC<KYSCollegeIDFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const form = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const kys = useKYSDetails();

  const uploadFile = useUploadFile();
  const updateCollegeIDCard = useKYSCollegeIDCardUpdate();
  const updateRegistrationCard = useKYSRegistrationCardCertificateUpdate();

  const onSubmit = form.handleSubmit(async (data) => {
    if (
      data.collegeIdCardNumber === undefined &&
      data.registrationCertificateNumber === undefined
    ) {
      Toast.show({
        text1: 'Either College ID Card or Registration Certificate is needed',
        type: 'error',
      });
    } else {
      try {
        if (data.collegeIdCardNumber) {
          const collegeIDCardFormData = new FormData();

          collegeIDCardFormData.append('file', {
            uri: data.collegeIdCardDocument?.path,
            type: data.collegeIdCardDocument.mime,
            name: data.collegeIdCardDocument.filename,
            width: data.collegeIdCardDocument?.cropRect?.width,
            height: data.collegeIdCardDocument?.cropRect?.height,
          });

          const uploadedCollegeIdCard = await uploadFile.mutateAsync(collegeIDCardFormData);

          await updateCollegeIDCard.mutateAsync({
            collegeIdCardNumber: data.collegeIdCardNumber,
            collegeIdCardDocument: uploadedCollegeIdCard._id,
          });
        }

        if (data.registrationCertificateNumber) {
          const registrationCardData = new FormData();

          registrationCardData.append('file', {
            uri: data.registrationCertificateDocument?.path,
            type: data.registrationCertificateDocument.mime,
            name: data.registrationCertificateDocument.filename,
            width: data.registrationCertificateDocument?.cropRect?.width,
            height: data.registrationCertificateDocument?.cropRect?.height,
          });

          const uploadedRegistrationCertificate = await uploadFile.mutateAsync(
            registrationCardData
          );

          await updateRegistrationCard.mutateAsync({
            registrationCertificateNumber: data.registrationCertificateNumber,
            registrationCertificateDocument: uploadedRegistrationCertificate._id,
          });
        }

        form.reset();

        navigation.navigate('KYSVideo');
      } catch (err) {
        //
      }
    }
  });

  const isAlreadyHasValue = React.useMemo(
    () => !!(kys.data?.collegeIdCardNumber && kys.data.collegeIdCardDocument),
    [kys.data]
  );

  const onNext = () => {
    if (isAlreadyHasValue) {
      const values = form.getValues();
      const isDirty =
        values.collegeIdCardDocument === undefined && isEmpty(values.collegeIdCardNumber);

      if (!isDirty) {
        onSubmit();
      } else {
        navigation.navigate('KYSVideo');
      }
    } else {
      onSubmit();
    }
  };

  return (
    <View>
      <FormProvider {...form}>
        <Typography fontSize="large" fontStyle="medium" style={styles.heading}>
          Upload College ID
        </Typography>

        {kys.data?.collegeIdCardNumber ? (
          <View style={styles.details}>
            <View>
              <Typography fontStyle="regular" color="border" fontSize={11}>
                College ID Card
              </Typography>
              <Typography fontStyle="bold" color="primary">
                {kys.data?.collegeIdCardNumber}
              </Typography>
            </View>
            <RNImage source={{ uri: kys.data.collegeIdCardNumber }} style={styles.image} />
          </View>
        ) : null}

        {kys.data?.registrationCertificateNumber ? (
          <View style={styles.details}>
            <View>
              <Typography fontStyle="regular" color="border" fontSize={11}>
                Registration Card
              </Typography>
              <Typography fontStyle="bold" color="primary">
                {kys.data?.registrationCertificateNumber}
              </Typography>
            </View>
            <RNImage
              source={{ uri: kys.data.registrationCertificateDocument }}
              style={styles.image}
            />
          </View>
        ) : null}

        <ControlledFloatingTextInput name="collegeIdCardNumber" label="College ID Card Number" />

        <ImageUploadInput
          name="collegeIdCardDocument"
          label="Upload College ID Card"
          width={1024}
          height={1024}
        />

        <Typography fontSize="large" fontStyle="medium" style={styles.heading} mt={24}>
          Upload College Registration Card
        </Typography>

        <Typography fontSize={12} color="border" mb={theme.spacing.md}>
          Uploading your University Registration Card is optional.
        </Typography>

        <ControlledFloatingTextInput
          name="registrationCertificateNumber"
          label="Registration Certificate Number"
        />

        <ImageUploadInput
          name="registrationCertificateDocument"
          label="Upload Registration Certificate"
          width={1024}
          height={1024}
        />

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

export default KYSCollegeIDForm;

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
