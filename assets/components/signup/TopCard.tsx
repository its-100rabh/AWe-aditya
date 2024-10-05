import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import type { ExtendedTheme } from '../../types';
import Logo from '../../assets/images/logo.png';

interface TopCardProps {
  source?: ImageSourcePropType;
}

const TopCard: React.FC<TopCardProps> = ({ source }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.card}>
      <Image source={source ?? Logo} style={styles.logo} />
    </View>
  );
};

export default TopCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      width: '100%',
      height: hp(75),
      marginBottom: theme.spacing.lg,
      overflow: 'hidden',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      height: '90%',
    },
  });
