import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import RightIconPointer from '../../assets/images/RightIconPointer.png';
import LeftIconPointer from '../../assets/images/LeftIconPointer.png';

const ProgressBar: React.FC = () => {
  const theme = useTheme();
  const [width, setWidth] = React.useState('66.67%');
  const styles = React.useMemo(() => createStyles(theme, width), [theme, width]);
  return (
    <View style={styles.container}>
      <View style={styles.fill} />
      <View style={styles.textContainer}>
        {/* <Image source={LeftIconPointer} style={styles.image} /> */}
        <Typography>{width}</Typography>

        {/* <Image source={RightIconPointer} style={styles.image} /> */}
      </View>
    </View>
  );
};

export default ProgressBar;

const createStyles = (theme: ExtendedTheme, width: string) =>
  StyleSheet.create({
    container: {
      borderRadius: theme.rounded.lg,
      width: '90%',
      alignSelf: 'center',
      position: 'relative',
      backgroundColor: theme.colors.white,
      paddingVertical: 25,
      borderColor: theme.colors.dark,
      borderWidth: 1.5,
    },
    fill: {
      position: 'absolute',
      width,
      backgroundColor: '#ED8063',
      paddingVertical: 25,
      borderTopLeftRadius: theme.rounded.lg,
      borderBottomLeftRadius: theme.rounded.lg,
      borderTopRightRadius: width === '100%' ? theme.rounded.lg : 0,
      borderBottomRightRadius: width === '100%' ? theme.rounded.lg : 0,
    },
    textContainer: {
      position: 'absolute',
      alignSelf: 'center',
      top: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
    },
  });
