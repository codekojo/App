import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image resizeMode="cover" style={styles.image} source={image} />
      <View styles={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.texts}>Ludhiana</Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "lightgrey",
    marginBottom: 20,
    marginVertical: 20,
  },

  image: {
    width: "100%",
    height: 220,
  },
  text: {
    fontSize: 24,
    padding: 10,
    fontWeight: "bold",
  },
  texts: {
    fontSize: 24,
    padding: 10,
    fontWeight: "400",
  },
  container: {
    padding: 10,
  },
});
