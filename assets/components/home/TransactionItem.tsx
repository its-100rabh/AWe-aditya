import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';

const TransactionItem = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View
      style={{
        backgroundColor: '#EFEFEF',
        padding: 8,
        borderRadius: 20,
        marginTop: 10,
        paddingRight: 'auto',
      }}
    >
      <View style={[styles.flexItem, styles.container]}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.notificationColorItem} />
            <Typography
              color="dark"
              fontStyle="medium"
              fontSize={18}
              style={{ marginLeft: 10, paddingTop: 7, marginRight: 'auto' }}
            >
              Travelistan
            </Typography>
            <View
              style={{
                backgroundColor: '#E6E6E6',
                borderRadius: 40,
                paddingBottom: 10,
                paddingTop: 10,
                paddingLeft: 10,
                paddingRight: 10,
                flexDirection: 'row',
                marginRight: 'auto',
                marginStart: 'auto',
                marginEnd: 'auto',
              }}
            >
              <MaterialCommunityIcons
                name="folder-download-outline"
                size={18}
                style={{ justifyContent: 'space-between' }}
              />
              <Typography
                color="dark"
                fontStyle="medium"
                fontSize={12}
                style={{ marginLeft: 10, marginRight: 'auto' }}
              >
                Receipt
              </Typography>
            </View>
          </View>
          <Typography color="dark" style={{ marginLeft: 40, marginTop: 10 }}>
            ₹ 720.00
          </Typography>
          <View style={{ flexDirection: 'row' }}>
            <Typography color="dark" style={{ marginLeft: 40 }}>
              <Text style={{ color: '#808080' }}>Total Bill:</Text> ₹ 840.60
            </Typography>
            <Typography color="dark" style={{ marginRight: 20, marginLeft: 20 }}>
              <Text style={{ color: '#808080' }}>Discount:</Text> 18%
            </Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionItem;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: 10,
      width: '90%',
    },
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    notificationColorItem: {
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      height: heightPercentageToDP(2.8),
      width: heightPercentageToDP(2.8),
      marginLeft: 10,
      marginTop: 10,
    },
  });
