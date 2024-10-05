import React from 'react';
import { useController, useFormContext, useWatch } from 'react-hook-form';
import { TextInput } from 'react-native';
import MaskedTextInput, { MaskedTextInputProps } from '../MaskedInput';

export type ControlledMaskedInputProps = Omit<MaskedTextInputProps, 'name'> & {
  name: string;
  defaultValue?: string;
  onNext?: () => void;
};

const ControlledMaskedInput = React.forwardRef<TextInput, ControlledMaskedInputProps>(
  ({ name, defaultValue = '', onNext, ...props }, ref) => {
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
      <MaskedTextInput
        {...props}
        name={name}
        value={(typeof value === 'number' ? String(value) : value) ?? controller.field.value}
        onChangeText={controller.field.onChange}
        onSubmitEditing={onNext}
        blurOnSubmit={onNext === undefined}
        ref={ref}
        error={controller.fieldState.error?.message}
      />
    );
  }
);

ControlledMaskedInput.displayName = 'ControlledMaskedInput';

export default ControlledMaskedInput;
