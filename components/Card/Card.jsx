import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, Button } from 'react-native';
import { estilos } from "./CardStyles";
import { deleteCiudad } from '../../redux/actions/actions';
import { useDispatch, useSelector } from "react-redux";

export default function Card({navigation, ciudad}) {
  const dispatch = useDispatch();

  function onPresshandler(){
    // Alert.alert("hola");
    dispatch(deleteCiudad(ciudad))
  }

  return (
    <View style={estilos.container} onTouchEnd={() => navigation.navigate("Details", ciudad)}>
        <View style={estilos.allContainer}>
            <View style={estilos.infoContainer}>
                <View style={estilos.tituloContainer}>
                    <Text style={estilos.titulo}>{ciudad.name}</Text>
                </View>
                <View style={estilos.datosContainer}>
                    <Text style={estilos.datos}>Sensación térmica: {ciudad.feel}°</Text>
                    <Text style={estilos.datos}>{ciudad.weather}</Text>
                </View>
            </View>
        </View>
        <View style={estilos.imageContainer}>
            <Image source={{uri:`https://openweathermap.org/img/wn/${ciudad.img}@2x.png`}} 
                style={{height:"100%", width:"100%"}}
            />
        </View>
        <View style={estilos.tempContainer}>
                    <Text style={estilos.temp}>{ciudad.temp}°</Text>
        </View>
       
        {/* <View style={estilos.boton}>
          <Button
            title="X"
            onPress={() => onPresshandler()}
            color="#E74C3C"
          />
        </View> */}
    </View>
  );
}
