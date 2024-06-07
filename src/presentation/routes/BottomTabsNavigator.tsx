import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
// import {Tab2Screen} from '../screens/tabs/Tab2Screen';
// import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';

import {IonIcons} from '../components/share/IonIcons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        // headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },

        tabBarActiveTintColor: globalColors.primary,
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Club',
          tabBarIcon: ({color}) => (
            <IonIcons color={color} name="shield-half-outline" />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({color}) => (
            <IonIcons color={color} name="person-circle-outline" />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Ir al Home',
          tabBarIcon: ({color}) => (
            <IonIcons color={color} name="home-outline" />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
