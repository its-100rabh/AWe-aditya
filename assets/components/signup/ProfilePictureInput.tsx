import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import ImagePicker, { Image as ImagePickerImage } from 'react-native-image-crop-picker';
import ReactNativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';

interface ProfilePictureInputProps {
  name: string;
}

const ProfilePictureInput: React.FC<ProfilePictureInputProps> = ({ name }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const form = useFormContext();

  const controller = useController({
    control: form.control,
    name,
    defaultValue: form.getValues(name) ?? undefined,
  });

  const value = useWatch({
    control: form.control,
    name,
    defaultValue: form.getValues(name) ?? undefined,
  });

  const [open, setOpen] = React.useState(false);
  const toggle = React.useCallback(() => {
    setOpen((o) => !o);
  }, [setOpen]);

  const handleOpen = async (mode: 'camera' | 'upload') => {
    try {
      let image: ImagePickerImage;

      if (mode === 'camera') {
        image = await ImagePicker.openCamera({
          width: 1024,
          height: 1024,
          cropping: true,
          useFrontCamera: true,
        });
      } else {
        image = await ImagePicker.openPicker({
          width: 1024,
          height: 1024,
          cropping: true,
        });
      }

      image.filename = String(image.path).split('/')[String(image.path).split('/').length - 1];

      controller.field.onChange(image);
      toggle();
    } catch (err) {
      if (err instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: err?.message ?? 'Error',
        });
      }
      toggle();
    }
  };

  return (
    <View>
      <TouchableOpacity style={styles.pictureButton} onPress={toggle}>
        {value?.path ? (
          <Image source={{ uri: value?.path }} style={styles.image} />
        ) : (
          <Icon name="upload" size={24} color={theme.colors.primary} />
        )}
      </TouchableOpacity>

      <ReactNativeModal isVisible={open} onBackButtonPress={toggle} onBackdropPress={toggle}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => handleOpen('camera')}>
            <Icon name="camera" size={24} color={theme.colors.primary} />
            <Typography style={styles.buttonText}>Camera</Typography>
          </TouchableOpacity>

          <Typography style={styles.or}>or</Typography>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => handleOpen('upload')}>
            <Icon name="upload" size={24} color={theme.colors.primary} />
            <Typography style={styles.buttonText}>Upload</Typography>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default ProfilePictureInput;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    pictureButton: {
      backgroundColor: theme.colors.lightBackground,
      width: 160,
      height: 160,
      borderRadius: 80,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    content: {
      backgroundColor: theme.colors.background,
      margin: theme.spacing.md,
      borderColor: theme.colors.text,
      borderWidth: 1,
      padding: theme.spacing.md,
      borderRadius: 20,
    },
    buttonContainer: {
      backgroundColor: theme.colors.lightBackground,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      borderRadius: 12,
      flexDirection: 'row',
    },
    buttonText: {
      marginHorizontal: theme.spacing.sm,
    },
    or: {
      marginVertical: theme.spacing.md,
      textAlign: 'center',
      color: theme.colors.border,
    },
    image: {
      width: 160,
      height: 160,
      borderRadius: 80,
    },
  });
