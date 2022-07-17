import React from "react";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name='Home' component={Home}/> */}
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"Bit technical"} />}
        </Stack.Screen>
        {/* Course Screen  */}
        <Stack.Screen name="Course" component={Course} />
        {/* UserData Screen  */}
        <Stack.Screen name="Student" component={UserData} />
        {/* About Screen  */}
        <Stack.Screen name="About" component={About} />
        {/* Course Screen  */}
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
