import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { IProduct } from '../../../types/entities';
import type { ExtendedTheme } from '../../../types';
import Typography from '../../common/Typography';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image?.path }} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
        <Typography fontSize="medium" fontStyle="medium" mb={2}>
          {product.name}
        </Typography>
        <Typography fontSize="small" fontStyle="medium" color="border" numberOfLines={1}>
          {product.description}
        </Typography>

        <View style={styles.divider} />

        <View style={styles.discountContainer}>
          <Typography fontSize="medium" fontStyle="bold">
            {` ₹ ${product.price / 100}`}
          </Typography>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    card: {
      padding: 0,
      flexDirection: 'row',
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      overflow: 'hidden',
    },
    imageContainer: {
      borderRadius: theme.rounded.card,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: theme.rounded.card,
      borderColor: theme.colors.dark,
      borderWidth: 8,
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: theme.spacing.md,
      paddingBottom: theme.spacing.sm,
      paddingTop: theme.spacing.sm,
    },
    divider: {
      backgroundColor: theme.colors.border,
      width: '100%',
      height: StyleSheet.hairlineWidth,
      marginVertical: theme.spacing.xs,
    },
    discountContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  });
