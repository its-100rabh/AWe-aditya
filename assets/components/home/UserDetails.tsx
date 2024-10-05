import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { useStudent } from '../../store/selector';
import { formatName } from '../../utils/string';

interface UserDetailsProps {
  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
  innerStyle?: StyleProp<ViewStyle>;
  onLayout?: (e: LayoutChangeEvent) => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ style, innerStyle, onLayout }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  const handleRefer = async () => {
    try {
      await Share.open({
        message: `Hey, I'm on Sconto! User my code ${student?.referralCode}\n`,
        title: `Hey, I'm on Sconto! User my code ${student?.referralCode}`,
        url: 'https://sconto.ai/',
        subject: 'Join Sconto',
      });
    } catch (err) {
      //
    }
  };

  return (
    <Animated.View style={[styles.container, style]}>
      <Animated.View onLayout={onLayout} style={[styles.view, innerStyle]}>
        <View style={styles.divider} />

        <Typography fontSize="small" fontStyle="medium" style={styles.heading}>
          Personal Information
        </Typography>

        <View style={styles.divider} />

        <View style={styles.section}>
          <View style={styles.textContainer}>
            <Typography fontSize="small" fontStyle="medium">
              {'Name: '}
            </Typography>
            <Typography fontSize="small" fontStyle="bold">
              {formatName({
                firstName: student?.firstName,
                middleName: student?.middleName,
                lastName: student?.lastName,
              })}
            </Typography>
          </View>
          <View style={styles.textContainer}>
            <Typography fontSize="small" fontStyle="medium">
              {'Email: '}
            </Typography>
            <Typography fontSize="small" fontStyle="bold">
              {student?.email}
            </Typography>
          </View>
          <View style={styles.textContainer}>
            <Typography fontSize="small" fontStyle="medium">
              {'Contact: '}
            </Typography>
            <Typography fontSize="small" fontStyle="bold">
              {`${student?.contactNumber?.countryCode} ${student?.contactNumber?.number}`}
            </Typography>
          </View>
        </View>

        <TouchableOpacity style={styles.partnerButton} activeOpacity={0.7} onPress={handleRefer}>
          <Typography style={styles.partnerButtonText} fontStyle="medium">
            Refer your friends
          </Typography>
          <Icon name="arrow-right" color={theme.colors.background} size={24} />
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

export default UserDetails;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      marginTop: theme.spacing.sm,
      position: 'absolute',
      width: '100%',
      top: 130,
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderColor: theme.colors.border,
      borderWidth: 1,
      backgroundColor: theme.colors.background,
      overflow: 'hidden',
    },
    view: {
      paddingHorizontal: theme.spacing.md,
      paddingTop: theme.spacing.xl,
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.text,
    },
    section: {
      marginVertical: theme.spacing.sm,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
      marginBottom: theme.spacing.xs,
    },
    heading: {
      marginVertical: theme.spacing.xs,
    },
    textVerticalContainer: {
      marginBottom: theme.spacing.xs,
    },
    partnerButton: {
      backgroundColor: theme.colors.secondary,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      marginHorizontal: -theme.spacing.md,
      borderRadius: 16,
    },
    partnerButtonText: {
      color: theme.colors.background,
    },
  });
