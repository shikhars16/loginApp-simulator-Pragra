// navigation/MainStackNavigator.js
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import LoginScreen from './screens/loginScreen';
import RegisterScreen from './screens/registerScreen';
import HomeScreen from './screens/homeScreen';


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
