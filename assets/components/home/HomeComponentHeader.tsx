import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Typography from '../common/Typography';

interface HomeHeaderProps {
  header: string;
  subHeader: string;
}

const HomeComponentHeader: React.FC<HomeHeaderProps> = ({ header, subHeader }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Typography color="dark" fontStyle="goteskDisplayRegular" fontSize="large">
        {header}
      </Typography>
      <Typography
        color="darkText"
        fontSize="small"
        style={{
          borderRadius: 60,
          borderColor: theme.colors.darkText,
          borderWidth: 0.5,
          backgroundColor: '#EFEFEF',
          paddingVertical: 1,
          paddingHorizontal: 8,
        }}
      >
        {subHeader}
      </Typography>
    </View>
  );
};

export default HomeComponentHeader;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: theme.spacing.md,
    },
  });
