import React, { FC } from 'react';
import dayjs from 'dayjs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground, SectionList, View, StyleSheet } from 'react-native';

import Top from '../components/top';
import { AddIcon, Delete } from '../Svgs';
import { Ebg1 } from '../../assets/images';
// import Expense from '../components/expense';
import theme, { Box, Text } from '../utils/theme';

export const moneySign = '₦';

const styles = StyleSheet.create({
  imageBackground1: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  view0: { borderRadius: 20, backgroundColor: 'red' },
  view1: {
    fontSize: 12,
    color: 'white',
    fontWeight: '900',
    position: 'absolute',
    height: 50,
    width: '14%',
    right: -20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  view2: { backgroundColor: 'white' },
  view3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: theme.spacing.m,
  },
  box1: { position: 'absolute', right: 20, bottom: 50, zIndex: 4 },
});

interface IProps {
  navigation: any;
}

const Transactions: FC<IProps> = ({ navigation }) => {
  const { navigate } = navigation;

  const onNavigate = () => {
    navigate('AddTransaction');
  };

  const renderHeader = ({ section: { data } }: { section: { data: any } }) => {
    return (
      <Box
        paddingHorizontal="m"
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="silver"
        paddingBottom="s"
        paddingTop="s"
        marginTop="m"
        // borderTopRightRadius="m"
        // borderTopLeftRadius="m"
      >
        <Text color="silver1">{dayjs(data[0].addedtime).format('MMM DD')}</Text>
        Prices
        {/* <Prices time={data[0].addedtime} /> */}
      </Box>
    );
  };

  const renderFooter = () => {
    return (
      <Box
        paddingHorizontal="m"
        backgroundColor="white"
        flexDirection="row"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="silver"
        paddingBottom="s"
      />
    );
  };

  return (
    <ImageBackground source={Ebg1} style={styles.imageBackground1}>
      <Top />

      <Box flex={1}>
        {/* @ts-ignore */}
        <SectionList
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          keyExtractor={(item: any, index: number) => item + index}
          renderItem={() => {
            // const index = item.id;

            return (
              <View style={styles.view0}>
                <Box
                  overflow="hidden"
                  borderBottomWidth={1}
                  borderBottomColor="silver"
                  height={50}
                  position="relative"
                  // backgrjoundColor="white"
                >
                  <View style={styles.view1}>
                    <Text>
                      <Delete />
                    </Text>
                  </View>
                  <View style={styles.view2}>
                    {/* <Expense
                      onTap={() => {
                        active.setValue(index);
                      }}
                      {...{ transition, index, onDelete, item, allDates }}
                      > */}
                    <Box
                      overflow="hidden"
                      paddingHorizontal="m"
                      borderBottomWidth={1}
                      borderBottomColor="silver"
                      height={50}
                      position="relative"
                      backgroundColor="white">
                      <View style={[StyleSheet.absoluteFill, {}]}>
                        <View style={styles.view3} />
                      </View>
                    </Box>
                    {/* </Expense> */}
                  </View>
                </Box>
              </View>
            );
          }}
          renderSectionHeader={renderHeader}
          renderSectionFooter={renderFooter}
          // sections={DATA}
        />
      </Box>
      <Box style={styles.box1}>
        <TouchableOpacity onPress={onNavigate}>
          <AddIcon />
        </TouchableOpacity>
      </Box>
    </ImageBackground>
  );
};

export default Transactions;
