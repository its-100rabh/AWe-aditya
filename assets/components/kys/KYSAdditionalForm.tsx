import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import * as yup from 'yup';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { Image } from 'react-native-image-crop-picker';
import { RootStackParamList } from '../../RootNavigator';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ScontoFullLogo from '../../assets/svg/ScontoFullLogo';
import ImageUploadInput from '../common/form/ImageUploadInput';
import type { ExtendedTheme } from '../../types';
import { useUploadFile } from '../../api/queries/index.queries';
import { useKYSAdditionalDetailsUpdate, useKYSDetails } from '../../api/queries/kys.queries';
import { IAdditionalDocument } from '../../types/entities';

interface KYSAdditionalFormProps {}

type FormInputs = {
  documents: Array<
    Omit<IAdditionalDocument, 'file' | '_id' | 'createAt' | 'updatedAt'> & { file: Image }
  >;
};

const schema = yup.object({
  documents: yup.array().of(
    yup.object().shape({
      key: yup.string().required(),
      label: yup.string().required(),
      file: yup.mixed().label('Document'),
    })
  ),
});

const KYSAdditionalForm: React.FC<KYSAdditionalFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const form = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: {
      documents: [
        {
          key: 'lastMarksheet',
          label: 'Last Semester Marksheet',
        },
      ],
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'documents',
  });

  const kys = useKYSDetails();

  const uploadFile = useUploadFile();
  const updateAdditionalDocuments = useKYSAdditionalDetailsUpdate();

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      const validDocuments = data.documents.filter((document) => !!document.file);

      if (validDocuments.length > 0) {
        const requests = validDocuments.map((document) => {
          const formData = new FormData();

          formData.append('file', {
            uri: document.file?.path,
            type: document.file.mime,
            name: document.file.filename,
            width: document.file?.cropRect?.width,
            height: document.file?.cropRect?.height,
          });

          return uploadFile.mutateAsync(formData);
        });

        const files = await Promise.all(requests);

        const documents = data.documents.map((document, index) => ({
          key: document.key,
          label: document.label,
          file: files[index]._id,
        }));

        await updateAdditionalDocuments.mutateAsync({
          additionalDocuments: documents,
        });
      }

      navigation.navigate('KYSVideo');
    } catch (err) {
      //
    }
  });

  const getPreviewURL = React.useCallback(
    (label: string) =>
      kys.data?.additionalDocuments?.find((document) => document.label === label)?.file,
    [kys.data]
  );

  return (
    <View>
      <Typography fontSize="large" fontStyle="medium" style={styles.heading}>
        {'Additional Documents '}
        <Typography fontSize="small" mb={24} color="border">
          Optional
        </Typography>
      </Typography>

      <FormProvider {...form}>
        {fields.map((field, index) => (
          <React.Fragment key={field.id}>
            <ImageUploadInput
              name={`documents.${index}.file`}
              label={`Upload ${field.label}`}
              width={768}
              height={1024}
              preview={getPreviewURL(field.label)}
            />
          </React.Fragment>
        ))}

        <Button
          iconName="arrow-right"
          style={styles.button}
          onPress={onSubmit}
          isLoading={form.formState.isSubmitting}
        >
          Next
        </Button>

        <View style={styles.bottomLogo}>
          <ScontoFullLogo />
        </View>
      </FormProvider>
    </View>
  );
};

export default KYSAdditionalForm;

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
    button: {
      marginVertical: theme.spacing.xxl,
    },
    bottomLogo: {
      marginVertical: theme.spacing.xxl,
      alignItems: 'center',
    },
    preview: {
      width: 200,
      height: 120,
      backgroundColor: theme.colors.lightBackground,
      borderRadius: 20,
      marginBottom: theme.spacing.xs,
    },
    flatList: {
      marginBottom: theme.spacing.lg,
    },
  });
