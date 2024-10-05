import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import KYSStatus from './KYSStatus';
import Asterisk from '../../assets/svg/Asterisk';
import { useKYSDetails } from '../../api/queries/kys.queries';
import { useStudent } from '../../store/selector';
import KysImage from '../../assets/svg/KysImage';
import Button from '../common/Button';
import { navigate } from '../../utils/navigation';
import KysHomeImage from '../../assets/images/KysHomeImage.png';

interface KYSCardProps {
  style?: StyleProp<ViewStyle>;
}

const KYSCard: React.FC<KYSCardProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const kys = useKYSDetails();
  const [student] = useStudent();

  return (
    <>
      <View style={[styles.topcontainer, style]}>
        <Image source={KysHomeImage} style={{ width: 338, height: 290 }} />
      </View>
      <View style={[styles.bottomcontainer, style]}>
        <Typography
          fontSize={23}
          fontStyle="goteskDisplayMedium"
          numberOfLines={1}
          color="dark"
          style={{ textAlign: 'center' }}
        >
          Complete KYS Verification
        </Typography>
        {!student?.isVerified ? (
          <Typography
            color="dark"
            style={{ textAlign: 'center' }}
            fontSize="small"
            fontStyle="medium"
            mt={24}
            mb={12}
          >
            {' Complete your KYS to avail unexpected and exciting discount.'}
          </Typography>
        ) : null}
        <Button textColor="dark" fontSize={15} onPress={() => navigate('KYSVerification')}>
          Complete Your KYS Verification
        </Button>
      </View>
    </>
  );
};

export default KYSCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    topcontainer: {
      backgroundColor: '#EFEFEF',
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: theme.spacing.sm,
      padding: theme.spacing.lg,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    bottomcontainer: {
      backgroundColor: '#EFEFEF',
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: theme.spacing.sm,
      padding: theme.spacing.lg,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    heading: {
      lineHeight: 50,
    },
  });
