import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Typography from './assets/components/common/Typography';
import type { ExtendedTheme } from './types';
// import { RootStackParamList } from '../RootNavigator';
import ScrollLayout from './assets/components/layouts/ScrollLayout';
import Button from './assets/components/common/Button';
// import AuthOverlay from '../components/signup/AuthOverlay';
// import LoginImage from '../assets/svg/LoginImage';
import NewScontoLogo from './assets/svg/NewScontoLogo';
import preLoginImage from './assets/images/pre-login-image.png';
// import darkLogoText from '../assets/images/dark-logo-text.png';


const App: React.FC = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ScrollLayout
        scrollViewProps={{
          style: styles.container,
          keyboardDismissMode: 'none',
          keyboardShouldPersistTaps: 'always',
        }}
        edges={[]}
      >
        <View style={styles.imageLogoText}>
          <NewScontoLogo color={theme.colors.dark} />
        </View>
        <View style={styles.mainImageContainer}>
          <View style={styles.mainImage}>
            {/* <LoginImage />
             */}
            <Image source={preLoginImage} style={styles.image} />
          </View>
        </View>
        <Typography fontStyle="clashDisplayMedium" fontSize={32} align="center" color="dark">
          Student Login
        </Typography>
        <Typography fontStyle="medium" fontSize="medium" align="center" color="dark">
          Continue watering your tree and keep
        </Typography>
        <Typography fontStyle="semibold" fontSize="medium" align="center" color="dark">
          earning discounts!
        </Typography>
        <Button
          backgroundColor="primary"
          marginVertical={25}
          paddingVertical={15}
          // fontStyle="semibold"
          textColor="dark"
          fontSize="large"
          style={styles.buttonContainer}
          onPress={() => setShowModal(true)}
        >
          Login
        </Button>
        <TouchableOpacity
          style={styles.loginBottomContainer}
          // onPress={() => navigation.navigate('OnBoarding')}
        >
          <Typography color="textLabel" fontSize="small" fontStyle="medium">
            Don't have an account?{' '}
          </Typography>
          <Typography
            color="dark"
            fontSize="small"
            fontStyle="semibold"
            style={styles.loginTextDecorator}
          >
            Sign Up
          </Typography>
        </TouchableOpacity>
      </ScrollLayout>
      {/* {showModal && (
        <AuthOverlay
          navigation={navigation}
          route={route}
          mode="signin"
          handleAuthNavigate={closeModal}
        />
      )} */}
    </>
  );
};

export default  App;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      paddingTop: theme.spacing.md,
      paddingBottom: theme.spacing.md,
      backgroundColor: theme.colors.background,
    },
    imageLogoText: {
      alignSelf: 'center',
    },
    mainImage: {
      // alignSelf: 'flex-start',
      top: wp(15),
      // left: -hp(8),
    },
    image: {
      width: wp(90),
      height: hp(50),
      alignSelf: 'center',
    },
    mainImageContainer: {
      height: hp(62),
    },
    authModal: {
      position: 'absolute',
      height: '100%',
      width: '100%',
    },
    authModalContent: {
      backgroundColor: theme.colors.white,
      width: '85%',
      top: hp(20),
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
      justifyContent: 'space-between',
      flexDirection: 'row',
      width: '80%',
      alignSelf: 'center',
    },
    buttonImage: {
      width: 50,
      height: 50,
    },
    buttonContainer: {
      width: '100%',
      borderRadius: 54,
    },
    horizontalRule: {
      paddingVertical: 1,
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
  });
