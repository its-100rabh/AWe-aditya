import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from './Typography';

export interface ChangePasswordInputProps {
  left?: any;
  right?: any;
  label?: string;
  descriptionColor?: keyof ExtendedTheme['colors'];
  description: string;
  marginLeft?: number;
  marginVertical?: number;
  onPress?: () => void;
  width?: string | number;
}

const ThemeChangeItem: React.FC<ChangePasswordInputProps> = ({
  left,
  right,
  description,
  descriptionColor = 'darkText',
  label,
  marginLeft = -30,
  marginVertical = 30,
  onPress,
  width = '90%',
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={[styles.container, { marginVertical, width }]}>
      <Typography color="darkText">{label}</Typography>
      <TouchableOpacity onPress={onPress && onPress}>
        <View style={styles.textInputContainer}>
          <View>{left}</View>
          <View style={{ marginLeft }}>
            <Typography color={descriptionColor} fontStyle="regular">
              {description}
            </Typography>
          </View>
          <View>{right}</View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeChangeItem;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      alignSelf: 'center',
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: theme.colors.transparent,
      borderWidth: 1,
      borderRadius: 99,
      backgroundColor: theme.colors.inputBackground,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
    },
    text: {
      color: theme.colors.textLabel,
      // fontStyle: theme.fonts.medium,
      // fontFamily: theme.fonts.medium,
      fontSize: theme.fontSize.medium,
      marginBottom: theme.spacing.sm,
    },
  });
