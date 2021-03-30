import React, { useState } from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, Text, Alert } from "react-native";

import CheckBox from "@react-native-community/checkbox";

import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import { auth } from "../firebase";

const valitdateLogin = Yup.object().shape({
  FirstName: Yup.string().required().label("FirstName"),
  LastName: Yup.string().required().label("LastName"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  confirmPassword: Yup.string()
    .required("Required")
    .test(
      "confirm-password-test",
      "Password and confirm password should match",
      function (value) {
        return value === this.parent.password;
      }
    ),
});
function RegisterForm({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState("false");
  async function handleRegister(values) {
    const { email, password } = values;

    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      navigation.navigate("Login");
    } catch (err) {
      Alert.alert("Error", err.message);
    }
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.text}>Promatics</Text>
      <Formik
        initialValues={{
          FirstName: "",
          LastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={handleRegister}
        validationSchema={valitdateLogin}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("FirstName")}
              onBlur={() => setFieldTouched("FirstName")}
              placeholder="First Name"
            />
            {touched.FirstName && (
              <Text style={{ color: "red" }}>{errors.FirstName} </Text>
            )}
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("LastName")}
              onBlur={() => setFieldTouched("LastName")}
              placeholder="Last Name"
            />
            {touched.LastName && (
              <Text style={{ color: "red" }}>{errors.LastName} </Text>
            )}
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
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("confirmPassword")}
              secureTextEntry
              onBlur={() => setFieldTouched("confirmPassword")}
              icon="lock"
              placeholder="Confirm Password"
            />
            {touched.confirmPassword && (
              <Text style={{ color: "red" }}>{errors.confirmPassword} </Text>
            )}

            <AppButton title="Register" onPress={handleSubmit} />
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
    textAlign: "center",
    color: "blue",
    padding: 10,
    fontSize: 30,
    textTransform: "uppercase",
    letterSpacing: 4,
    fontWeight: "bold",
  },
});

export default RegisterForm;
