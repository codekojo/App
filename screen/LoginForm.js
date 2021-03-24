import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, Text, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "./components/AppButton";
import { auth } from "../config/firebase";

const valitdateLogin = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
function LoginForm() {
  async function handleLogin(values) {
    const { email, password } = values;
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      alert("Login Success");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Promatics</Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={valitdateLogin}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              icon="email"
              onBlur={() => setFieldTouched("email")}
              placeholder="Email"
            />
            {touched.email && (
              <Text style={{ color: "red" }}>{errors.email} </Text>
            )}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              secureTextEntry
              onBlur={() => setFieldTouched("password")}
              icon="lock"
              placeholder="Password"
            />
            {touched.password && (
              <Text style={{ color: "red" }}>{errors.password} </Text>
            )}
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    margin: 10,
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  text: {
    color: "red",
    padding: 10,
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default LoginForm;
