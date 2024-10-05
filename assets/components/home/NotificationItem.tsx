import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';

interface NotificationItemProps {
  title?: string;
  date?: string;
  message?: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  title = 'Travelistan',
  message = 'Get instant 50% discount on your food & beverages',
  date = '26.08 • 5:24 PM',
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={[styles.flexItem, styles.container]}>
      <View style={styles.notificationColorItem} />
      <View>
        <View style={styles.flexItem}>
          <Typography color="dark" fontStyle="medium" fontSize={15}>
            {title}
          </Typography>
          <Typography color="dark" fontStyle="medium" fontSize={15}>
            {date}
          </Typography>
        </View>
        <Typography color="dark" fontStyle="regular">
          {message}
        </Typography>
      </View>
    </View>
  );
};

export default NotificationItem;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '85%',
    },
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    notificationColorItem: {
      backgroundColor: theme.colors.primary,
      borderColor: theme.colors.dark,
      borderRadius: 50,
      borderWidth: 1,
      height: 50,
      width: 50,
      marginRight: 10,
    },
  });
