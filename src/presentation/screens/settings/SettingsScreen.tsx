import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/share/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>SettingsScreen</Text>

      <PrimaryButton onPress={() => navigator.goBack()} label="Regresar" />

      <PrimaryButton
        label="Regresar al Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
