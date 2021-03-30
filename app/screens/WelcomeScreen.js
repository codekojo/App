import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import AppButton from "../components/AppButton";

function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.coverImage}
        source={require("../../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.text}>Promatics </Text>
        </View>
      </ImageBackground>
      <View style={styles.buttonStyle}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  coverImage: {
    flex: 1,
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  text: {
    color: "red",
    padding: 10,
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontWeight: "bold",
  },
  buttonStyle: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    padding: 20,
  },
  RegisterComponent: {
    width: "100%",
    height: 70,
    backgroundColor: "red",
  },
  LoginComponent: {
    width: "100%",
    height: 70,
    backgroundColor: "blue",
  },
});
