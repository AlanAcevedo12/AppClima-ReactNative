import { StatusBar } from 'expo-status-bar';
import { Button, View, Alert, TextInput} from 'react-native';
import { estilos } from './NavBarStyles';
import  MaterialCommunityIcons from "react-native-vector-icons/Ionicons";

export default function NavBar({navigation}) {

    return (
        <View style={estilos.container}>
            <View onTouchEnd={() => navigation.navigate("Home")}>
                <MaterialCommunityIcons name="chevron-back-outline" color="#fff" size={30}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}
