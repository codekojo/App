import React, { useEffect } from "react";
import { StyleSheet, Platform, StatusBar, View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import AuthLogin from "./app/navigation/AuthNavigator";

export default function App() {

  

  return (
    <NavigationContainer>
      <AuthLogin />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    flexDirection: "row",
    borderRadius: 5,
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "#f3f4ed",
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 30,
  },
});
