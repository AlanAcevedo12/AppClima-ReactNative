import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    container: {
        // backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        height: "80%",
        width: "100%",
      },
    inputBusqueda: {
        width: "70%",
        backgroundColor: "#000",
        height: "80%",
        fontSize: 20,
        fontWeight: "500",
        textAlign: "left",
        color: "white",
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 20,
        letterSpacing: 0.5
    },
    botonBusqueda: {
      display: "flex",
      // backgroundColor: "red",
      height: "100%",
      marginRight: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }

  });
  

export {estilos};