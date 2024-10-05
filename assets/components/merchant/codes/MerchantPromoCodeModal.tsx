import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import ReactNativeModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ParsedText from 'react-native-parsed-text';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';
import type { ExtendedTheme } from '../../../types';
import { IPromoCodeWithCoupon } from '../../../types/entities';
import Typography from '../../common/Typography';
import { TabParamList } from '../../../HomeTabNavigator';
import { RootStackParamList } from '../../../RootNavigator';

interface MerchantPromoCodeModalProps {
  code?: IPromoCodeWithCoupon | null;
  isVisible: boolean;
  onClose: () => void;
}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList, 'Merchant'>
>;

const MerchantPromoCodeModal: React.FC<MerchantPromoCodeModalProps> = ({
  code,
  isVisible,
  onClose,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const navigation = useNavigation<NavigationProp>();

  const handleLink = () => {
    if (code?.issuerMerchant.websiteLink)
      navigation.navigate('WebView', { url: code?.issuerMerchant.websiteLink });
  };

  const handleCopy = () => {
    if (code) {
      Clipboard.setString(code.promoCode);
      Toast.show({
        text1: code.promoCode,
        text2: 'Code copied to your clipboard',
      });
    }
  };

  return (
    <ReactNativeModal
      style={styles.modal}
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
    >
      <View style={styles.content}>
        <View style={styles.bar} />
        <View style={styles.header}>
          <Typography fontStyle="bold" fontSize="h1" color="primary">
            {code?.promoCode}
          </Typography>

          <TouchableOpacity onPress={handleCopy}>
            <Icon name="content-copy" size={24} color={theme.colors.secondary} />
          </TouchableOpacity>
        </View>

        <Typography fontStyle="medium" fontSize="medium" color="text" mb={16}>
          {code?.promoCoupon.details}
        </Typography>

        <ParsedText
          style={styles.text}
          parse={[{ type: 'url', style: styles.url, onPress: handleLink }]}
        >
          {code?.promoCoupon.howToRedeem}
        </ParsedText>
      </View>
    </ReactNativeModal>
  );
};

export default MerchantPromoCodeModal;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    bar: {
      backgroundColor: theme.colors.border,
      height: 4,
      width: 100,
      marginBottom: 8,
      alignSelf: 'center',
      borderRadius: 2,
    },
    modal: {
      margin: 0,
      justifyContent: 'flex-end',
    },
    content: {
      backgroundColor: theme.colors.background,
      padding: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.primary,
      borderBottomWidth: 0,
      borderTopLeftRadius: theme.rounded.card,
      borderTopRightRadius: theme.rounded.card,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    text: {
      ...theme.fonts.regular,
      color: theme.colors.text,
      fontSize: theme.fontSize.medium,
    },
    url: {
      color: theme.colors.secondary,
    },
  });
