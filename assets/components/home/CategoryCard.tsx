import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ExtendedTheme } from '../../types';
import Card from '../common/Card';
import Typography from '../common/Typography';
import { Category } from '../../types/entities';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const firstPart = `${category.name.split(' ')[0]} `;
  const secondPart = category.name.substring(firstPart.length);

  return (
    <Card style={styles.container}>
      <View style={styles.leftContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="plus" color={theme.colors.background} size={24} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Typography fontSize="small" fontStyle="regular" style={styles.bold}>
            {firstPart}
          </Typography>
          <Typography fontSize="small" fontStyle="regular" style={styles.text}>
            {secondPart}
          </Typography>
        </View>
      </View>

      <Image source={{ uri: category.image.path }} style={styles.image} />
    </Card>
  );
};

export default CategoryCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 0,
      justifyContent: 'space-between',
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 12,
    },
    leftContainer: {
      padding: theme.spacing.md,
      paddingBottom: 0,
      flexShrink: 1,
    },
    iconButton: {
      backgroundColor: theme.colors.text,
      alignSelf: 'flex-start',
      borderRadius: 12,
      marginBottom: theme.spacing.md,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      flexWrap: 'wrap',
    },
    bold: {
      ...theme.fonts.bold,
      fontSize: 22,
    },
    text: {
      color: theme.colors.text,
      ...theme.fonts.regular,
      fontSize: 22,
    },
  });
