import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExpenseNavigator } from './src/screens/home';
import { RecoilRoot } from 'recoil';

const AppStack = createStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <RecoilRoot>
        <SafeAreaProvider>
          <AppStack.Navigator>
            <AppStack.Screen
              name="ExpenseTracker"
              component={ExpenseNavigator}
            />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
};

export default App;
