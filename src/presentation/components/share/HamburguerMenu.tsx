import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, Text} from 'react-native';

import {IonIcons} from '../share/IonIcons';

export const HamburguerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcons name="menu-outline" size={32} />
        </Pressable>
      ),
    });
  }, []);
  return <></>;
};
