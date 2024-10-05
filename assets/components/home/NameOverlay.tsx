import { StyleSheet, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Typography from '../common/Typography';
import type { ExtendedTheme } from '../../types';
import { useStudent } from '../../store/selector';

interface NameOverlayProps {
  position: 'top' | 'middle' | 'bottom';
}

const NameOverlay: React.FC<NameOverlayProps> = ({ position }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);
  const [student] = useStudent();
  return (
    <View
      style={[
        styles.container,
        position === 'top'
          ? styles.topContainer
          : position === 'bottom'
          ? styles.bottomContainer
          : styles.middleContainer,
      ]}
    >
      <Typography color="dark" fontStyle="semibold">
        Sconto • {student.firstName} • Sconto • {student.firstName} • Sconto • {student.firstName}
      </Typography>
    </View>
  );
};

export default NameOverlay;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      width: '200%',
      paddingVertical: 10,
      backgroundColor: theme.colors.white,
      //   zIndex: 1,
    },
    middleContainer: {
      top: '55%',
      left: -30,
      transform: [{ skewY: '30deg' }],
    },
    topContainer: { top: '-10%', left: -30, transform: [{ skewY: '-25deg' }] },
    bottomContainer: {
      top: '85%',
      left: 20,
      transform: [{ skewY: '-40deg' }],
    },
  });
