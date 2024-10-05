import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { useStudent } from '../../store/selector';
import Typography from '../common/Typography';

const ScoinDetails = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  return (
    <View style={[styles.flexItem, styles.container]}>
      <View style={[styles.flexItem, styles.itemContainer]}>
        <Typography color="dark">{student.scoins}</Typography>
        <Typography color="darkText">scoins</Typography>
      </View>
      <View style={[styles.flexItem, styles.itemContainer]}>
        <Typography color="dark" fontSize={16}>
          ₹ 0
        </Typography>
        <Typography color="darkText">saved</Typography>
      </View>
    </View>
  );
};

export default ScoinDetails;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
    },
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    itemContainer: {
      backgroundColor: '#E4E4E4',
      borderRadius: 20,
      paddingHorizontal: 10,
      width: '48%',
      paddingVertical: 8,
    },
  });
