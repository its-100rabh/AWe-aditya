import {
  Image,
  ScrollView,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
// CompositeNavigationProp, useNavigation,
// import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import MerchantCategory from '../../assets/images/Category.png';
// import { TabParamList } from '../../HomeTabNavigator';
// import { RootStackParamList } from '../../RootNavigator';
import { useMerchants } from '../../api/queries/merchant.queries';

interface FeaturedMerchantsProps {
  style?: StyleProp<ViewStyle>;
}

// type NavigationProp = CompositeNavigationProp<
//   MaterialTopTabNavigationProp<TabParamList>,
//   NativeStackNavigationProp<RootStackParamList, 'HomeTab'>
// >;

const MerchantsCategory: React.FC<FeaturedMerchantsProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  // const navigation = useNavigation<NavigationProp>();

  const merchants = useMerchants();
  // console.log(
  //   merchants.data.pages.map((merchant) => merchant.merchants.map((data) => console.log(data)))
  // );

  return (
    <View style={[styles.container, style]}>
      <ScrollView horizontal>
        {merchants.data &&
          merchants?.data?.pages[0]?.merchants?.map((merchantData) => (
            <TouchableOpacity
              style={styles.cardItem}
              key={merchantData?._id}
              // onPress={() => navigation.navigate('Merchant', { merchantId: merchantData._id })}
            >
              {/* <Image source={{ uri: merchantData.logo?.path }} style={styles.cardImage} /> */}
              <Image source={MerchantCategory} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default MerchantsCategory;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: '#EFEFEF',
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
    },
    cardContainer: {
      marginTop: theme.spacing.lg,
      flexDirection: 'row',
      width: '105%',
      flexWrap: 'wrap',
      marginLeft: '-2.5%',
      marginRight: '-2.5%',
    },
    card: {
      width: '45%',
      height: 160,
      margin: '2.5%',
    },
    cardImage: {
      width: 250,
      height: 250,
      borderRadius: theme.rounded.card - 10,
      // overflow: 'hidden',
    },
    cardItem: {
      marginHorizontal: 10,
    },
  });
