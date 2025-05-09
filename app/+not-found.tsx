import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CustomNotFoundPage() {
  return (
    <View style={styles.container}>
      <Text>CustomNotFoundPage</Text>
      <Link href="/">
        There is nothing wrong with your app, it's just that it is a custom 404
        page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
