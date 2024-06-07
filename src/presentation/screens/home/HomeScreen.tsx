import {Pressable, View, Text} from 'react-native';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import {PrimaryButton} from '../../components/share/PrimaryButton';
import {globalStyles} from '../../theme/theme';
import {type RootStackParams} from '../../routes/StackNavigator';
import {useEffect} from 'react';
import {IonIcons} from '../../components/share/IonIcons';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          //Crear boton para abrir menu lateral
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcons name="menu-outline" size={32} />
        </Pressable>
      ),
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        label="Entrenamientos"
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label="Notas"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
