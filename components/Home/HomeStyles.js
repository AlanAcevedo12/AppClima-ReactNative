import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const estilos = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: "column",
        height: "100%",
        width: "100%"
      },
    cardContainer: {
        // backgroundColor: "#566573",
        height: "85%",
        width:"95%",
    },
    searchContainer: {
        backgroundColor: "#000",
        width: "100%",
        height: 80,
        marginBottom: "5%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
    },
    titulo: {
      color: "white",
      fontSize: 25,
  },
  });
  

export {estilos};