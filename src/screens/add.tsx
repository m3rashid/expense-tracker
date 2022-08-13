import {
  StyleSheet,
  // Dimensions,
  TextInput,
} from 'react-native';
import {
  BorderlessButton,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import React, { FC, useState } from 'react';
import { StackActions } from '@react-navigation/native';

import theme, { Box, Text } from '../utils/theme';
import { BackArrow } from '../Svgs';

/* Dimension */
// const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  text1: { marginLeft: 30, fontSize: 18 },
  text2: { fontSize: 20 },
  textInput1: {
    padding: 10,
    fontSize: 30,
    fontFamily: 'RRegular',
    width: '80%',
  },
  textInput2: {
    fontSize: 30,
    fontFamily: 'RRegular',
    width: '80%',
  },
});

interface IProps {
  navigation: any;
}

const Add: FC<IProps> = ({ navigation }) => {
  const { navigate } = navigation;
  const [price, setPrice] = useState('');
  const [title, setTitle] = useState('');

  const onPop = () => {
    const popAction = StackActions.pop(1);
    navigation.dispatch(popAction);
  };

  const addTransaction = (_: any) => {};

  const onSubmit = () => {
    const transaction = {
      price,
      title,
    };

    if (!price || !title) {
      return;
    }

    addTransaction(transaction);
    setPrice('');
    setTitle('');
    navigate('Transactions');
  };

  return (
    <Box padding="l" flex={1}>
      <Box flexDirection="row" alignItems="center" paddingTop="l">
        <TouchableOpacity onPress={onPop}>
          <Box>
            <BackArrow />
          </Box>
        </TouchableOpacity>

        <Text variant="title1" color="primary2" style={styles.text1}>
          Add Amount
        </Text>
      </Box>

      <Box flexDirection="row" marginTop="xl">
        <Box
          justifyContent="space-between"
          flexDirection="row"
          alignItems="center"
          borderBottomWidth={2}
          paddingBottom="s"
          marginTop="m">
          <Text variant="title" color="primary">
            ₦
          </Text>

          <TextInput
            placeholderTextColor={theme.colors.primary}
            placeholder="Amount"
            keyboardType="number-pad"
            style={styles.textInput1}
            onChangeText={(p: any) => setPrice(p)}
            autoFocus={true}
            defaultValue={price}
          />

          <Text variant="title" color="primary" style={styles.text2}>
            NGN
          </Text>
        </Box>

        <Box marginTop="xl" borderBottomWidth={2}>
          <TextInput
            placeholderTextColor={theme.colors.primary}
            placeholder="Expenses made for"
            defaultValue={title}
            style={styles.textInput2}
            onChangeText={(t: any) => setTitle(t)}
          />
        </Box>

        <Box marginTop="xl">
          <BorderlessButton onPress={onSubmit}>
            <Box
              // borderRadius="l"
              height={55}
              backgroundColor="primary"
              alignItems="center"
              justifyContent="center">
              <Text variant="title1">Submit</Text>
            </Box>
          </BorderlessButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Add;
