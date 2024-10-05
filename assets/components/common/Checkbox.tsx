import { TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface CheckboxProps {
  onChange?: () => void;
  isChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ onChange, isChecked }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onChange}>
      {isChecked ? (
        <Icon name="circle-outline" color={theme.colors.dark} size={30} />
      ) : (
        <Icon name="check-circle" color={theme.colors.dark} size={30} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
