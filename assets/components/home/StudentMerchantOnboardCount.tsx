import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import ParsedText from 'react-native-parsed-text';
import type { ExtendedTheme } from '../../types';
import Card from '../common/Card';
import Typography from '../common/Typography';

import genieImage from '../../assets/images/genie.png';

interface StudentMerchantOnboardCountProps {}

const StudentMerchantOnboardCount: React.FC<StudentMerchantOnboardCountProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <Card containerStyle={styles.container} style={styles.card}>
      <LinearGradient colors={['#7139CE', '#5D138E']} style={styles.gradient}>
        <View style={styles.content}>
          <Image source={genieImage} style={styles.image} />
          <View style={styles.textContent}>
            <Typography fontStyle="medium" fontSize={24} align="right">
              Students helped us
            </Typography>
            <Typography fontStyle="medium" fontSize={24} align="right">
              onboard
            </Typography>

            <ParsedText style={styles.text} parse={[{ pattern: /^[0]+/, style: styles.textZero }]}>
              00000238
            </ParsedText>

            <Typography fontStyle="medium" fontSize={24} align="right">
              Merchants across
            </Typography>
            <Typography fontStyle="medium" fontSize={24} align="right">
              Nation
            </Typography>
          </View>
        </View>
      </LinearGradient>
    </Card>
  );
};

export default StudentMerchantOnboardCount;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    card: {
      overflow: 'hidden',
      padding: 0,
    },
    gradient: {
      padding: 0,
    },
    content: {
      padding: theme.spacing.md,
      paddingBottom: wp(50),
    },
    image: {
      width: '100%',
      height: wp(90),
      resizeMode: 'contain',
      position: 'absolute',
      bottom: 0,
      left: -wp(8),
    },
    textContent: {
      alignSelf: 'flex-end',
    },
    text: {
      ...theme.fonts.medium,
      color: theme.colors.text,
      fontSize: 32,
      textAlign: 'right',
    },

    textZero: {
      color: '#6121AD',
    },
  });
