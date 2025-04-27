import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Account Information</Text>
      </View>
      <Text>Login</Text>
      <Button title="Login" onPress={() => router.replace("/profile")} />
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
  header: { backgroundColor: "orange", padding: 20 },
  link: {
    backgroundColor: "blue",
    borderRadius: 50,
    padding: 20,
  },
  linkText: {
    color: "white",
    textAlign: "center",
  },
});
