import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import React from "react";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Product</Text>
      <Link href="./1" relativeToDirectory>
        Product 1
      </Link>
      <Link href="./2" relativeToDirectory>
        Product 2
      </Link>
      <Link href="./3" relativeToDirectory>
        Product 3
      </Link>

      <Link href={"/products/bestsellers/playstation5"}>
        Playstation 5 (Best Sellers)
      </Link>
      <Link href={"/products/deals/noobday//playstation5"}>
        Playstation 5 (noob day deals)
      </Link>
      <Link href={"/products/search//playstation5"}>Playstation 5 </Link>
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
