import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Color from 'color';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import ScontoLogo from '../../assets/svg/ScontoLogo';
import { useStudent } from '../../store/selector';

interface ScoinsCardProps {
  style?: StyleProp<ViewStyle>;
}

const ScoinsCard: React.FC<ScoinsCardProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  return (
    <View style={[styles.container, style]}>
      <View style={styles.logoContainer}>
        <ScontoLogo />
      </View>
      <Typography fontSize={16} fontStyle="bold" style={styles.text}>
        {student?.scoins ?? 0}
      </Typography>
    </View>
  );
};

export default ScoinsCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
      alignSelf: 'flex-start',
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
      borderTopRightRadius: 15,
      borderBottomRightRadius: 15,
      paddingRight: theme.spacing.sm,
    },
    logoContainer: {
      backgroundColor: theme.colors.text,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
      transform: [{ scale: 1 }],
      padding: 4,
    },
    text: {
      paddingLeft: 10,
    },
  });
