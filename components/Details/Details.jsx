import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert } from 'react-native';
import { estilos } from "./DetailsStyles";
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../NavBar/NavBar';
import AppStatusBar from '../StatusBar/StatusBar';

export default function Details({route, navigation}) {
  const ciudad = route.params;
  return (
      <SafeAreaView>
          <View style={estilos.container}>
              <View style={estilos.nav}>
                  <NavBar navigation={navigation}/>
              </View>
              <View style={estilos.card}>
                    <View style={estilos.contenedorTitulo}>
                        <Text style={estilos.titulo}>{ciudad.name}</Text>
                    </View>
                    <View style={estilos.contenedorImagen}>
                        <Image source={{uri:`https://openweathermap.org/img/wn/${ciudad.img}@2x.png`}} 
                                style={{width:"100%", height:"100%"}}
                        />
                    </View>
                    <View style={estilos.contenedorInfo}>
                        <View style={estilos.contTituloInfo}>
                            <Text style={estilos.tituloInfo}>Temperatura:</Text>
                            <Text style={estilos.tituloInfo}>Sensación térmica:</Text> 
                            <Text style={estilos.tituloInfo}>Clima:</Text>
                            <Text style={estilos.tituloInfo}>Humedad:</Text>
                            <Text style={estilos.tituloInfo}>Viento:</Text>
                            <Text style={estilos.tituloInfo}>Nubosidad:</Text>
                        </View>
                        <View style={estilos.contDatosInfo}>
                            <Text style={estilos.datos}>{ciudad.temp} °</Text>
                            <Text style={estilos.datos}>{ciudad.feel} °</Text> 
                            <Text style={estilos.datos}>{ciudad.weather}</Text>
                            <Text style={estilos.datos}>{ciudad.humidity} %</Text>
                            <Text style={estilos.datos}>{ciudad.wind} km/h</Text>
                            <Text style={estilos.datos}>{ciudad.clouds} %</Text>
                        </View>
                    </View>
                </View>
            </View>
            <AppStatusBar backgroundColor="#000" barStyle="light-content" />
        </SafeAreaView>

  );
}


//<View></View>