import { Dimensions, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import AppTheme from '../../theme/theme';
import { Upload } from '../../types/entities';

const BLEED = 0;
const HEIGHT = (Dimensions.get('screen').width - AppTheme.spacing.md * 2) * (5 / 12) + BLEED;

interface MerchantCarouselProps {
  logo: Upload;
}

const MerchantCarousel: React.FC<MerchantCarouselProps> = ({ logo }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image source={{ uri: logo.path }} style={styles.image} resizeMode="cover" />
        <View style={styles.cardBackdrop} />
      </View>
    </View>
  );
};

export default MerchantCarousel;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {},
    view: {
      height: HEIGHT,
      borderRadius: 20,
      paddingBottom: 6,
    },
    cardBackdrop: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.background,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 20,
      zIndex: -1,
      top: 6,
      left: 6,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    },
  });
