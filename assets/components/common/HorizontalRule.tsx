import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { ExtendedTheme } from '../../types';

interface HorizontalRuleProps {
  marginVertical?: number;
  width?: number | string;
  backgroundColor?: string;
  paddingVertical?: number;
}

const HorizontalRule: React.FC<HorizontalRuleProps> = ({
  marginVertical = 0,
  width = '100%',
  backgroundColor,
  paddingVertical,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(
    () => createStyles(theme, marginVertical, width, backgroundColor, paddingVertical),
    [theme]
  );
  return <View style={styles.container} />;
};

export default HorizontalRule;

const createStyles = (
  theme: ExtendedTheme,
  marginVertical: number,
  width: string | number,
  backgroundColor: string,
  paddingVertical: number
) =>
  StyleSheet.create({
    container: {
      marginVertical,
      width,
      paddingVertical: paddingVertical ?? 0.5,
      backgroundColor: backgroundColor ?? '#CBCBCB',
    },
  });
