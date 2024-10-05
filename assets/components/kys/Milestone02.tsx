import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTheme } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Typography from '../common/Typography';
import HorizontalRule from '../common/HorizontalRule';
import Button from '../common/Button';
import type { ExtendedTheme } from '../../types';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';

const Milestone02 = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const schema = yup.object({
    aadhaarNumber: yup
      .string()
      .required()
      .label('Aadhaar Number')
      .length(12, 'Enter a valid 12 digit Aadhaar Number')
      .matches(/^\d+$/, 'Aadhaar Number must be a number'),
    otp: yup.string().required(),
  });

  type FormInputs = {
    aadhaarNumber1: string;
    aadhaarNumber2: string;
    aadhaarNumbe3: string;
    aadhaarNumbe4: string;
    otp: string;
  };

  const form = useForm<FormInputs>({ resolver: yupResolver(schema) });

  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({ value, cellCount: 6 });
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const handleImagePicking = async () => {
    const image = await ImagePicker.openCamera({
      cropping: false,
      useFrontCamera: true,
    });
    console.log(image);
  };
  return (
    <View style={{ zIndex: 30 }}>
      <Typography
        color="dark"
        fontStyle="semibold"
        fontSize={18}
        style={{ textAlign: 'center' }}
        mb={8}
      >
        Milestone 02
      </Typography>
      <HorizontalRule />
      <Typography color="dark" style={{ textAlign: 'center', marginVertical: 20 }}>
        Enter your Aadhar Number
      </Typography>
      <View style={{ width: '90%', alignSelf: 'center' }}>
        <FormProvider {...form}>
          <Typography color="darkText">Aadhar Number</Typography>
          <View style={styles.flexItem}>
            <ControlledFloatingTextInput
              keyboardType="number-pad"
              name="aadhaarNumber1"
              containerStyle={{ width: 80 }}
            />
            <ControlledFloatingTextInput
              keyboardType="number-pad"
              name="aadhaarNumber2"
              containerStyle={{ width: 80 }}
            />
            <ControlledFloatingTextInput
              keyboardType="number-pad"
              name="aadhaarNumber3"
              containerStyle={{ width: 80 }}
            />
            <ControlledFloatingTextInput
              keyboardType="number-pad"
              name="aadhaarNumber4"
              containerStyle={{ width: 80 }}
            />
          </View>

          <Button
            buttonWidth="auto"
            textColor="dark"
            backgroundColor="primary"
            style={{ alignSelf: 'flex-end' }}
          >
            Send Otp
          </Button>
          <Typography color="darkText">Enter OTP</Typography>
          <CodeField
            ref={ref}
            {...propss}
            value={value}
            onChangeText={setValue}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell, { fontSize: 20 }]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
          <Button marginVertical={50} textColor="dark">
            Verify Aadhar Number
          </Button>
        </FormProvider>
      </View>
    </View>
  );
};

export default Milestone02;

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
    codeFieldRoot: {
      marginTop: 20,
      width: '100%',
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    cell: {
      width: '15%',
      height: '200%',
      fontSize: 24,
      borderRadius: 60,
      textAlign: 'center',
      color: 'black',
      textAlignVertical: 'center',
      backgroundColor: '#EFEFEF',
    },
    focusCell: {
      borderColor: '#000',
    },
  });
