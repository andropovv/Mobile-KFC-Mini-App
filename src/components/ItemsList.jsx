import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";

const ItemsList = () => {
  return (
    <View style={styles.constainer}>
      <Text>ItemsList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // constainer: {
  //   width: "80%",
  //   flexDirection: "row",
  //   marginVertical: "auto",
  //   marginHorizontal: 0,
  //   backgroundColor: "#fff",
  // },
});

export default ItemsList;
