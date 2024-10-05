import React, { useState } from 'react';
import { View, TextInput, Switch, TouchableOpacity, Image, ScrollView, Text } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Typography from './common/Typography';
import filterrange from '../assets/images/filter-range.png';

const FilterTransactionRange = ({ selectedFilters, onFilterChange }) => {
  const [minValue, setMinValue] = useState(0); // or any other numeric value
  const [maxValue, setMaxValue] = useState(1900); // or any other numeric value
  const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const [ispastFilterEnabled, setIspastFilterEnabled] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [isTransactionApprovalEnabled, setIsTransactionApprovalEnabled] = useState(false);
  const [selectedApprovalFilter, setSelectedApprovalFilter] = useState(null);
  const [currentFilters, setCurrentFilters] = useState(selectedFilters);
  // Initially nothing is selected

  const handleApplyFilter = () => {
    const newFilters = {
      ...currentFilters,
      transactionRange: {
        min: minValue,
        max: maxValue,
      },
      pastTransactions: ispastFilterEnabled ? selectedFilter : 'all',
      transactionApproval: isTransactionApprovalEnabled ? selectedApprovalFilter : 'all',
    };
    onFilterChange(newFilters);
    setCurrentFilters(newFilters); // Update currentFilters state
  };

  // const [minValue, setMinValue] = useState(0); // or any other numeric value
  // const [maxValue, setMaxValue] = useState(0); // or any other numeric value
  const handleSelectedFilter = (filter, filterType) => {
    if (filterType === 'pastTransactions') {
      setSelectedFilter(filter);
    } else if (filterType === 'transactionApproval') {
      setSelectedApprovalFilter(filter);
    }
  };
  const handleNumericInput = (text) => {
    // Remove Rupee symbol and any non-numeric characters
    const numericText = text.replace(/[^0-9.]/g, '');

    // Parse the numeric value
    const numericValue = parseFloat(numericText);

    // Return the valid numeric value or the current minValue
    return isFilterEnabled && !Number.isNaN(numericValue) ? numericValue : minValue;
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, maxWidth: '100%' }}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingRight: 'auto',
          }}
        >
          <Typography
            style={{
              marginTop: 20,
              marginLeft: 20,
              fontSize: 16,
              color: '#131313',
              fontWeight: '400',
            }}
          >
            Transaction Range
          </Typography>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              marginLeft: 'auto',
            }}
          >
            <Switch
              value={isFilterEnabled}
              onValueChange={(value) => setIsFilterEnabled(value)}
              thumbColor="#f4f3f4"
              trackColor={{ true: '#FFD645', false: '#f4f3f4' }}
              style={{
                transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
              }}
            />
          </View>
        </View>
        <Typography style={{ marginLeft: 20, fontSize: 12, color: '#a6a6a6', fontWeight: '400' }}>
          Select the range of your transactions.
        </Typography>
        <Image
          style={{
            marginLeft: 20,
            width: heightPercentageToDP(50),
            marginTop: 10,
            height: heightPercentageToDP(11),
            resizeMode: 'contain',
          }}
          source={filterrange}
        />

        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: 20, marginLeft: 20 }}>
            <Typography
              style={{
                marginLeft: 10,
                fontSize: 10,
                color: isFilterEnabled ? 'black' : '#CBCBCB',
                fontWeight: '400',
              }}
            >
              Minimum
            </Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
                padding: 8,
                borderRadius: 100,
                textAlign: 'center',
                width: '150%',
                backgroundColor: isFilterEnabled ? '#FFD645' : '#f4f3f4',
                color: isFilterEnabled ? 'black' : '#CBCBCB',
              }}
              placeholder="0"
              value={`₹ ${minValue.toString()}`}
              onChangeText={(text) => isFilterEnabled && setMinValue(handleNumericInput(text))}
              keyboardType="numeric"
              editable={isFilterEnabled}
            />
          </View>
          <View
            style={{
              marginTop: 1,
              marginLeft: 'auto',
              alignContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 80,
                width: 70,
                fontWeight: '100',
                color: '#CBCBCB',
                alignSelf: 'center',
              }}
            >
              -
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              marginEnd: 'auto',
            }}
          >
            <Typography
              style={{
                marginLeft: 20,
                fontSize: 10,
                color: isFilterEnabled ? 'black' : '#CBCBCB',
                fontWeight: '400',
              }}
            >
              Maximum
            </Typography>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
                padding: 8,
                borderRadius: 100,
                textAlign: 'center',
                width: '150%',
                backgroundColor: isFilterEnabled ? '#FFD645' : '#f4f3f4',
                color: isFilterEnabled ? 'black' : '#CBCBCB',
              }}
              placeholder="1900"
              value={`₹ ${maxValue.toString()}`}
              onChangeText={(text) => isFilterEnabled && setMaxValue(handleNumericInput(text))}
              keyboardType="numeric"
              editable={isFilterEnabled}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Typography
            style={{
              marginTop: 50,
              marginLeft: 20,
              fontSize: 16,
              color: '#131313',
              fontWeight: '400',
            }}
          >
            Past transactions
          </Typography>
          <View style={{ marginTop: 50, marginLeft: 'auto', flexDirection: 'row' }}>
            <Switch
              value={ispastFilterEnabled}
              onValueChange={(value) => setIspastFilterEnabled(value)}
              thumbColor="#f4f3f4"
              trackColor={{ true: '#FFD645', false: '#f4f3f4' }}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], marginRight: 'auto' }}
            />
          </View>
        </View>
        <Typography style={{ marginLeft: 20, fontSize: 11, color: '#a6a6a6', fontWeight: '400' }}>
          See your transaction for the last {'\n'}3 months or 6 months.
        </Typography>

        {/* <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
        <Switch
          value={isFilterEnabled}
          onValueChange={(value) => setIsFilterEnabled(value)}
          thumbColor="#FFD645"
          trackColor={{ true: '#FFD645', false: '#f4f3f4' }}
        />
      </View> */}

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                ispastFilterEnabled && selectedFilter === 'All' ? '#FFD645' : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '20%',
              alignSelf: 'center',
              marginLeft: 20,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              borderWidth: 1,
            }}
            onPress={() => handleSelectedFilter('All', 'pastTransactions')}
          >
            <Typography
              style={{
                color: ispastFilterEnabled && selectedFilter === 'All' ? '#131313' : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              all
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                ispastFilterEnabled && selectedFilter === '3 months' ? '#FFD645' : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '32%',
              alignSelf: 'center',
              marginLeft: 10,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              borderWidth: 1,
            }}
            onPress={() => handleSelectedFilter('3 months', 'pastTransactions')}
          >
            <Typography
              style={{
                color: ispastFilterEnabled && selectedFilter === '3 months' ? '#131313' : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              3 months
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                ispastFilterEnabled && selectedFilter === '6 months' ? '#FFD645' : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '32%',
              alignSelf: 'center',
              marginLeft: 10,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              marginRight: 'auto',
              borderWidth: 1,
            }}
            onPress={() => handleSelectedFilter('6 months', 'pastTransactions')}
          >
            <Typography
              style={{
                color: ispastFilterEnabled && selectedFilter === '6 months' ? '#131313' : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              6 months
            </Typography>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Typography
            style={{
              marginTop: 50,
              marginLeft: 20,
              fontSize: 16,
              color: '#131313',
              fontWeight: '400',
            }}
          >
            Transaction approvals
          </Typography>
          <View style={{ marginTop: 50, flexDirection: 'row', marginLeft: 'auto' }}>
            <Switch
              value={isTransactionApprovalEnabled}
              onValueChange={(value) => setIsTransactionApprovalEnabled(value)}
              thumbColor="#f4f3f4"
              trackColor={{ true: '#FFD645', false: '#f4f3f4' }}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>
        <Typography style={{ marginLeft: 20, fontSize: 11, color: '#a6a6a6', fontWeight: '400' }}>
          Select Accept or Decline to sort your {'\n'}
          transactions.
        </Typography>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                isTransactionApprovalEnabled && selectedApprovalFilter === 'all'
                  ? '#FFD645'
                  : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '20%',
              alignSelf: 'center',
              marginLeft: 20,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              borderWidth: 1,
            }}
            onPress={() => handleSelectedFilter('all', 'transactionApproval')}
          >
            <Typography
              style={{
                color:
                  isTransactionApprovalEnabled && selectedApprovalFilter === 'all'
                    ? '#131313'
                    : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              all
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                isTransactionApprovalEnabled && selectedApprovalFilter === 'accepted'
                  ? '#FFD645'
                  : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '32%',
              alignSelf: 'center',
              marginLeft: 10,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              borderWidth: 1,
            }}
            onPress={() => handleSelectedFilter('accepted', 'transactionApproval')}
          >
            <Typography
              style={{
                color:
                  isTransactionApprovalEnabled && selectedApprovalFilter === 'accepted'
                    ? '#131313'
                    : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              Accept
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor:
                isTransactionApprovalEnabled && selectedApprovalFilter === 'declined'
                  ? '#FFD645'
                  : '#f4f3f4',
              borderRadius: 80,
              padding: 12,
              width: '32%',
              alignSelf: 'center',
              marginLeft: 10,
              borderColor: isFilterEnabled ? '#CBCBCB' : 'lightgray',
              borderWidth: 1,
              marginRight: 'auto',
            }}
            onPress={() => handleSelectedFilter('declined', 'transactionApproval')}
          >
            <Typography
              style={{
                color:
                  isTransactionApprovalEnabled && selectedApprovalFilter === 'declined'
                    ? '#131313'
                    : '#CBCBCB',
                fontSize: 14,
                fontWeight: '400',
                alignSelf: 'center',
              }}
            >
              Decline
            </Typography>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            marginTop: 40,
            marginBottom: 40,
            backgroundColor:
              isFilterEnabled || ispastFilterEnabled || isTransactionApprovalEnabled
                ? '#FFD645'
                : '#f4f3f4',
            borderRadius: 20,
            padding: 12,
            width: '60%',
            alignSelf: 'center',
          }}
          onPress={handleApplyFilter}
        >
          <Typography
            style={{ color: '#131313', fontSize: 14, fontWeight: '400', textAlign: 'center' }}
          >
            Apply
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </ScrollView>
  );
};

export default FilterTransactionRange;
