import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import type { ExtendedTheme } from '../../types';
import Typography from '../common/Typography';
import Button from '../common/Button';
import ControlledFloatingTextInput from '../common/form/ControlledFloatingTextInput';

interface AcademicSessionCardProps {
  style?: StyleProp<ViewStyle>;
  onNext: () => void;
}

const AcademicSessionCard: React.FC<AcademicSessionCardProps> = ({ style, onNext }) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme), [theme]);

  const inputs = React.useRef<Record<string, TextInput | null>>({
    'academicSession.startYear': null,
    'academicSession.endYear': null,
  });

  return (
    <View style={style}>
      <View style={styles.textContainer}>
        <Typography fontSize={38} fontStyle="bold">
          And, your
        </Typography>
        <Typography fontSize={38} fontStyle="bold" color="primary">
          Academic Year?
        </Typography>
      </View>

      <View style={styles.inputContainer}>
        <ControlledFloatingTextInput
          ref={(el) => {
            inputs.current['academicSession.startYear'] = el;
          }}
          label={(isError) => (
            <>
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                Start
              </Typography>
              {' Year'}
            </>
          )}
          name="academicSession.startYear"
          keyboardType="numeric"
          containerStyle={styles.inputStart}
          returnKeyType="next"
          onNext={() => inputs.current?.['academicSession.endYear']?.focus()}
        />
        <ControlledFloatingTextInput
          ref={(el) => {
            inputs.current['academicSession.endYear'] = el;
          }}
          label={(isError) => (
            <>
              <Typography color={isError ? 'error' : 'border'} fontStyle="semibold">
                End
              </Typography>
              {' Year'}
            </>
          )}
          name="academicSession.endYear"
          keyboardType="numeric"
          containerStyle={styles.inputStart}
          returnKeyType="next"
          onNext={() => onNext()}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button iconName="arrow-right" onPress={onNext}>
          Next
        </Button>
      </View>
    </View>
  );
};

export default AcademicSessionCard;

const createStyles = (theme: ExtendedTheme) =>
  StyleSheet.create({
    form: {},
    textContainer: {
      height: 300,
      overflow: 'hidden',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: theme.spacing.md,
    },
    inputContainer: {
      flexDirection: 'row',
    },
    inputStart: {
      flex: 1,
      marginRight: theme.spacing.md,
    },
    inputEnd: {
      flex: 1,
      marginLeft: theme.spacing.md,
    },
  });
