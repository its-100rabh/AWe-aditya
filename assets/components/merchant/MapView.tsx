import { Linking, Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import RNMapView, { Marker } from 'react-native-maps';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Share, { ShareOptions } from 'react-native-share';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Color from 'color';
import type { ExtendedTheme } from '../../types';
import Button from '../common/Button';
import { Address, IMerchantStoreLocation, Merchant } from '../../types/entities';

interface MapViewProps {
  address?: Address;
  store?: IMerchantStoreLocation;
  merchant?: Merchant;
}

const MapView: React.FC<MapViewProps> = ({ address, store, merchant }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const mapRef = React.useRef<RNMapView>(null);

  const openGps = (lat: number, lng: number) => {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${lat},${lng}`;
    const label = store?.name ?? merchant?.name ?? 'Merchant';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(String(url));
  };

  const handleOpenMap = () => {
    if (address?.coordinates?.lat && address?.coordinates?.lng)
      openGps(address?.coordinates?.lat, address?.coordinates?.lng);
  };

  const handleShare = async () => {
    if (store) {
      const options: ShareOptions = {
        message: `Visit ${store?.name} avail upto ${merchant?.discount}% discount`,
        title: store?.name ?? '',
        url: 'https://sconto.ai/',
        // url: `sconto://merchant-store/${store?._id}`,
        subject: 'Join Sconto',
      };
      await Share.open(options);
    }

    if (merchant) {
      const options: ShareOptions = {
        message: `Visit ${merchant?.name} avail upto ${merchant?.discount}% discount`,
        title: merchant?.name ?? '',
        url: 'https://sconto.ai/',
        // url: `sconto://merchant-store/${store?._id}`,
        subject: 'Join Sconto',
      };
      await Share.open(options);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <RNMapView
          ref={mapRef}
          onMapReady={() => {
            setTimeout(() => {
              // mapRef.current?.fitToSuppliedMarkers(['store-marker']);
            });
          }}
          initialRegion={{
            latitude: 22.78825,
            longitude: 88.4324,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
          region={{
            latitude: address?.coordinates?.lat ?? 22.78825,
            longitude: address?.coordinates?.lng ?? 88.4324,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          style={styles.map}
        >
          {address ? (
            <Marker
              identifier="store-marker"
              coordinate={{
                latitude: address.coordinates?.lat ?? 0,
                longitude: address.coordinates?.lng ?? 0,
              }}
            />
          ) : null}
        </RNMapView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
            <Icon name="share-variant-outline" size={24} color={theme.colors.text} />
          </TouchableOpacity>

          <Button
            fontSize="small"
            iconSize={22}
            onPress={handleOpenMap}
            textColor="text"
            style={styles.openInMap}
          >
            Open in Maps
          </Button>
        </View>
      </View>
    </View>
  );
};

export default MapView;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginVertical: theme.spacing.md,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
    card: {
      padding: 0,
    },
    mapContainer: {},
    map: {
      width: wp(100) - theme.spacing.md * 2,
      height: wp(80) - theme.spacing.md * 2,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      width: '100%',
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.md,
    },
    openInMap: {
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
    },
    shareButton: {
      backgroundColor: Color(theme.colors.background).alpha(0.42).rgb().toString(),
      marginRight: theme.spacing.md,
      paddingHorizontal: 0,
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
    },
  });
