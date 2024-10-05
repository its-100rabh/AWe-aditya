import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { useStudent } from '../../store/selector';

interface LocationCardProps {}

const LocationCard: React.FC<LocationCardProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const [student] = useStudent();

  return (
    <View style={styles.container}>
      <View style={styles.iconViewCircle}>
        <View style={styles.iconView}>
          <Icon name="google-maps" size={24} color={theme.colors.background} />
        </View>
      </View>

      <TouchableOpacity style={styles.textView}>
        <View style={styles.textInnerView}>
          <Typography fontSize="small" fontStyle="regular">
            {student?.address?.locality}
          </Typography>
          {/* <Icon name="chevron-down" size={16} color={theme.colors.text} /> */}
        </View>
        <Typography fontSize="small" fontStyle="medium">
          {student?.address?.city}
        </Typography>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.qr}>
        <Icon name="qrcode" size={32} color={theme.colors.text} />
      </TouchableOpacity> */}
    </View>
  );
};

export default LocationCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconViewCircle: {
      backgroundColor: theme.colors.background,
      padding: 2,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 24,
    },
    iconView: {
      backgroundColor: theme.colors.text,
      padding: theme.spacing.xs,
      borderRadius: 20,
    },
    textView: {
      marginLeft: theme.spacing.sm,
      flex: 1,
    },
    textInnerView: {
      flexDirection: 'row',
    },
    qr: {
      marginLeft: 'auto',
    },
  });
