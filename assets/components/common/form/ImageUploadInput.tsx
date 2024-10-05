import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker, { Image as CropImage } from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import ReactNativeModal from 'react-native-modal';
import Color from 'color';
import type { ExtendedTheme } from '../../../types';
import Typography from '../Typography';

interface ImageUploadInputProps {
  name: string;
  label?: string;
  width?: number;
  height?: number;
  cropping?: boolean;
  useFrontCamera?: boolean;
  preview?: string;
}

const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  name,
  label,
  width = 1024,
  height = 569,
  cropping = true,
  useFrontCamera = false,
  preview,
}) => {
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
  const toggle = React.useCallback(() => setOpen((v) => !v), []);

  const handleImagePicker = async (mode: 'camera' | 'local') => {
    try {
      let image: CropImage;

      if (mode === 'camera') {
        image = await ImagePicker.openCamera({
          width,
          height,
          cropping,
          useFrontCamera,
        });
      } else {
        image = await ImagePicker.openPicker({
          width,
          height,
          cropping,
        });
      }

      image.filename = String(image.path).split('/')[String(image.path).split('/').length - 1];

      controller.field.onChange(image);
    } catch (err) {
      if (err instanceof Error) {
        Toast.show({
          type: 'error',
          text1: 'Oops!',
          text2: err?.message ?? 'Error',
        });
      }
    } finally {
      toggle();
    }
  };

  return (
    <View>
      {label ? (
        <Typography mb={theme.spacing.sm} color="border">
          {label}
        </Typography>
      ) : null}

      <TouchableOpacity
        style={[styles.card, controller.fieldState.error?.message ? styles.cardError : null]}
        onPress={toggle}
      >
        {value?.path ? (
          <Image source={{ uri: value?.path }} style={styles.image} />
        ) : preview ? (
          <Image source={{ uri: preview }} style={styles.image} />
        ) : (
          <Icon name="cloud-upload" size={48} color={theme.colors.primary} />
        )}
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={open}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
        onSwipeComplete={toggle}
        style={styles.modal}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => handleImagePicker('camera')} style={styles.button}>
            <Icon name="camera" size={40} color={theme.colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleImagePicker('local')} style={styles.button}>
            <Icon name="file-upload" size={40} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </ReactNativeModal>

      <Typography color="error">{controller.fieldState.error?.message}</Typography>
    </View>
  );
};

export default ImageUploadInput;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      width: '100%',
      height: 200,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardError: {
      borderWidth: 1,
      borderColor: theme.colors.error,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: theme.rounded.card,
    },
    modal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    container: {
      padding: theme.spacing.lg,
      backgroundColor: theme.colors.lightBackground,
      borderTopLeftRadius: theme.rounded.card,
      borderTopRightRadius: theme.rounded.card,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    button: {
      backgroundColor: Color(theme.colors.background).alpha(0.4).rgb().toString(),
      padding: theme.spacing.lg,
      borderRadius: theme.spacing.lg,
    },
  });
