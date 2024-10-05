import { StyleSheet, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';
import Typography from '../common/Typography';

const BottomInfoText: React.FC = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Icon name="alert-circle-outline" color={theme.colors.white} size={20} />
      <Typography> Enter your Govt. registered Legal name.</Typography>
    </View>
  );
};

export default BottomInfoText;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
