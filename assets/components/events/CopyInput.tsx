import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';

interface CopyInputProps {
  children: string;
}

const CopyInput: React.FC<CopyInputProps> = ({ children }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const handleCopy = () => {
    Clipboard.setString(children);
    Toast.show({
      type: 'success',
      text1: 'Copied to your clipboard!',
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleCopy}>
      <Typography style={styles.text}>{children}</Typography>

      <Icon name="content-copy" size={24} color={theme.colors.primary} />
    </TouchableOpacity>
  );
};

export default CopyInput;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.colors.lightBackground,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      borderRadius: theme.rounded.card,
      marginBottom: theme.spacing.md,
    },
    text: {
      flex: 1,
    },
  });
