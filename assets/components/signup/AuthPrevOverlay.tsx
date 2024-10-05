/* eslint-disable prettier/prettier */
import { StyleSheet, View, TouchableOpacity } from 'react-native';
// import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import OneSignal from 'react-native-onesignal';
import { OtplessEventModule } from 'otpless-react-native';
import { RootStackParamList } from '../../RootNavigator';
import { useSignInStudentOtpLess } from '../../api/queries/auth.queries';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import GoogleSingInIcon from '../../assets/svg/GoogleSignIn';
import WhatsAppSigninIcon from '../../assets/svg/WhatsAppSignIn';
import { useStudent } from '../../store/selector';
import { save } from '../../utils/storage';
// import darkLogoText from '../../assets/images/dark-logo-text.png';
import NewScontoLogo from '../../assets/svg/NewScontoLogo';

type OnBoardingScreenProps = NativeStackScreenProps<RootStackParamList, 'OnBoarding'>;

const AuthPrevOverlay: React.FC<OnBoardingScreenProps> = ({ navigation }) => {
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
    message = `otpless-token--: ${data?.data.token}`;
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
    <View style={styles.authModalContent}>
      <View style={styles.imageLogoText}>
        <NewScontoLogo color={theme.colors.dark} />
      </View>
      <View style={styles.textModal}>
        <Typography fontStyle="bold" fontSize={24} align="center" color="dark">
          Launch Your Swag!
        </Typography>
        <View style={styles.subTextModal}>
          <Typography fontStyle="medium" fontSize="small" align="center" color="dark">
            Let your personalised lifestyle rocket
          </Typography>
          <Typography fontStyle="medium" fontSize="small" align="center" color="dark">
            launch now!
          </Typography>
        </View>
      </View>
      <View style={styles.horizontalRule} />
      <View style={styles.flexItem}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            eventModule.start();
          }}
        >
          <WhatsAppSigninIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            eventModule.start();
          }}
        >
          <GoogleSingInIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthPrevOverlay;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    imageLogoText: {
      alignSelf: 'center',
      marginTop: 20,
    },
    authModal: {
      position: 'absolute',
      // height: '100%',
      width: '100%',
    },
    authModalContent: {
      position: 'absolute',
      backgroundColor: theme.colors.white,
      width: '85%',
      top: hp(28),
      alignSelf: 'center',
      borderRadius: theme.spacing.md,
      padding: theme.spacing.md,
      paddingVertical: 40,
    },
    signUpText: {
      marginVertical: 20,
    },
    flexItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: '100%',
      marginVertical: 20,
      alignSelf: 'center',
    },
    horizontalRule: {
      paddingVertical: 1,
      backgroundColor: theme.colors.border,
      width: '90%',
      alignSelf: 'center',
      marginTop: 20,
      marginBottom: 30,
    },
    buttonWithImage: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
      borderRadius: 54,
      width: '70%',
      alignSelf: 'center',
      padding: theme.spacing.md,
    },
    buttonContainer: {
      marginHorizontal: 5,
    },
    buttonWithImageDark: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.dark,
      borderRadius: 54,
      width: '70%',
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
    },
    textModal: {
      marginVertical: 30,
      marginTop: 60,
    },
    subTextModal: {
      marginVertical: 10,
    },
  });
