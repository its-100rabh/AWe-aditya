import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import Checkbox from '../common/Checkbox';
import type { ExtendedTheme } from '../../types';
import Button from '../common/Button';
import Typography from '../common/Typography';

interface BottomModalProps {
  onPress: () => void;
  isLoading?: boolean;
}

const BottomModal: React.FC<BottomModalProps> = ({ onPress, isLoading }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={[styles.flexItem, styles.marginAlign]}>
          <View style={{ marginRight: 10 }}>
            <Checkbox onChange={() => setIsChecked(!isChecked)} isChecked={!isChecked} />
          </View>
          <Typography color="dark">
            By continuing, you accept our Terms & Conditions, including data collection in
            compliance with Indian laws
          </Typography>
        </View>
        <View style={styles.buttonConatiner}>
          <Button
            iconName="chevron-right"
            iconBackgroundColor={isChecked ? theme.colors.dark : theme.colors.darkShade}
            iconColor={theme.colors.white}
            borderColor={isChecked ? theme.colors.transparent : theme.colors.darkShade}
            textColor="dark"
            backgroundColor={isChecked ? 'primary' : 'transparent'}
            style={styles.button}
            iconSize={18}
            paddingVertical={18}
            rightIconPosition={20}
            isLoading={isLoading}
            buttonWidth={60}
            fontSize={22}
            textMarginBottom={-4}
            onPress={onPress}
            disabled={!isChecked}
          >
            Next
          </Button>
        </View>
        <View style={styles.marginAlignBottom}>
          <Icon name="alert-circle-outline" color={theme.colors.dark} size={20} />
          <Typography color="dark">
            {!isChecked
              ? 'You need to accept the T&C to continue.'
              : 'It’s great to have you with us.'}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default BottomModal;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.inputBackground,
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: heightPercentageToDP(40),
    },
    containerContent: {
      width: '90%',
      alignSelf: 'center',
    },
    button: {
      alignSelf: 'flex-end',
    },
    skipButton: {
      alignSelf: 'flex-start',
    },
    flexItem: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    buttonConatiner: {
      marginVertical: 20,
    },
    checkBox: {
      height: 20,
      width: 20,
    },
    marginAlign: {
      marginVertical: 30,
      alignSelf: 'center',
    },
    marginAlignBottom: {
      position: 'absolute',
      bottom: -20,
      alignSelf: 'center',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
