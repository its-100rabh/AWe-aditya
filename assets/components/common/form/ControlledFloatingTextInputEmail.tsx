import { TextInput } from 'react-native';
import React from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import { FloatingTextInputProps } from '../FloatingTextInput';
import FloatingTextInputEmail from '../FloatingTextInputEmail';

export type ControlledFloatingTextInputProps = Omit<FloatingTextInputProps, 'name'> & {
  name: string;
  defaultValue?: string;
  onNext?: () => void;
  error?: string;
};

const ControlledFloatingTextInputEmail = React.forwardRef<
  TextInput,
  ControlledFloatingTextInputProps
>(({ name, defaultValue = '', onNext, error, maxLength, ...props }, ref) => {
  const form = useFormContext();

  const controller = useController({
    control: form.control,
    name,
    defaultValue: form.getValues(name) ?? defaultValue ?? '',
  });

  const value = useWatch({
    control: form.control,
    name,
    defaultValue: form.getValues(name) ?? defaultValue ?? '',
  });

  return (
    <FloatingTextInputEmail
      {...props}
      name={name}
      value={(typeof value === 'number' ? String(value) : value) ?? controller.field.value}
      onChangeText={controller.field.onChange}
      onSubmitEditing={onNext}
      blurOnSubmit={onNext === undefined}
      ref={ref}
      error={error ?? controller.fieldState.error?.message}
      maxLength={maxLength}
    />
  );
});

ControlledFloatingTextInputEmail.displayName = 'ControlledFloatingTextInputEmail';

export default ControlledFloatingTextInputEmail;
