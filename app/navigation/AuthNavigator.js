import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/WelcomeScreen";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/Settings";

const Stack = createStackNavigator();

export default function AuthLogin() {
  return (
    <Stack.Navigator initialRouteName="Welcome" mode="modal">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false, title: "WELCOME" }}
      />
      <Stack.Screen
        name="Login"
        component={LoginForm}
        options={{
          title: "LOGIN",
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterForm}
        options={{ title: "REGISTER" }}
      />

      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: "SETTINGS",
        }}
      />
    </Stack.Navigator>
  );
}
