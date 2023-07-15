import React from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "react-native";
import Item from "./Item";
import itemsList from "../ItemsList";
import { SIZES } from "../constants";

const ItemsList = () => {
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Most popular</Text>
      <View style={styles.list}>
        {itemsList.map((i) => (
          <Item key={i} item={i} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: SIZES.h2,
    marginBottom: 20,
    marginLeft: 2,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});

export default ItemsList;
