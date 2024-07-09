// navigation/MainStackNavigator.js
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './loginScreen';
import RegisterScreen from './registerScreen';
import HomeScreen from './homeScreen';


const MainStack = createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(MainStack);
