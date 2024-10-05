import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import { useStudent } from '../../store/selector';
import Typography from '../common/Typography';
import VirtualIDImage from '../../assets/svg/home/VirtualID';
import Button from '../common/Button';

interface UserCardProps {
  setShowQr: (data: boolean) => void;
  setShowKnowMore: () => void;
}

const VirtualID: React.FC<UserCardProps> = ({ setShowQr, setShowKnowMore }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  return (
    <View style={styles.container}>
      <VirtualIDImage />
      <Typography color="darkText" fontSize={23} style={{ textAlign: 'center' }}>
        “You are one of a kind.”
      </Typography>
      <Typography color="dark" fontSize="small" fontStyle="regular">
        Your unique ID is uniquely yours. Use your QR as an identity anywhere. Your physical
        credit-identity card is coming soon!
      </Typography>
      <View style={styles.flexItem}>
        <Button
          backgroundColor="dark"
          textColor="white"
          buttonWidth="auto"
          onPress={setShowKnowMore}
        >
          {'  '}
          Know More {'  '}
        </Button>
        <Button
          backgroundColor="primary"
          textColor="dark"
          buttonWidth="auto"
          onPress={() => setShowQr(true)}
        >
          View QR Code
        </Button>
      </View>
    </View>
  );
};

export default VirtualID;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      overflow: 'hidden',
      position: 'relative',
      marginBottom: theme.spacing.lg,
      backgroundColor: '#EFEFEF',
      paddingHorizontal: theme.spacing.md,
      borderRadius: 16,
      width: '100%',
    },
    linear: {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    imageBackground: {
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      backgroundColor: theme.colors.primary,
      position: 'absolute',
      zIndex: 2,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.45,
    },
    content: {
      position: 'relative',
      padding: theme.spacing.lg,
      paddingVertical: theme.spacing.xxl,
      zIndex: 3,
    },
    overlay: {
      backgroundColor: theme.colors.primary,
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.1,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
    scoins: {
      marginBottom: theme.spacing.lg,
    },
    name: {
      marginVertical: theme.spacing.md,
    },
    icons: {
      position: 'absolute',
      top: theme.spacing.xxl,
      right: theme.spacing.md,
      zIndex: 1,
    },
    flexItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    iconContainer: {
      width: '30%',
    },
    topItemContainer: {
      marginVertical: 30,
    },
  });
