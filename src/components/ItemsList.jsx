import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { View } from "react-native";
import Item from "./Item";
import itemsList from "../ItemsList";
import { SIZES } from "../constants";

const ItemsList = () => {
  const [items, setItems] = useState(itemsList);

  const handleIncreaseItem = (id) => {
    setItems(
      items.map((i) =>
        id === i.id ? { ...i, countInCart: i.countInCart + 1 } : i
      )
    );
  };

  const handleDecreaseItem = (id) => {
    setItems(
      items.map((i) =>
        id === i.id ? { ...i, countInCart: i.countInCart - 1 } : i
      )
    );
  };
  return (
    <View style={styles.constainer}>
      <Text style={styles.title}>Most popular</Text>
      <View style={styles.list}>
        {items.map((i) => (
          <Item
            key={i.id}
            item={i}
            onIncrease={handleIncreaseItem}
            onDecrease={handleDecreaseItem}
          />
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
