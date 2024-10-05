import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';
import React, { useState } from 'react';
import Share from 'react-native-share';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { useTheme } from '@react-navigation/native';
import NewScontoLogo from '../../assets/svg/NewScontoLogo';
import Button from '../common/Button';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';
import { useStudent } from '../../store/selector';
import CloseIcon from '../../assets/svg/Qr/CloseIcon';
import MinimizeIcon from '../../assets/svg/Qr/MinimizeIcon';
import MaximizeIcon from '../../assets/svg/Qr/MaximizeIcon';
import NameOverlay from './NameOverlay';
import { navigate } from '../../utils/navigation';

interface QrCodeProps {
  setShowQrCode: (data: boolean) => void;
}

const QrCode: React.FC<QrCodeProps> = ({ setShowQrCode }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [student] = useStudent();
  const progress = useSharedValue(0);
  const leftValue = useSharedValue(-10);
  const widthValue = useSharedValue(9);
  const bottomValue = useSharedValue(75);
  const containerHeight = useSharedValue(450);
  const containerBottomPadding = useSharedValue(60);
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(progress.value, [0, 1], ['#000000CC', theme.colors.primary]),
  }));
  const animatedCodeBackgroundStyle = useAnimatedStyle(() => ({
    left: leftValue.value,
  }));
  const animatedMainCodeBackgroundStyle = useAnimatedStyle(() => ({
    height: containerHeight.value,
    width: `${widthValue.value * 10}%`,
    // width: interpolate(widthValue.value, [0, 1], ['90%', '100%']),
  }));
  const animatedDetailsText = useAnimatedStyle(() => ({
    bottom: bottomValue.value,
  }));

  const animatedCodeContainer = useAnimatedStyle(() => ({
    paddingBottom: containerBottomPadding.value,
  }));

  // console.log(leftValue.value);
  // console.log(progress.value);
  const handleScan = () => {
    navigate('Scan');
  };

  const handleShare = async () => {
    try {
      await Share.open({
        message: `Hey there! I've joined sconto. Use my referral code: ${student?.referralCode} to get more scoins.`,
        title: "Hey, I'm on Sconto!",
        url: 'https://sconto.ai/app',
        subject: 'Join Sconto',
      });
    } catch (error) {
      // Handle the error if the sharing fails
    }
  };
  const handleExpand = () => {
    leftValue.value = withTiming(leftValue.value === -10 ? 0 : -10, { duration: 2000 });
    progress.value = withTiming(progress.value === 0 ? 1 : 0, { duration: 2000 });
    widthValue.value = withTiming(widthValue.value === 9 ? 10 : 9, { duration: 2000 });
    bottomValue.value = withTiming(bottomValue.value === 55 ? 75 : 55, { duration: 2000 });
    containerHeight.value = withTiming(containerHeight.value === 450 ? 480 : 450, {
      duration: 2000,
    });
    containerBottomPadding.value = withTiming(containerBottomPadding.value === 60 ? 40 : 60, {
      duration: 2000,
    });
    setIsExpanded((prevValue) => !prevValue);
    //   // console.log(progress.value, leftValue.value);
    //   widthValue.value = withSpring(widthValue.value === 0 ? 1 : 0);
    //   // (leftValue.value = 0);
    //   // console.log(progress.value);
  };
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View style={{ alignSelf: 'center', marginTop: 0, marginBottom: 30, zIndex: 10 }}>
        <NewScontoLogo color={isExpanded ? theme.colors.dark : 'white'} />
      </View>
      <Animated.View style={[styles.mainContainer, animatedMainCodeBackgroundStyle]}>
        <Animated.View style={[styles.codeAbsoluteContainer, animatedCodeBackgroundStyle]}>
          <Animated.View style={[styles.codeContainer, animatedCodeContainer]}>
            <TouchableOpacity style={styles.maximizeIcon} onPress={handleExpand}>
              {!isExpanded ? <MaximizeIcon /> : <MinimizeIcon />}
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setShowQrCode(false)}>
              <CloseIcon />
            </TouchableOpacity>
            <View style={styles.codeTopBackground} />
            <View style={{ alignSelf: 'center' }}>
              <QRCode
                value={student?.scontoId}
                size={widthPercentageToDP(60)}
                backgroundColor={theme.colors.primary}
              />
            </View>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.detailsText, animatedDetailsText]}>
          <Typography
            color="dark"
            fontStyle="semibold"
            style={[styles.centerText, styles.textMargin]}
          >{`${student.firstName} ${student.lastName ? student.lastName : ''}`}</Typography>
          <Typography color="dark" style={styles.centerText}>
            {student.scontoId}
          </Typography>
        </Animated.View>
        <View style={styles.codeBottomText}>
          <Typography color="dark">{student.institution.name}</Typography>
          <Typography color="dark">
            B.Arch | {`${student.academicSession.startYear} - ${student.academicSession.endYear}`}
          </Typography>
        </View>
      </Animated.View>
      <View
        style={[
          styles.flexItem,
          styles.absoluteBottomButtonContainer,
          { marginVertical: 20, marginBottom: 5, width: '100%' },
        ]}
      >
        <Button
          buttonWidth="auto"
          textColor="dark"
          borderColor={theme.colors.dark}
          onPress={handleShare}
        >
          Refer & Earn
        </Button>
        <Button
          buttonWidth="auto"
          backgroundColor="dark"
          textColor="white"
          borderColor="transparent"
          onPress={handleScan}
        >
          Open Scanner
        </Button>
      </View>
      <TouchableOpacity style={styles.absoluteBottomText} onPress={() => setShowQrCode(false)}>
        <Typography
          color={isExpanded ? 'dark' : 'white'}
          style={{
            textAlign: 'center',
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
          }}
        >
          close
        </Typography>
      </TouchableOpacity>
      {isExpanded && (
        <>
          <NameOverlay position="middle" />
          <NameOverlay position="top" />
          <NameOverlay position="bottom" />
        </>
      )}
    </Animated.View>
  );
};

