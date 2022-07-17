import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "../component/Menu";

const Home = (props) => {
  const description =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          source={require("../../assets/light.jpg")}
          
        />

        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {
              fontSize: 33,
              color: "#4c5dab",
              marginTop: 0,
            },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
      <View style={styles.mainMenu}>
        <View style={styles.lineStyles}></View>
        <Menu />
        <View style={styles.lineStyles}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    resizeMode: "contain",
    height: 200,
    width: "100%",
   
    display: "flex",
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 20,
  },


  mainHeader: {
    fontSize: 28,
    fontWeight: "700",
    color: "#344055",
    textTransform: "uppercase",
    lineHeight: 48,
    marginTop: 50,
  },
  paraStyle: {
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
  },
  lineStyles:{
    borderWidth:1,
    borderColor:"gray",
    
  },
  mainMenu:{
marginBottom:20
  }
});

export default Home;
