import { Text, View, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Redirect } from "expo-router";

export default function Home() {
  // const isLoggedIn = false;

  // if (!isLoggedIn) {
  //   return <Redirect href="/login" />;
  // }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Home Page</Text>
      <Link href={"/about"}>About</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/missing"}>Missing Route</Link>
      <Link href={"/login"}>Login Route</Link>

      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Play Station 5</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
