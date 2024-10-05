import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import OneSignal from 'react-native-onesignal';
import { OtplessEventModule } from 'otpless-react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RootStackParamList } from '../../RootNavigator';
import { useStudent } from '../../store/selector';
import { navigate } from '../../utils/navigation';
import { useSignInStudentOtpLess } from '../../api/queries/auth.queries';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import WhatsappIcon from '../../assets/svg/WhatsappIcon';
import GoogleIcon from '../../assets/svg/GoogleIcon';
import MailSignInIcon from '../../assets/svg/MailSignInIcon';
import MobileSignInIcon from '../../assets/svg/MobileSignInIcon';
import darkLogoText from '../../assets/images/dark-logo-text.png';
import { save } from '../../utils/storage';
import NewScontoLogo from '../../assets/svg/NewScontoLogo';

type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

interface AuthOverlayProps extends OnBoardingScreenProps {
  mode: 'signin' | 'login';
  handleAuthNavigate?: () => void;
}

const AuthOverlay: React.FC<AuthOverlayProps> = ({ navigation, mode, handleAuthNavigate }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const signInOtpLess = useSignInStudentOtpLess();
  const [, updateStudent] = useStudent();
  // const autoClickParam = {
  //   method: 'get',
  //   params: {
  //     uxmode: 'autoclick'
  //   }
  // };

  const eventModule = new OtplessEventModule((data: any) => {
    let message: string = '';
    console.log(data);
    message = `otpless-token--: ${data?.data?.token}`;
    console.log(message);
    // return;
    if (data.data === null || data.data === undefined) {
      message = data.errorMessage;
    } else {
      signInOtpLess.mutate(
        { token: data.data.token },
        {
          onSuccess: async (studentData) => {
            const student = studentData.data;
            const { token } = studentData;
            console.log(student);
            console.log(token);
            console.log('student--', student);
            // console.log(token)
            updateStudent(student);
            await save('@auth_token', token);
            OneSignal.setExternalUserId(student._id);
            // navigation.reset({
            //   index: 1,
            //   routes: [{ name: 'RegisterFirstName', params: { isMail } }]
            // });
            eventModule.onSignInCompleted();

            if (student.isRegistered) navigation.reset({ index: 1, routes: [{ name: 'HomeTab' }] });
            else if (student.isPhoneVerified === true) {
              navigation.reset({
                index: 1,
                routes: [{ name: 'RegisterFirstName', params: { isMail: true } }],
              });
            } else
              navigation.reset({
                index: 1,
                routes: [{ name: 'RegisterFirstName', params: { isMail: false } }],
              });
          },
        }
      );
    }
  });
  eventModule.showFabButton(false);

  return (
    <>
      <BlurView
        style={styles.authModal}
        blurType="dark"
        blurAmount={10}
        blurRadius={1}
        reducedTransparencyFallbackColor="#EFEFEF"
      />
      <View style={styles.authModalContent}>
        <View style={styles.imageLogoText}>
          <NewScontoLogo color={theme.colors.dark} />
        </View>
        <Typography
          fontStyle="medium"
          align="center"
          color="dark"
          fontSize="small"
          style={styles.signUpText}
        >
          {mode === 'login' ? 'Signup' : 'Login'}
        </Typography>
        <View style={styles.flexItem}>
          <TouchableOpacity
            onPress={() => {
              eventModule.start();
            }}
            style={styles.buttonImage}
          >
            <WhatsappIcon />
          </TouchableOpacity>
          <Typography color="dark" fontSize="small" ml={6}>
            or
          </Typography>
          <TouchableOpacity
            onPress={() => {
              eventModule.start();
            }}
            style={styles.buttonImage}
          >
            <GoogleIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalRule} />
        <TouchableOpacity
          style={styles.buttonWithImage}
          onPress={() => {
            if (handleAuthNavigate) {
              handleAuthNavigate();
            }
            if (mode === 'login') {
              navigation.navigate('PhoneNumber');
            } else {
              navigation.navigate('PhoneNumberLogin');
            }
          }}
        >
          <View style={styles.imageWithinButton}>
            <MobileSignInIcon />
          </View>
          <Typography color="dark" fontStyle="medium">
            Phone
          </Typography>
        </TouchableOpacity>
        <Typography color="dark" fontSize="small" align="center" style={styles.textInButton}>
          or
        </Typography>
        <TouchableOpacity
          style={styles.buttonWithImageDark}
          onPress={() => {
            if (handleAuthNavigate) {
              handleAuthNavigate();
            }
            if (mode === 'login') {
              navigation.navigate('EmailSignUp');
            } else {
              navigation.navigate('EmailLogin');
            }
          }}
        >
          <View style={styles.imageWithinButton}>
            <MailSignInIcon />
          </View>
          <Typography color="white" fontSize={18}>
            Email
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBottomContainer}
          onPress={() => {
            if (handleAuthNavigate) {
              handleAuthNavigate();
            }
            if (mode === 'login') {
              navigation.navigate('Login');
            } else {
              navigation.navigate('OnBoarding');
            }
          }}
        >
          <Typography color="dark" fontStyle="regular" style={{ fontSize: 14, marginTop: 10 }}>
            {mode === 'login' ? 'Already an user? ' : "Don't have an account? "}
          </Typography>
          <Typography color="dark" fontStyle="semibold" style={styles.loginTextDecorator}>
            {mode === 'login' ? 'Login' : 'Signup'}
          </Typography>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AuthOverlay;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    imageLogoText: {
      alignSelf: 'center',
    },
    authModal: {
      position: 'absolute',
      height: '100%',
      alignSelf: 'center',
      width: '100%',
      flex: 1,
      zIndex: 1,
    },
    authModalContent: {
      position: 'absolute',
      backgroundColor: theme.colors.white,
      width: '85%',
      top: hp(20),
      alignSelf: 'center',
      borderRadius: theme.spacing.md,
      padding: theme.spacing.md,
      paddingVertical: 40,
      zIndex: 50,
      shadowColor: '#000000',
      elevetion: 20,
    },
    signUpText: {
      marginVertical: 20,
    },
    flexItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '60%',
      alignSelf: 'center',
    },
    buttonImage: {
      width: 50,
      height: 50,
    },
    horizontalRule: {
      paddingVertical: 0.5,
      backgroundColor: '#CBCBCB',
      width: '90%',
      alignSelf: 'center',
      marginVertical: 30,
    },
    buttonWithImage: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 54,
      width: '60%',
      alignSelf: 'center',
      padding: theme.spacing.md,
    },
    buttonWithImageDark: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.dark,
      borderRadius: 54,
      width: '60%',
      alignSelf: 'center',
      padding: theme.spacing.md,
    },
    textInButton: {
      marginVertical: 20,
    },
    imageWithinButton: {
      marginRight: theme.spacing.sm,
    },
    loginBottomContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 20,
    },
    loginTextDecorator: {
      textDecorationLine: 'underline',
      fontSize: 14,
      marginTop: 10,
    },
  });
