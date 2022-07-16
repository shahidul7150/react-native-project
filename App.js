import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {

  const description = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
  return <View style={styles.mainContainer}>
    <View style={styles.homeTop}>
      <Image style={styles.headerImage} resizeMode="contain" source={require("./assets/screentab.jpg")} />
      {/* <Image style={styles.headerImage} resizeMode="contain" source={require("./assets/logo.jpeg")} /> */}
      <Text style={styles.mainHeader} >Welcome to</Text>
      <Text style={[styles.mainHeader, {
        fontSize: 33,
        color: "#4c5dab",
        marginTop: 0,
      }]} >Bit technical</Text>
      <Text style={styles.paraStyle}>{description}</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center"
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,

  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,

  },
  mainHeader:{
    fontSize:28,
    fontWeight:"700",
    color:"#344055",
    textTransform:"uppercase",
    lineHeight:48,
    marginTop:50
  }
});
