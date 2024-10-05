import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';

interface KnowmoreProps {
  cancelFunction: () => void;
}

const Knowmore: React.FC<KnowmoreProps> = ({ cancelFunction }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  return (
    <View style={styles.container}>
      <Typography align="center" fontSize={22}>
        What can you do with
      </Typography>
      <Typography align="center" fontSize={22}>
        this Qr?
      </Typography>
      <View style={styles.descriptionTextContainer}>
        <Typography align="left">
          1. Use as your unique identity 1. Use as your unique identity 1. Use as your unique
          identity 1. Use as your unique identity 1. Use as your unique identity 1. Use as your
          unique identity 1. Use as your unique identity 1. Use as your unique identity 1. Use as
          your unique identity 1. Use as your unique identity 1. Use as your unique identity 1. Use
          as your unique identity 1. Use as your unique identity 1. Use as your unique identity 1.
          Use as your unique identity 1. Use as your unique identity{' '}
        </Typography>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={cancelFunction}>
        <Typography
          align="center"
          style={{ textDecorationLine: 'underline', textDecorationStyle: 'solid' }}
        >
          dismiss
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default Knowmore;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000CC',
      paddingTop: 50,
    },
    descriptionTextContainer: {
      width: '80%',
      alignSelf: 'center',
      paddingTop: 50,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 100,
      alignSelf: 'center',
    },
  });
