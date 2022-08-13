import React from 'react';
import { StyleSheet } from 'react-native';

import { Chart } from '../Svgs';
import { Box, Text } from '../utils/theme';

const styles = StyleSheet.create({
  box1: { paddingTop: 40 },
  text1: {
    fontSize: 30,
    // fontFamily: 'RMedium'
  },
});

const Top = () => {
  return (
    <Box
      // paddingLeft="l"
      // paddingRight="l"
      style={styles.box1}>
      <Box flexDirection="row" justifyContent="space-between">
        <Text variant="title" style={styles.text1}>
          November
        </Text>
        <Chart />
      </Box>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        // marginTop="m"
      >
        <Box>
          <Text
            textAlign="center"
            // fontFamily="RRegular"
            variant="body"
            color="white">
            Income
          </Text>
          <Text
            textAlign="center"
            // fontFamily="SFBOLD"
            fontSize={13}
            color="green"
            fontWeight="700">
            {/* ₦{income} */}balance
          </Text>
        </Box>
        <Box>
          <Text
            textAlign="center"
            // fontFamily="RRegular"
            variant="body"
            color="white">
            Expenses
          </Text>
          <Text
            textAlign="center"
            fontSize={13}
            color="red"
            fontWeight="700"
            // fontFamily="SFBOLD"
          >
            {/* -₦{expense} */}balance
          </Text>
        </Box>
        <Box>
          <Text
            // fontFamily="RRegular"
            textAlign="center"
            variant="body"
            color="white">
            Balance
          </Text>
          <Text
            textAlign="center"
            fontWeight="700"
            // fontFamily="SFBOLD"
            fontSize={13}
            color="brown">
            {/* ₦{balance} */}balance
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
