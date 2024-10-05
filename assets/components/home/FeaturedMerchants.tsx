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
// import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import MerchantImage from '../../assets/images/Merchants.png';
// import { TabParamList } from '../../HomeTabNavigator';
// import { RootStackParamList } from '../../RootNavigator';
import { useFeaturedMerchants } from '../../api/queries/merchant.queries';

interface FeaturedMerchantsProps {
  style?: StyleProp<ViewStyle>;
}

// type NavigationProp = CompositeNavigationProp<
//   MaterialTopTabNavigationProp<TabParamList>,
//   NativeStackNavigationProp<RootStackParamList, 'HomeTab'>
// >;

const FeaturedMerchants: React.FC<FeaturedMerchantsProps> = ({ style }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  // const navigation = useNavigation<NavigationProp>();

  const merchants = useFeaturedMerchants();

  return (
    <View style={[styles.container, style]}>
      <ScrollView horizontal>
        {merchants.data?.merchants.map((merchant) => (
          <TouchableOpacity
            style={styles.cardItem}
            key={merchant._id}
            // onPress={() => navigation.navigate('Merchant', { merchantId: merchant._id })}
          >
            {/* <Image source={{ uri: merchant.logo?.path }} style={styles.cardImage} /> */}

            <Image source={MerchantImage} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedMerchants;

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
      width: '100%',
      height: 160,
      borderRadius: theme.rounded.card - 10,
      // overflow: 'hidden',
    },
    cardItem: {
      marginHorizontal: 10,
    },
  });
