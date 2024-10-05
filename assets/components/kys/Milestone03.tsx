import { StyleSheet, View, Image, Platform } from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { useTheme } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import Typography from '../common/Typography';
import ThemeChangeItem from '../common/ThemeChangeItem';
import HorizontalRule from '../common/HorizontalRule';
import Button from '../common/Button';
import type { ExtendedTheme } from '../../types';
import AvatarImage from '../../assets/images/Kys-Selfie.png';
import { useUpdateStudent } from '../../api/queries/student.queries';
import { useUploadFile } from '../../api/queries/index.queries';
import { navigate } from '../../utils/navigation';

const Milestone03 = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [currentImage, setCurrentImage] = React.useState<any>();
  const [isLoading, setIsLoading] = React.useState(false);
  const updateStudent = useUpdateStudent();
  const uploadFile = useUploadFile();
  const handleImagePicking = async () => {
    const image = await ImagePicker.openCamera({
      cropping: false,
      useFrontCamera: true,
    });
    image.filename = String(image.path).split('/')[String(image.path).split('/').length - 1];
    console.log(image);
    setCurrentImage(image);
  };
  const handleImageUpload = async () => {
    try {
      console.log('ere');
      setIsLoading(true);
      const imageFormData = new FormData();
      imageFormData.append('file', {
        uri: currentImage?.path,
        type: currentImage.mime,
        name: currentImage.filename,
        width: currentImage.width,
        height: currentImage.height,
      });
      const uploadedImage = await uploadFile.mutateAsync(imageFormData);
      await updateStudent.mutateAsync(
        { selfie: uploadedImage._id },
        {
          onSuccess: () => {
            Toast.show({
              text1: 'Selfie Uploaded',
              type: 'success',
            });
            navigate('HomeTab');
          },
          onError: () => {
            Toast.show({
              text1: 'Error in Uploading Selfie',
              type: 'error',
            });
          },
        }
      );
      console.log('s');
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <View>
      <Typography
        color="dark"
        fontStyle="semibold"
        fontSize={18}
        style={{ textAlign: 'center' }}
        mb={8}
      >
        Milestone 03
      </Typography>
      <HorizontalRule />
      <Typography color="dark" style={{ textAlign: 'center', marginVertical: 20 }}>
        Verification Image
      </Typography>
      <ThemeChangeItem
        label="KYS User Image"
        marginVertical={10}
        marginLeft={0}
        description="Take a selfie"
        descriptionColor="dark"
        onPress={handleImagePicking}
      />
      <View style={{ width: '90%', alignSelf: 'center', paddingTop: 50 }}>
        <Typography color="lightText">Copy the image shown below</Typography>
        <View style={styles.flexItem}>
          <Image source={AvatarImage} style={styles.image} />
          <Image
            source={currentImage ? { uri: currentImage.path } : AvatarImage}
            style={styles.image}
          />
        </View>
        <View style={styles.flexItem}>
          <Button
            backgroundColor="primary"
            textColor="dark"
            buttonWidth={120}
            fontSize={16}
            isLoading={isLoading}
            onPress={handleImageUpload}
          >
            Confirm
          </Button>
          <Button
            backgroundColor="white"
            textColor="dark"
            buttonWidth={120}
            fontSize={16}
            onPress={handleImagePicking}
          >
            Retake Photo
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Milestone03;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      height: 200,
      width: 150,
      borderRadius: theme.rounded.lg,
    },
  });