export default QrCode;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      height: heightPercentageToDP(100),
      width: '100%',
      flex: 1,
      // backgroundColor: '#000000CC',
      paddingVertical: 20,
      paddingHorizontal: 30,
      zIndex: 1,
      overflow: 'hidden',
    },
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    codeContainer: {
      alignSelf: 'center',
      marginVertical: 30,
      // padding: 30,
      width: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: theme.spacing.lg,
      position: 'relative',
      borderWidth: 1,
      borderColor: theme.colors.dark,
      // height: 200,
      paddingTop: 80,
      zIndex: 50,
    },
    centerText: {
      textAlign: 'center',
    },
    textMargin: {
      marginTop: 20,
    },
    codeTopBackground: {
      backgroundColor: '#ED8063',
      paddingVertical: 20,
      position: 'absolute',
      // width: widthPercentageToDP(76),
      width: '100%',
      paddingHorizontal: 30,
      borderTopRightRadius: theme.spacing.lg,
      borderTopLeftRadius: theme.spacing.lg,
      borderColor: theme.colors.dark,
      borderBottomWidth: 1,
      top: 0,
      height: 30,
    },
    maximizeIcon: {
      position: 'absolute',
      right: '35%',
      top: -15,
      zIndex: 10,
    },
    closeIcon: {
      position: 'absolute',
      right: '15%',
      top: -15,
      zIndex: 10,
    },
    codeAbsoluteContainer: {
      position: 'absolute',
      width: '100%',
      top: -35,
    },
    mainContainer: {
      position: 'relative',
      backgroundColor: theme.colors.white,
      alignSelf: 'center',
      borderRadius: theme.spacing.lg,
      marginTop: 30,
      zIndex: 10,
    },
    codeBottomText: {
      position: 'absolute',
      bottom: 10,
      alignSelf: 'center',
      zIndex: 30,
    },
    detailsText: {
      position: 'absolute',
      alignSelf: 'center',
    },
    absoluteBottomText: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 230,
    },
    absoluteBottomButtonContainer: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 250,
    },
  });
