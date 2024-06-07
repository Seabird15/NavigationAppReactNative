import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/share/HamburguerMenu';

import {IonIcons} from '../../components/share/IonIcons';
import {globalStyles} from '../../theme/theme';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <Text style={globalStyles.titleText}>Muro</Text>
      <IonIcons name="rocket-outline" />
    </View>
  );
};
