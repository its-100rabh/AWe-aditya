import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CompositeNavigationProp, useNavigation, useTheme } from '@react-navigation/native';
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import { TabParamList } from '../../HomeTabNavigator';
import { RootStackParamList } from '../../RootNavigator';
import image from '../../assets/images/BANNER.png';

interface HighlightCardProps {}

type NavigationProp = CompositeNavigationProp<
  MaterialTopTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;

const HighlightCard: React.FC<HighlightCardProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  // const playerRef = React.useRef<Video>(null);

  const navigation = useNavigation<NavigationProp>();

  // const [isPaused, setIsPaused] = React.useState(true);
  // const [isMuted, setIsMuted] = React.useState(true);

  // const toggleMuted = () => setIsMuted(value => !value);

  // React.useEffect(() => {
  //   const focusEvent = navigation.addListener('focus', () => {
  //     setIsPaused(false);
  //   });

  //   const blurEvent = navigation.addListener('blur', () => {
  //     setIsPaused(true);
  //   });

  //   return () => {
  //     focusEvent();
  //     blurEvent();
  //   };
  // }, [navigation]);

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Event')}>
      <Typography color="text" fontStyle="bold" fontSize="large" mb={24} mt={24} align="center">
        Today's Highlight
      </Typography>

      <View>
        <Image source={image} style={styles.image} />

        <Typography style={styles.disclaimer}>
          Book your SIDHMO Music Festival tickets through Sconto
        </Typography>
      </View>

      {/* <View style={styles.videoContainer}>
        <Video
          muted={isMuted}
          paused={isPaused}
          repeat
          ref={playerRef}
          source={devfestVideo}
          style={styles.video}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.muteButton} onPress={toggleMuted}>
          <Icon
            name={!isMuted ? 'volume-high' : 'volume-off'}
            size={32}
            color={theme.colors.border}
          />
        </TouchableOpacity>
      </View> */}
    </TouchableOpacity>
  );
};

export default HighlightCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.lightBackground,
      borderRadius: theme.rounded.card,
      marginBottom: theme.spacing.md,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: theme.rounded.card,
    },
    videoContainer: {
      padding: 4,
      borderRadius: 46,
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: 200,
    },
    muteButton: {
      position: 'absolute',
      bottom: theme.spacing.md,
      right: theme.spacing.md,
    },
    disclaimer: {
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.md,
    },
  });
