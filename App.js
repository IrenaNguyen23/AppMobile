import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCart from './components/screens/MyCart';
import ProductInfo from './components/screens/ProductInfo';
import Home from './components/screens/Home';
import LoginScreen from './components/screens/Login';
import SignUpScreen from './components/screens/SignUp';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import PaymentSelectionScreen from './components/screens/Payment';
import Location from './components/screens/GeoLocation';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="ProductInfo" component={ProductInfo} />
          <Stack.Screen name="Payment" component={PaymentSelectionScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Location" component={Location} />

        </Stack.Navigator>
      </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
export default App;