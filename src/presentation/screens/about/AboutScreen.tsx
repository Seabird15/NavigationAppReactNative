import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import {globalStyles, styles} from '../../theme/theme';

export const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={globalStyles.containerAboutTop}>
        <Image
          style={{width: 100, height: 100, alignSelf: 'center'}}
          source={require('../../assets/logo.png')}
        />
        <Text style={globalStyles.titleText}>
          Club Deportivo Social y Cultural Vikingas
        </Text>
        <View>
          <Text style={styles.subtitle}>
            Fundado en 2019 por y para mujeres. Buscamos el sentido de
            pertencencia y la toma de los espacios para desarrollar el deporte y
            la comunidad
          </Text>
        </View>
      </View>
      <View style={globalStyles.containerAboutMiddle}>
        <Text style={globalStyles.titleText}>Nuestra Historia</Text>
        <Text style={styles.subtitle}>
          El Club Deportivo Vikingas es una organización deportiva fundada en
          2019 en la comuna de Puente Alto, Chile. Este club fue creado por y
          para mujeres de la comuna, con el propósito de fomentar el deporte
          femenino y ofrecer un espacio de inclusión y desarrollo para las
          jugadoras.
        </Text>

        <Text style={styles.sectionTitle}>Jugadoras Activas:</Text>
        <Text style={styles.info}>Más de 40</Text>
        <Text style={styles.sectionTitle}>Logros Deportivos:</Text>
        <Text style={styles.info}>
          - Campeonas del torneo Espartano Iniciación
        </Text>
        <Text style={styles.info}>- Subcampeonas de la Copa Plata MF 2020</Text>
        <Text style={styles.info}>
          - Subcampeonas de la Copa Comuna La Cisterna
        </Text>

        <Text style={styles.info}>- Subcampeonas de la Copa Conferencias</Text>
        <Text style={styles.info}>- Tercer lugar en la Copa Dobleve</Text>
        <Text style={styles.info}>
          - Tercer lugar en el torneo Espartano Todo Competidor
        </Text>
      </View>
      <View style={globalStyles.containerAboutBottom}>
        <Text style={globalStyles.titleText}>Plantel</Text>
        <View>
          <Image
            style={globalStyles.imgContainer}
            source={require('../../assets/equipo.jpeg')}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Image
            style={globalStyles.imgContainer}
            source={require('../../assets/foto4.jpeg')}
          />
        </View>
        <View>
          <Image
            style={globalStyles.imgContainer}
            source={require('../../assets/foto2.jpeg')}
          />
        </View>
      </View>
    </ScrollView>
  );
};
