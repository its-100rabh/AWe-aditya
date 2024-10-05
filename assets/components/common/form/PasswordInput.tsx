import React from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../../types';
import { ControlledFloatingTextInputProps } from './ControlledFloatingTextInput';
import ControlledFloatingTextInputPassword from './ControlledFloatingTextInputPassword';
import eyeIcon from '../../../assets/images/eye.png';
import eyeSlashIcon from '../../../assets/images/eye-slash.png';

export type PasswordInputProps = Omit<ControlledFloatingTextInputProps, 'secureTextEntry'> & {
  showEyeIcon?: boolean;
};

const PasswordInput = React.forwardRef<TextInput, PasswordInputProps>(
  ({ showEyeIcon = true, ...props }, ref) => {
    const theme = useTheme();
    const styles = React.useMemo(() => createStyles(theme), [theme]);
    const [isVisible, setVisible] = React.useState(false);

    const toggle = React.useCallback(() => {
      setVisible((value) => !value);
    }, [isVisible]);

    return (
      <View style={styles.container}>
        <ControlledFloatingTextInputPassword
          ref={ref}
          {...props}
          secureTextEntry={!isVisible}
          containerStyle={styles.input}
          right={
            showEyeIcon && (
              <TouchableOpacity onPress={toggle} style={styles.button}>
                <Image
                  source={isVisible ? eyeSlashIcon : eyeIcon}
                  style={{ width: 24, height: 24, tintColor: isVisible ? '#131313' : '#131313' }}
                />
              </TouchableOpacity>
            )
          }
        />
      </View>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

export default PasswordInput;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      flex: 1,
    },
    button: {
      paddingHorizontal: theme.spacing.md,
      marginLeft: theme.spacing.md,
    },
  });
