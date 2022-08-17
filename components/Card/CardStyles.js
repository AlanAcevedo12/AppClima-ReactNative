import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({

    container: {
        backgroundColor: '#222',
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: "100%",
        height: 150,
        marginBottom: 10,
        borderRadius: 20,
    },
    allContainer: {
      // backgroundColor: 'yellow',
      display: 'flex',
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "flex-start",
      height:"100%",
      flex: 6,
    },
    boton: {
      // backgroundColor: "orange",
      display: 'flex',
      flexDirection: "column",
      alignItems: 'flex-start',
      justifyContent: 'space-evenly',
      flex: 1,
    },
    infoContainer: {
      // backgroundColor: "blue",
      height: "100%",
      width: "90%",
      display: 'flex',
      flexDirection:"column",
      justifyContent: "space-evenly",
      marginLeft: "10%",
    },
    tituloContainer: {
      // backgroundColor: "purple",
      height: "30%",
      display: 'flex',
      lexDirection:"column",
      alignItems: "flex-start",
      justifyContent: "center",
    },
    datosContainer: {
      // backgroundColor: "red",
      height: "40%",
    },
    titulo: {
        color: "white",
        fontSize: 25,
    },
    datos: {
      color: "grey",
      fontSize: 12,
    },
    imageContainer: {
      // backgroundColor: "blue",
      height: "80%",
      width: "15%",
      display: 'flex',
      flexDirection:"column",
      justifyContent: "space-evenly",
      // marginRigth: "10%",
      flex: 3,
    },
    tempContainer: {
      height: "80%",
      width: "15%",
      display: 'flex',
      flexDirection:"column",
      justifyContent: "space-evenly",
      // backgroundColor: "orange",
      flex: 2,
    },
    temp: {
      color: "white",
      fontSize: 25,
    }
  });
  

export {estilos};