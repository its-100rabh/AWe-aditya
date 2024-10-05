import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import CategoryCard from './CategoryCard';
import Typography from '../common/Typography';
import { useMerchantCategories } from '../../api/queries/categories.queries';

// import fashionIcon from '../../assets/images/placeholder/categories/fashion.png';
// import electronicIcon from '../../assets/images/placeholder/categories/electronics.png';
// import beautyIcon from '../../assets/images/placeholder/categories/beauty.png';
// import fitnessIcon from '../../assets/images/placeholder/categories/fitness.png';
// import stationeriesIcon from '../../assets/images/placeholder/categories/stationeries.png';
// import travelIcon from '../../assets/images/placeholder/categories/travel.png';
// import leisureIcon from '../../assets/images/placeholder/categories/leisure.png';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const categories = useMerchantCategories();

  return (
    <View>
      <Typography fontSize="medium" fontStyle="medium" style={styles.text}>
        Select your specifics:
      </Typography>

      <FlatList
        data={categories.data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <CategoryCard category={item} />}
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Categories;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    text: {
      marginBottom: theme.spacing.md,
    },
    flatList: {
      marginHorizontal: -theme.spacing.md,
      marginBottom: theme.spacing.lg,
    },
    flatListContent: {
      paddingHorizontal: theme.spacing.md,
    },
  });
