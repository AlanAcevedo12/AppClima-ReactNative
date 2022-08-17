import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View, Alert } from 'react-native';
import { estilos } from './HomeStyles';
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { clearError } from '../../redux/actions/actions';
import AppStatusBar from '../StatusBar/StatusBar';
import  MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function Home({navigation}) {
    const ciudades = useSelector(state => state.ciudades);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();

    if(error.length){
        Alert.alert(
            "Oh no!",
            "Ciudad no encontrada",
            [
              {
                text: "Ok",
                onPress: () => dispatch(clearError()),
              },
            ]
          );
    }

    return (
        <SafeAreaView>
            <View style={estilos.container}>
                <View style={estilos.searchContainer}>
                    <SearchBar/>
                </View>
                {ciudades.length ?
                <View style={estilos.cardContainer}>
                    <FlatList
                        data={ciudades}
                        renderItem={(ciudad) => <Card navigation={navigation} ciudad={ciudad.item}/>}
                    />
                </View> :
                <View style={{marginTop: 50, display: "flex", alignItems: "center"}}>
                    <MaterialCommunityIcons name="chevron-up-outline" color="#fff" size={80}/>
                    <Text style={estilos.titulo}>Agrega una ciudad</Text>
                </View>
                }
                <AppStatusBar backgroundColor="#000" barStyle="light-content" />
            </View>
        </SafeAreaView>
    );
}
