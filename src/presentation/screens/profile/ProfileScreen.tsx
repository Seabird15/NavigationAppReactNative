import {Pressable, Text, View} from 'react-native';
import {PrimaryButton} from '../../components/share/PrimaryButton';
import {globalColors, globalStyles} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={globalStyles.container}>
        <View style={{flex: 10}}>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: globalColors.primary,
              alignSelf: 'center',
              marginTop: 20,
              borderRadius: 100,
            }}></View>
          <View>
            <Text style={globalStyles.titleText}>Editar Perfil</Text>
            <TextInput
              placeholder="Nombre"
              style={{
                borderWidth: 1,
                borderColor: globalColors.border,
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
              }}
            />
            <TextInput
              placeholder="Apellido"
              style={{
                borderWidth: 1,
                borderColor: globalColors.border,
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                borderWidth: 1,
                borderColor: globalColors.border,
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
              }}
            />
            <TextInput
              placeholder="Contraseña"
              style={{
                borderWidth: 1,
                borderColor: globalColors.border,
                borderRadius: 5,
                padding: 10,
                marginVertical: 10,
              }}
            />
            <PrimaryButton label="Guardar Cambios" onPress={() => {}} />
          </View>
        </View>
        <View style={{flex: 1}}>
          <PrimaryButton
            label="Ir al Home"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </>
  );
};
