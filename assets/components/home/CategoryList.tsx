import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { useMerchantCategories } from '../../api/queries/categories.queries';

const Category: React.FC<{ name: string; isActive: boolean; onSelect: () => void }> = ({
  name,
  isActive = false,
  onSelect,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={[styles.item, isActive ? styles.itemActive : null]} onPress={onSelect}>
      <Typography fontStyle={isActive ? 'medium' : 'regular'} color={isActive ? 'primary' : 'text'}>
        {name}
      </Typography>
    </TouchableOpacity>
  );
};

interface CategoryListProps {
  onChange: (value?: string) => void;
  onChangeOnline: (value: boolean) => void;
  isOnline: boolean;
  categoryId: string | undefined;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categoryId,
  onChange,
  isOnline,
  onChangeOnline,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const categories = useMerchantCategories();

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Category
          name="Online"
          isActive={isOnline}
          onSelect={() => {
            onChangeOnline(!isOnline);
          }}
        />

        {categories.data?.map((category) => (
          <Category
            key={category._id}
            name={category.name}
            isActive={categoryId === category._id}
            onSelect={() => {
              if (category._id === categoryId) onChange(undefined);
              else onChange(category._id.toString());
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryList;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
      backgroundColor: theme.colors.background,
      paddingVertical: theme.spacing.md,
    },
    item: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      backgroundColor: theme.colors.background,
      borderRadius: theme.rounded.card,
      marginRight: 4,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.background,
    },
    itemActive: {
      borderColor: theme.colors.primary,
      backgroundColor: theme.colors.lightBackground,
    },
  });
