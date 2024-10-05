import { FlatList, Modal, RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';
import Animated, {
  Easing,
  useAnimatedStyle,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import CheckBox from '@react-native-community/checkbox';
import { debounce, isFunction } from 'lodash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import validator from 'validator';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import type { ExtendedTheme } from '../../types';
import Typography from './Typography';
import Button from './Button';
import { useSearchInstitution } from '../../api/queries/institution.queries';
import FloatingTextInput, { FloatingTextInputProps } from './FloatingTextInput';
import ArrowUpDropDown from '../../assets/svg/ArrowUpDropDown';

type OptionValue = string | number | null | undefined;

interface Option {
  label: string;
  value: OptionValue;
}

interface SelectInstituteProps {
  label: FloatingTextInputProps['label'];
  required?: boolean;
  error?: string;
  value?: OptionValue;
  onChange?: (value: OptionValue) => void;
  onFocus?: () => void;
}

const SelectInstitute: React.FC<SelectInstituteProps> = ({
  label,
  required = false,
  error,
  value,
  onChange,
  onFocus,
}) => {
  const safeArea = useSafeAreaInsets();
  const theme = useTheme();
  const styles = React.useMemo(() => createStyles(theme, !!error), [theme, error]);

  const [open, setOpen] = React.useState(false);
  const toggle = React.useCallback(() => {
    setOpen((o) => !o);
  }, [setOpen]);

  const [query, setQuery] = React.useState<string>('');
  const [search, setSearch] = React.useState('');
  const debounceChangeHandler = React.useCallback(debounce(setQuery, 500), []);

  const handleChange = (text: string) => {
    setSearch(text);
    debounceChangeHandler(text);
  };

  const institutions = useSearchInstitution(query);

  const options: Array<Option> = React.useMemo(
    () =>
      institutions.data?.pages
        .map((page) => page.institutions)
        .flat()
        .map((institute) => ({
          label: institute.name,
          value: institute._id,
        })) ?? [],
    [institutions]
  );

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

  const flatListRef = React.useRef<FlatList | null>(null);

  // React.useEffect(() => {
  //   if (institutions.isFetchingNextPage) {
  //     // flatListRef?.current?.scrollToEnd();
  //   }
  // }, [institutions.isFetchingNextPage]);

  const handleAddNewInstitute = () => {
    if (isFunction(onChange)) {
      onChange(search);
      toggle();
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.text, labelStyle]}>
        {isFunction(label) ? label(!!error) : label}
        {required ? <Animated.Text style={styles.required}>*</Animated.Text> : null}
      </Animated.Text>

      <TouchableOpacity onPress={toggle} style={styles.input}>
        <Typography style={styles.inputText} color="dark">
          {value ? (validator.isMongoId(String(value)) ? selectedLabel : value) : selectedLabel}
        </Typography>
      </TouchableOpacity>

      {error ? (
        <Animated.Text style={[styles.errorText, errorTextStyle]}>{error}</Animated.Text>
      ) : null}

      <Modal visible={open} onRequestClose={toggle} transparent>
        <View
          style={[styles.content, { paddingTop: safeArea.top, paddingBottom: safeArea.bottom }]}
        >
          <View style={styles.header}>
            <Typography style={styles.headerText} color="dark">
              College Name
            </Typography>

            <TouchableOpacity onPress={toggle}>
              <Icon name="close" color={theme.colors.dark} size={24} />
            </TouchableOpacity>
          </View>

          <FloatingTextInput
            value={search}
            onChangeText={handleChange}
            onFocus={onFocus}
            style={{ paddingVertical: 13 }}
            right={
              <TouchableOpacity onPress={handleAddNewInstitute} style={{ marginRight: 20 }}>
                <ArrowUpDropDown />
              </TouchableOpacity>
            }
          />

          {/* <Typography mb={8} fontSize={12} color="border">
            If not present, write your full college name and then press on ADD
          </Typography> */}
          <View style={styles.detailsContainer}>
            <FlatList
              ref={flatListRef}
              refreshControl={
                <RefreshControl
                  refreshing={institutions.isFetching}
                  onRefresh={institutions.refetch}
                  colors={[theme.colors.primary]}
                />
              }
              initialNumToRender={10}
              onEndReached={() => institutions.fetchNextPage()}
              onEndReachedThreshold={0.1}
              showsVerticalScrollIndicator={false}
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
                  {/* <CheckBox
                  disabled
                  value={item.value === selected}
                  tintColors={{ true: theme.colors.text, false: theme.colors.border }}
                  tintColor={theme.colors.border}
                /> */}
                  <Typography style={styles.optionText} color="dark">
                    {item.label}
                  </Typography>
                </TouchableOpacity>
              )}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
          </View>

          {/* <Button
            iconName="close"
            onPress={() => {
              setSelected(undefined);
              if (onChange) onChange(undefined);
              toggle();
            }}
            style={styles.clearButton}
          >
            Clear
          </Button> */}
        </View>
      </Modal>
    </View>
  );
};

export default SelectInstitute;

const createStyles = (theme: ExtendedTheme, isError?: boolean) =>
  StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    content: {
      flex: 1,
      backgroundColor: theme.colors.white,
      margin: theme.spacing.md,
      borderColor: theme.colors.text,
      borderWidth: 1,
      padding: theme.spacing.md,
      borderRadius: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
    detailsContainer: {
      backgroundColor: theme.colors.grayBackground,
      marginTop: 20,
      borderRadius: 28,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.sm,
      height: heightPercentageToDP(68),
    },
    headerText: {
      ...theme.fonts.medium,
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: theme.colors.dark,
      marginVertical: theme.spacing.sm,
    },
    optionContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    optionText: {
      marginLeft: theme.spacing.sm,
      marginVertical: 2,
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
      borderColor: isError ? theme.colors.error : theme.colors.transparent,
      borderWidth: 1,
      borderRadius: 99,
      fontSize: theme.fontSize.large,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: 12,
      backgroundColor: theme.colors.inputBackground,
    },
    inputText: {
      color: theme.colors.dark,
      ...theme.fonts.regular,
      fontSize: theme.fontSize.large,
      minHeight: theme.fontSize.small + theme.spacing.sm * 2,
    },
  });
