import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {View, useWindowDimensions} from 'react-native';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {IonIcons} from '../components/share/IonIcons';

const Drawer = createDrawerNavigator();
export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => (
        <CustomDrawerContent {...props}></CustomDrawerContent>
      )}
      screenOptions={{
        headerShown: false,
        //Empujar contenido y mostrar fijo desde 768 px
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide',

        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 10,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="add-circle-outline" color={color} size={32} />
          ),
        }}
        name="Home"
        component={BottomTabsNavigator}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="person-circle-outline" color={color} size={32} />
          ),
        }}
        name="Ver mi Perfil"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Crear Vista perfil  */}
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      {/* <Text>Hola Mundo</Text> */}
    </DrawerContentScrollView>
  );
};
