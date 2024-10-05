import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ExtendedTheme } from '../../types';
import LocationCard from '../home/LocationCard';
import Typography from '../common/Typography';
import userImage from '../../assets/images/placeholder/user/user.png';
import { useStudent } from '../../store/selector';

interface UserProfileCardProps {}

const UserProfileCard: React.FC<UserProfileCardProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const [student] = useStudent();

  return (
    <View>
      <View style={styles.profileContainer}>
        <View style={styles.profileContainerInnerView}>
          <LocationCard />
        </View>

        <View style={styles.profileBottomContainer}>
          <View style={styles.iconView}>
            <Image
              source={
                student?.profilePicture?.path ? { uri: student?.profilePicture?.path } : userImage
              }
              style={styles.image}
            />
          </View>

          <View style={styles.verticalDivider} />

          <View style={styles.rightContainer}>
            <View style={styles.infoContainer}>
              <View style={styles.textView}>
                <Typography fontSize="small" fontStyle="medium" style={styles.id}>
                  Sconto Id: {student?.scontoId}
                </Typography>

                {student?.isVerified ? (
                  <Icon name="check-decagram" size={16} color={theme.colors.primary} />
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomView} />
    </View>
  );
};

export default UserProfileCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    profileContainer: {
      position: 'relative',
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 16,
    },
    profileContainerInnerView: {
      padding: theme.spacing.md,
      position: 'relative',
      zIndex: 1,
    },
    profileBottomContainer: {
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    rightContainer: {
      marginLeft: theme.spacing.md,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    infoContainer: {},
    iconView: {
      backgroundColor: theme.colors.text,
      borderRadius: 15,
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 15,
    },
    verticalDivider: {
      backgroundColor: theme.colors.border,
      width: 1,
      height: '80%',
      marginLeft: theme.spacing.md,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    textView: {
      flexDirection: 'row',
    },
    id: {
      marginRight: theme.spacing.sm,
    },
    divider: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.border,
      marginVertical: theme.spacing.sm,
    },
    bottomView: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.border,
      borderWidth: 1,
      borderRadius: 16,
      position: 'absolute',
      top: 6,
      bottom: -6,
      left: 6,
      right: -6,
      zIndex: -1,
    },
  });
