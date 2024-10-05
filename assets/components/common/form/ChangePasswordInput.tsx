import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../../types';
import Typography from '../Typography';

export interface ChangePasswordInputProps {
  navigation: any;
}

const ChangePasswordInput: React.FC<ChangePasswordInputProps> = ({ navigation }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Typography color="darkText">Password</Typography>
      <View style={styles.textInputContainer}>
        <TextInput
          selectionColor={theme.colors.dark}
          value=""
          editable={false}
          secureTextEntry
          style={[styles.input, { textAlign: 'left' }]}
          placeholderTextColor={theme.colors.white}
        />
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Typography style={{ color: '#0071E3', marginRight: 20, fontSize: 10 }}>
            change
          </Typography>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePasswordInput;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      width: '90%',
      alignSelf: 'center',
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.transparent,
      borderWidth: 1,
      borderRadius: 99,
      backgroundColor: theme.colors.inputBackground,
    },
    text: {
      color: theme.colors.textLabel,
      // fontStyle: theme.fonts.medium,
      // fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.medium,
      marginBottom: theme.spacing.sm,
    },
    input: {
      flex: 1,
      ...theme.fonts.regular,
      color: theme.colors.dark,
      // color: theme.colors.dark,
      fontSize: theme.fontSize.large,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
      margin: 0,
      borderWidth: 0,
      textDecorationLine: 'none',
    },
  });
