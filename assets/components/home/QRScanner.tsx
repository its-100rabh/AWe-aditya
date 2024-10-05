import { StyleSheet } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import Toast from 'react-native-toast-message';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import { RootStackParamList } from '../../RootNavigator';
import Button from '../common/Button';
import { TabParamList } from '../../HomeTabNavigator';

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

interface QRScannerProps {}

const MerchantUniqueIdRegex = /^SCM[-]\d+$/;

const QRScanner: React.FC<QRScannerProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();
  const scannerRef = React.useRef<QRCodeScanner>(null);

  const [showScanner, setShowScanner] = React.useState(false);

  React.useEffect(() => {
    const focusEvent = navigation.addListener('focus', () => {
      setShowScanner(true);
    });

    const blurEvent = navigation.addListener('blur', () => {
      setShowScanner(false);
    });

    return () => {
      focusEvent();
      blurEvent();
    };
  }, [navigation]);

  const onSuccess = (e: BarCodeReadEvent) => {
    if (MerchantUniqueIdRegex.test(e.data)) {
      scannerRef.current?.disable();
      setShowScanner(false);
      navigation.replace('Transaction', { merchantId: e.data });
    } else {
      Toast.show({
        text1: 'Oops!',
        text2: "This doesn't look like a merchant QR",
        type: 'error',
      });
    }
  };

  return showScanner ? (
    <>
      <QRCodeScanner
        ref={scannerRef}
        showMarker
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.off}
        cameraContainerStyle={styles.cameraContainer}
        cameraStyle={styles.camera}
      />
      <Button onPress={() => scannerRef.current?.reactivate()}>Scan</Button>
    </>
  ) : null;
};

export default QRScanner;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    cameraContainer: {},
    camera: {
      width: '100%',
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
  });
