import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCropPicker, { Video } from 'react-native-image-crop-picker';
import RNVideo from 'react-native-video';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ScontoFullLogo from '../../assets/svg/ScontoFullLogo';
import { RootStackParamList } from '../../RootNavigator';
import { useStudent } from '../../store/selector';
import { formatName } from '../../utils/string';
import { useUploadStream } from '../../api/queries/index.queries';
import { useKYSDetails, useKYSVideoUpdate } from '../../api/queries/kys.queries';

interface KYSVideoFormProps {}

const KYSVideoForm: React.FC<KYSVideoFormProps> = () => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [student] = useStudent();

  const playerRef = React.useRef<RNVideo>(null);

  const [file, setFile] = React.useState<Video | undefined>(undefined);

  const recordVideo = async () => {
    try {
      const video = await ImageCropPicker.openCamera({
        mediaType: 'video',
        useFrontCamera: true,
        videoQuality: 'low',
      });

      video.filename = String(video.path).split('/')[String(video.path).split('/').length - 1];

      setFile(video);
    } catch (err) {
      // console.log(err);
    }
  };

  const kys = useKYSDetails();

  const uploadFile = useUploadStream();
  const updateVideo = useKYSVideoUpdate();

  const getTranscript = React.useCallback(
    () => `Hi, this is ${formatName({
      firstName: student?.firstName,
      middleName: student?.middleName,
      lastName: student?.lastName,
    })}.
    My Aadhaar No. is XXXX XXXX XXXX.
    I am a student of ${student?.institution?.name} having my college id XXXX.
    of Batch ${student?.academicSession?.startYear} - ${student?.academicSession?.endYear}
    `,
    [student]
  );

  const onSubmit = async () => {
    if (file) {
      try {
        const formData = new FormData();

        formData.append('file', {
          uri: file?.path,
          type: file.mime,
          name: file?.filename,
          path: file?.path,
        });

        const uploadedFile = await uploadFile.mutateAsync(formData);

        await updateVideo.mutateAsync({
          videoKYSDocument: uploadedFile._id,
          videoKYSTranscript: getTranscript(),
        });

        navigation.navigate('KYSStatus');
      } catch (err) {
        //
      }
    } else {
      navigation.navigate('KYSStatus');
    }
  };

  const isAlreadyHasValue = React.useMemo(() => !!kys.data?.videoKYSDocument, [kys.data]);

  const onNext = () => {
    if (isAlreadyHasValue) {
      if (file !== undefined) {
        onSubmit();
      } else {
        navigation.navigate('KYSStatus');
      }
    } else {
      onSubmit();
    }
  };

  return (
    <View>
      <Typography fontSize="large" fontStyle="medium" style={styles.heading}>
        KYS Video Submission
      </Typography>

      <View style={styles.textBannerContainer}>
        <View style={styles.textBanner}>
          <Typography
            fontSize="medium"
            fontStyle="bold"
            align="center"
            style={styles.textBannerText}
          >
            {`Hi, this is ${formatName({
              firstName: student?.firstName,
              middleName: student?.middleName,
              lastName: student?.lastName,
            })}`}
          </Typography>

          <Typography
            fontSize="medium"
            fontStyle="bold"
            align="center"
            style={styles.textBannerText}
          >
            My Aadhaar No. is XXXX XXXX XXXX
          </Typography>
          <Typography fontSize="small" fontStyle="regular" color="border" align="center">
            read out the your Aadhaar Number
          </Typography>

          <Typography
            fontSize="medium"
            fontStyle="bold"
            align="center"
            style={styles.textBannerText}
          >
            {`I am a student of ${student?.institution?.name} having my college id XXXX`}
          </Typography>

          <Typography fontSize="small" fontStyle="regular" color="border" align="center">
            read out the your college id card number
          </Typography>

          <Typography
            fontSize="medium"
            fontStyle="bold"
            align="center"
            style={styles.textBannerText}
          >
            {`of Batch ${student?.academicSession?.startYear} - ${student?.academicSession?.endYear}`}
          </Typography>
        </View>

        <Typography fontSize="small" fontStyle="medium" align="center">
          Please repeat the above appearing text marked in green.
        </Typography>
      </View>

      <View style={styles.videoContainer}>
        {file?.path ? (
          <RNVideo
            muted={false}
            paused={false}
            repeat
            ref={playerRef}
            source={{ uri: file.path }}
            style={styles.video}
            resizeMode="cover"
          />
        ) : kys.data?.videoKYSDocument ? (
          <RNVideo
            muted={false}
            paused={false}
            repeat
            ref={playerRef}
            source={{ uri: kys.data?.videoKYSDocument }}
            style={styles.video}
            resizeMode="cover"
          />
        ) : null}

        <TouchableOpacity style={styles.record} onPress={recordVideo}>
          <Icon name="square-rounded" size={26} color={theme.colors.background} />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          iconName="arrow-right"
          style={styles.button}
          onPress={onNext}
          isLoading={uploadFile.isLoading || updateVideo.isLoading}
        >
          Submit
        </Button>

        <Button
          iconName="arrow-right"
          style={styles.button}
          onPress={onNext}
          isLoading={uploadFile.isLoading || updateVideo.isLoading}
          backgroundColor="lightBackground"
          textColor="text"
        >
          Skip for Now
        </Button>
      </View>

      <View style={styles.bottomLogo}>
        <ScontoFullLogo />
      </View>
    </View>
  );
};

export default KYSVideoForm;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    heading: {
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      borderBottomColor: theme.colors.border,
      borderBottomWidth: 1,
      paddingVertical: theme.spacing.xs,
      marginBottom: theme.spacing.md,
    },
    buttonContainer: {
      marginVertical: theme.spacing.xxl,
    },
    button: {
      marginVertical: 4,
    },
    bottomLogo: {
      marginVertical: theme.spacing.xxl,
      alignItems: 'center',
    },
    textBannerContainer: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
      borderRadius: 20,
      marginBottom: theme.spacing.md,
    },
    textBanner: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      padding: theme.spacing.md,
      borderRadius: 20,
      marginHorizontal: -theme.spacing.md,
      marginTop: -theme.spacing.md,
      marginBottom: theme.spacing.md,
    },
    textBannerText: {
      color: theme.colors.primary,
    },
    videoContainer: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 20,
      height: wp(100),
    },
    record: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: -24,
      left: '50%',
      transform: [{ translateX: -24 }],
      backgroundColor: theme.colors.text,
      padding: 10,
      borderRadius: 40,
      overflow: 'hidden',
    },
    video: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
      overflow: 'hidden',
    },
  });
