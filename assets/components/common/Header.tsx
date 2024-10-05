import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import Typography from './Typography';
import ArrowBackIcon from '../../assets/svg/ArrowBackIcon';
import FilterIcon from '../../assets/svg/Filter';
import type { ExtendedTheme } from '../../types';

interface HeaderProps {
  headerRef?: any;
  navigation: any;
  title: string;
  rightIcon?: any;
  fixed?: boolean;
  iconPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  headerRef,
  navigation,
  title,
  rightIcon,
  fixed = false,
  iconPress,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme, fixed), [theme, fixed]);

  return (
    <Animated.View ref={headerRef} collapsable={false} style={[styles.flexItem, styles.mainHeader]}>
      <View style={styles.flexItem}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowBackIcon />
        </TouchableOpacity>
        <Typography ml={20} color="dark" fontStyle="medium" fontSize={24}>
          {title}
        </Typography>
      </View>
      <TouchableOpacity onPress={iconPress && iconPress}>{rightIcon}</TouchableOpacity>
    </Animated.View>
  );
};

export default Header;

const createStyles = (theme: ExtendedTheme, fixed: boolean) =>
  StyleSheet.create({
    flexItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 30,
      backgroundColor: theme.colors.white,
    },

    mainHeader: {
      paddingVertical: 15,
      width: '90%',
      alignSelf: 'center',
      display: fixed ? 'none' : 'flex',
      zIndex: 50,
    },
  });
