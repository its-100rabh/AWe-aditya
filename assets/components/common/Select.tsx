import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { isFunction } from 'lodash';
import ReactNativeModal from 'react-native-modal';
import type { ExtendedTheme } from '../../types';
import Typography from './Typography';
import Button from './Button';
import { FloatingTextInputProps } from './FloatingTextInput';

type OptionValue = string | number | null | undefined;

interface Option {
  label: string;
  value: OptionValue;
}

export interface SelectProps {
  label: FloatingTextInputProps['label'];
  required?: boolean;
  error?: string;
  options?: Array<Option>;
  value?: OptionValue;
  onChange?: (value: OptionValue) => void;
}

const Select: React.FC<SelectProps> = ({
  label,
  required = false,
  error,
  options = [],
  value,
  onChange,
}) => {
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme, !!error), [theme, error]);

  const [open, setOpen] = React.useState(false);
  const toggle = React.useCallback(() => {
    setOpen((o) => !o);
  }, [setOpen]);

  const [selected, setSelected] = React.useState<OptionValue>();
  const selectedLabel = React.useMemo(
    () => options.find((option) => option.value === selected)?.label,
    [selected]
  );

  React.useEffect(() => {
    setSelected(options?.find((option) => option.value === value)?.value);
  }, [value]);

  const labelStyle = useAnimatedStyle(
    () => ({
      color: error ? theme.colors.error : selected ? theme.colors.border : theme.colors.border,
    }),
    [selected]
  );

  const errorTextStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateX: error
            ? withDelay(
                200,
                withSequence(
                  withTiming(10, {
                    duration: 200,
                    easing: Easing.bounce,
                  }),
                  withTiming(0, {
                    duration: 200,
                    easing: Easing.bounce,
                  })
                )
              )
            : 0,
        },
      ],
    }),
    [error]
  );

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, labelStyle]}>
        {isFunction(label) ? label(!!error) : label}
        {required ? <Animated.Text style={styles.required}>*</Animated.Text> : null}
      </Animated.Text>

      <TouchableOpacity onPress={toggle} style={styles.input}>
        <Typography style={styles.inputText}>{selectedLabel}</Typography>
      </TouchableOpacity>

      {error ? (
        <Animated.Text style={[styles.errorText, errorTextStyle]}>{error}</Animated.Text>
      ) : null}

      <ReactNativeModal
        isVisible={open}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
        style={styles.modal}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Typography style={styles.headerText}>
              {isFunction(label) ? label(!!error) : label}
            </Typography>

            <TouchableOpacity onPress={toggle}>
              <Icon name="close" color={theme.colors.text} size={24} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={options}
            keyExtractor={(item) => item.label + item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionContainer}
                onPress={() => {
                  setSelected(item.value);
                  if (onChange) onChange(item.value);
                  toggle();
                }}
              >
                <CheckBox
                  disabled
                  value={item.value === selected}
                  tintColors={{ true: theme.colors.text, false: theme.colors.border }}
                  tintColor={theme.colors.border}
                />
                <Typography style={styles.optionText}>{item.label}</Typography>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.divider} />}
          />
          <Button
            iconName="close"
            onPress={() => {
              setSelected(undefined);
              if (onChange) onChange(undefined);
              toggle();
            }}
            style={styles.clearButton}
          >
            Clear
          </Button>
        </View>
      </ReactNativeModal>
    </View>
  );
};

export default Select;

const createStyles = (theme: ExtendedTheme, isError?: boolean) =>
  StyleSheet.create({
    modal: {
      margin: 0,
      padding: 0,
      justifyContent: 'flex-end',
    },
    container: {
      marginBottom: theme.spacing.md,
    },
    content: {
      backgroundColor: theme.colors.background,
      borderColor: theme.colors.text,
      borderWidth: 1,
      padding: theme.spacing.md,
      borderRadius: 25,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.lg,
    },
    headerText: {
      ...theme.fonts.medium,
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: theme.colors.text,
      marginVertical: theme.spacing.sm,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      marginLeft: theme.spacing.sm,
    },
    clearButton: {
      marginTop: theme.spacing.md,
    },
    text: {
      color: theme.colors.text,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.medium,
      marginBottom: theme.spacing.sm,
    },
    required: {
      color: theme.colors.primary,
      ...theme.fonts.regular,
      position: 'absolute',
      fontSize: theme.fontSize.large,
      left: theme.spacing.sm,
      top: 0,
    },
    errorText: {
      color: theme.colors.error,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.small,
    },
    input: {
      ...theme.fonts.regular,
      color: theme.colors.text,
      borderColor: isError ? theme.colors.error : theme.colors.lightBackground,
      borderWidth: 1,
      borderRadius: 15,
      fontSize: theme.fontSize.large,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      backgroundColor: theme.colors.lightBackground,
    },
    inputText: {
      color: theme.colors.text,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.large,
      minHeight: theme.fontSize.small + theme.spacing.sm * 2,
    },
  });
