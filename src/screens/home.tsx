import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Add from './add';
import Onboarding from './onBoarding';
import Transactions from './transactions';

export const assets = [];

const ExpenseStack = createStackNavigator();

export const ExpenseNavigator = () => {
  return (
    <ExpenseStack.Navigator initialRouteName="Transactions">
      <ExpenseStack.Screen name="ExpenseOnboarding" component={Onboarding} />
      <ExpenseStack.Screen name="Transactions" component={Transactions} />
      <ExpenseStack.Screen name="AddTransaction" component={Add} />
    </ExpenseStack.Navigator>
  );
};
