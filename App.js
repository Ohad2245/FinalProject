import React from "react";
// import AppNavigator from "./navigation/AppNavigator";
import { StyleSheet, View, Text, SafeArea } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
// import ListAlarm from "./components/ListAlarm";
// import TimePicker from "./components/TimePicker";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timePicker: {
    paddingTop: "10",
    width: "50%",
    bottom: 20,
  },
  listItem: {
    flex: 1,
    width: "100%",
  },
});
