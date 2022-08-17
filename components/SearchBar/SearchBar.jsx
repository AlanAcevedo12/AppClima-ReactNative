import { StatusBar } from 'expo-status-bar';
import { Button, View, Alert, TextInput} from 'react-native';
import { estilos } from './SearchBarStyles';
import { useDispatch, useSelector } from "react-redux";
import {getApiData} from "../../redux/actions/actions";
import Card from '../Card/Card';
import { useState } from 'react';
import  MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function SearchBar() {
    const dispatch = useDispatch();
    const datos = useSelector(state => state.ciudad);
    const [input, setInput] = useState("");

    function onSearch(){
        if(input.length > 2){
            dispatch(getApiData(input));
            setInput("");
        }
    }

    function changeHandler(text){
        setInput(text);
    }

    return (
        <View style={estilos.container}>
            {/* <Text>App Clima</Text> */}
            <TextInput 
                style={estilos.inputBusqueda}
                placeholder="Buscar"
                placeholderTextColor="#bbb"
                value={input}
                onChangeText={changeHandler}
                onSubmitEditing={() => onSearch()}
            />
            <View style={estilos.botonBusqueda} onTouchEnd={() => onSearch()}>
                <MaterialCommunityIcons name="search-outline" color="#fff" size={30}/>
            </View>
        </View>
    );
}
