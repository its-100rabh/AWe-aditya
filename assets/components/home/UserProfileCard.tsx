import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { useStudent } from '../../store/selector';
import avatar from '../../assets/images/placeholder/user/user.png';

interface UserProfileCardProps {}

const UserProfileCard: React.FC<UserProfileCardProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={student?.profilePicture?.path ? { uri: student?.profilePicture?.path } : avatar}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Typography color="text" fontSize={20} fontStyle="bold">
          {student?.firstName}
        </Typography>
        <Typography color="text" fontSize={16} fontStyle="medium" mb={4} mt={4}>
          {String(student?.scontoId)}{' '}
          {student?.isVerified ? (
            <Icon name="check-decagram" size={16} color={theme.colors.primary} />
          ) : null}
        </Typography>
        {/* <Typography color="text" fontSize={14} fontStyle="medium">
          KYS 0%
        </Typography> */}
      </View>

      {/* <TouchableOpacity style={styles.button}>
        <Icon name="arrow-right" size={32} color={theme.colors.primary} />
      </TouchableOpacity> */}
    </View>
  );
};

export default UserProfileCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightBackground,
      padding: theme.spacing.md,
      borderRadius: theme.rounded.card,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    textContainer: {},
    button: {
      backgroundColor: theme.colors.background,
      borderRadius: 15,
      padding: theme.spacing.sm,
      marginLeft: 'auto',
    },
    imageContainer: {
      backgroundColor: theme.colors.dark,
      borderRadius: theme.rounded.card,
      padding: 12,
      marginRight: theme.spacing.md,
      marginLeft: -theme.spacing.md,
      marginTop: -theme.spacing.md,
      marginBottom: -theme.spacing.md,
    },
    image: {
      width: 90,
      height: 90,
      borderRadius: 25,
      borderWidth: 3,
      borderColor: theme.colors.primary,
    },
  });
