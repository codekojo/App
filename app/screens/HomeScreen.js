import React, { useEffect } from "react";

import {
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../components/Card";

const Data = [
  {
    id: 1,
    name: "John",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 2,
    name: "Ann",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 3,
    name: "Kk",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 4,
    name: "John",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 5,
    name: "John",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 6,
    name: "John",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    id: 7,
    name: "John",
    image: {
      uri:
        "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  },
];
export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardComponent}>
        <View style={styles.contentContainer}>
          <Image
            style={styles.imageStyles}
            source={{
              uri:
                "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            }}
          />
          <View style={styles.iconsComponent}>
            <MaterialCommunityIcons name="apps" size={45} color="blue" />
            <Text style={styles.textStyle}>Profile</Text>
          </View>
        </View>

        <View style={styles.settingContainer}>
          <View>
            <Text>Profile</Text>
            <Text>Name: John</Text>
            <Text>Age: 20</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Settings")}
            style={styles.iconsComponent}
          >
            <MaterialCommunityIcons
              name="account-settings"
              size={45}
              color="grey"
            />
            <Text style={styles.textStyle}>SETTINGS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentComponent}>
        <Card
          image={{
            uri:
              "https://images.unsplash.com/photo-1593642532009-6ba71e22f468?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : null,
    flex: 1,
    margin: 10,
  },

  cardComponent: {
    width: "100%",
    flex: 1,
    // borderWidth: 0.3,
    // borderColor: "grey",
    backgroundColor: "lightblue",
  },
  contentComponent: {
    width: "100%",
    flex: 2.5,
  },
  imageStyles: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    margin: 10,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 0.3,
  },
  iconsComponent: {
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "red",
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
