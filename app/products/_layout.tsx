import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";
import React from "react";

export default function ProductLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <View style={styles.discountedProducts}>
        <Text>Discounted Products</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "red",
    padding: 20,
  },
  headerText: {
    color: "white",
  },
  footer: {
    backgroundColor: "blue",
    padding: 20,
  },
  footerText: {
    color: "white",
  },
  discountedProducts: {
    backgroundColor: "orange",
    padding: 20,
  },
});
