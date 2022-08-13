import React, { FC, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Dimensions, View, ImageBackground, Text } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import theme from '../utils/theme';
import { Esplash } from '../../assets/images';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  imagebackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  view1: {
    paddingLeft: theme.spacing.l,
    paddingBottom: theme.spacing.l,
    width: width * 0.8,
    marginBottom: 52,
  },
  text1: {
    fontSize: moderateScale(30),
    color: theme.colors.white,
    fontFamily: 'RBlack',
    marginBottom: theme.spacing.l,
  },
  text2: {
    fontSize: moderateScale(14),
    color: 'white',
    lineHeight: 25,
    fontFamily: 'RRegular',
  },
});

interface IProps {
  navigation: any;
}

const Onboarding: FC<IProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Transactions');
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ImageBackground source={Esplash} style={styles.imagebackground}>
      <View style={styles.view1}>
        <Text style={styles.text1}>Expense Tracker</Text>

        <Text style={styles.text2}>
          Stay on track with your expenses so you&apos;ll never run out of money
          again! Start budgeting and saving so you can afford nice things.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
