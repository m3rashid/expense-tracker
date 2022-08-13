import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import React, { FC } from 'react';
// import { withTransition } from 'react-native-redash';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { Delete } from '../Svgs';
import theme, { Box, Text } from '../utils/theme';

const styles: Record<
  string,
  StyleProp<any> | ((...args: any[]) => StyleProp<any>)
> = {
  view1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: theme.spacing.l,
  } as StyleProp<ViewStyle>,
  view2: (delX: number | string) => ({
    fontSize: 12,
    color: 'white',
    fontWeight: '900',
    position: 'absolute',
    height: 50,
    width: '14%',
    right: delX,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  }),
  text1: (hidePrice: string | number, price: number) => ({
    opacity: hidePrice,
    color: price > 0 ? '#009BFC' : '#FF4500',
  }),
};

interface IProps {
  index?: any;
  transition?: any;
  onTap?: any;
  onDelete?: any;
  item?: any;
}

const Expense: FC<IProps> = ({ index, onTap, onDelete, item }) => {
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => {
          onTap();
        }}>
        <View>
          <Box
            overflow="hidden"
            paddingHorizontal="l"
            borderBottomWidth={1}
            borderBottomColor="silver"
            height={50}
            position="relative">
            <View style={[StyleSheet.absoluteFill, {}]}>
              <View style={styles.view1}>
                <Text>{item.title}</Text>
                <Text style={styles.text1}>
                  {item.price > 0
                    ? `₦${item.price}`
                    : `- ₦${Math.abs(item.price)}`}
                </Text>
              </View>
            </View>

            <View style={styles.view2}>
              <Text>
                <TouchableOpacity
                  onPress={() => {
                    onDelete(index);
                  }}>
                  <Delete />
                </TouchableOpacity>
              </Text>
            </View>
          </Box>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Expense;
