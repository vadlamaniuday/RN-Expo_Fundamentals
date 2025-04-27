import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Link href="/login" style={styles.link}>
        <Text style={styles.linkText}>Already Have an Account ? Login</Text>
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
    color: "green",
  },
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
