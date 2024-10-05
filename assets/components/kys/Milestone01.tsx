import { StyleSheet, View, Image, Platform, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { useTheme } from '@react-navigation/native';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { isEmpty } from 'lodash';
import Toast from 'react-native-toast-message';
import Typography from '../common/Typography';
import ThemeChangeItem from '../common/ThemeChangeItem';
import HorizontalRule from '../common/HorizontalRule';
import Button from '../common/Button';
import type { ExtendedTheme } from '../../types';
import AvatarImage from '../../assets/images/Kys-Selfie.png';
import { useUploadFile } from '../../api/queries/index.queries';
import { useKYSCollegeIDCardUpdate } from '../../api/queries/kys.queries';
import { UpdateCollegeIDCardDetails } from '../../types/entities';
import yup from '../../utils/yup';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';

type MilestoneProps = {
  bottomRef: any;
};

type FormInputs = {
  collegeIdCardNumber: UpdateCollegeIDCardDetails['collegeIdCardNumber'];
};
const schema = yup.object({
  collegeIdCardNumber: yup.string().label('College ID Card Number').stripEmptyString(),
});

const Milestone01: React.FC<MilestoneProps> = ({ bottomRef }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [collegeImage, setCollegeImage] = React.useState(undefined);
  const [isLoading, setIsLoading] = React.useState(false);
  const uploadFile = useUploadFile();
  const updateCollegeIDCard = useKYSCollegeIDCardUpdate();
  const form = useForm<FormInputs>({ resolver: yupResolver(schema) });
  const inputs = React.useRef<Record<keyof FormInputs, TextInput | null>>({
    collegeIdCardNumber: null,
  });

  const handleImagePicking = async () => {
    const image = await ImagePicker.openPicker({
      width: 1094,
      height: 564,
      cropping: false,
      useFrontCamera: true,
    });
    image.filename = String(image.path).split('/')[String(image.path).split('/').length - 1];
    console.log(image);
    setCollegeImage(image);
  };

  const handleCameraPicking = async () => {
    const image = await ImagePicker.openCamera({
      cropping: false,
      useFrontCamera: true,
    });
    image.filename = String(image.path).split('/')[String(image.path).split('/').length - 1];
    console.log(image);
    setCollegeImage(image);
  };
  const handleFormSubmission = async () => {
    setIsLoading(true);
    try {
      console.log(collegeImage);
      const collegeIDCardFormData = new FormData();
      collegeIDCardFormData.append('file', {
        uri: collegeImage.path,
        type: collegeImage.mime,
        name: collegeImage.filename,
        width: collegeImage.width,
        height: collegeImage.height,
      });
      const uploadedCollegeIdCard = await uploadFile.mutateAsync(collegeIDCardFormData);
      await updateCollegeIDCard.mutateAsync({
        collegeIdCardNumber: form.getValues('collegeIdCardNumber'),
        collegeIdCardDocument: uploadedCollegeIdCard._id,
      });
      console.log(uploadedCollegeIdCard);
      Toast.show({
        text1: 'Card Details Uploaded',
        type: 'success',
      });
      bottomRef.current?.close();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <View style={{ height: '100%', zIndex: 50 }}>
      <Typography
        color="dark"
        fontStyle="semibold"
        fontSize={18}
        style={{ textAlign: 'center' }}
        mb={8}
      >
        Milestone 01
      </Typography>
      <HorizontalRule />
      <Typography
        color="dark"
        fontStyle="medium"
        style={{ textAlign: 'center', marginVertical: 20 }}
      >
        Enter your College Details
      </Typography>

      <View style={{ width: '90%', alignSelf: 'center' }}>
        <FormProvider {...form}>
          <ControlledFloatingTextInput
            name="collegeIdCardNumber"
            value="collegeIdCardNumber"
            ref={(el) => {
              inputs.current.collegeIdCardNumber = el;
            }}
            label="Identity Number"
            right={
              <TouchableOpacity>
                <Typography color="dark" mr={20} fontSize={13}>
                  change
                </Typography>
              </TouchableOpacity>
            }
          />
        </FormProvider>
        <Typography color="lightText">Image of above identity</Typography>
        <View style={styles.flexItem}>
          <ThemeChangeItem
            onPress={handleCameraPicking}
            width={150}
            description="Camera"
            descriptionColor="dark"
            marginLeft={0}
            marginVertical={0}
          />
          <ThemeChangeItem
            width={180}
            description="Upload Image"
            descriptionColor="dark"
            marginLeft={0}
            marginVertical={0}
            onPress={handleImagePicking}
          />
        </View>
        <Image
          source={{ uri: collegeImage?.path }}
          style={{ width: 200, height: 200, alignSelf: 'center', marginVertical: 10 }}
        />
      </View>
      <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
        <Button
          buttonWidth="95%"
          isLoading={isLoading}
          iconColor="white"
          textColor="dark"
          onPress={handleFormSubmission}
        >
          Complete
        </Button>
      </View>
    </View>
  );
};

export default Milestone01;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      height: 150,
      width: 150,
      borderRadius: theme.rounded.lg,
    },
  });
