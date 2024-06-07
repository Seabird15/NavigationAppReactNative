import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {AboutScreen} from '../screens/about/AboutScreen';
import {HamburguerMenu} from '../components/share/HamburguerMenu';
import {IonIcons} from '../components/share/IonIcons';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburguerMenu />
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: () => <IonIcons name="person-outline" />,
          }}
          name="Editar Perfil"
          component={ProfileScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: () => <IonIcons name="football-outline" />,
          }}
          name="Sobre el CLUB"
          component={AboutScreen}
        />
      </Tab.Navigator>
    </>
  );
};
