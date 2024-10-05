import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import ArrowLeft from '../../assets/svg/home/ArrowLeft';
import ArrowRightIcon from '../../assets/svg/home/ArrowRight';
import DescriptionImage from '../../assets/svg/home/DescriptionImage';
import Typography from '../common/Typography';

const Description = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View>
      <View style={styles.header}>
        <ArrowRightIcon />
        <Typography color="dark" mr={10} ml={10}>
          iam_dd x sconto
        </Typography>
        <ArrowLeft />
      </View>
      <DescriptionImage />
    </View>
  );
};

export default Description;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
