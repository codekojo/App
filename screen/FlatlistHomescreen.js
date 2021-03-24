import React from "react";
import {
  FlatList,
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import Card from "../components/Card";

const messages = [
  {
    id: 1,
    title: "Promatics",
    description: "Ludhian",
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
  },
  {
    id: 2,
    title: "Promatics",
    description: "Ludhi",
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
  },
  {
    id: 3,
    title: "kk",
    description: "Promatics",
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
  },
  {
    id: 4,
    title: "promatics",
    description: "Pro",
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
  },
  {
    id: 5,
    title: "r",
    description: "pp",
    image: {
      uri: "https://reactnative.dev/img/tiny_logo.png",
    },
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView styles={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} image={item.image} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.os === "android" ? StatusBar.currentHeight : 0,
  },
});
