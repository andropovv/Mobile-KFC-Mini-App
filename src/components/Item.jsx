import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import CartAddIcon from "../assets/images/cartAdd.png";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
  const navigation = useNavigation();

  const handleOpenItem = () => {
    navigation.navigate("Item", {
      item,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => handleOpenItem()}>
      <View>
        <Text style={styles.title}>{item.name} </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.itemIcon} />
      </View>
      <TouchableOpacity style={styles.cartAdding}>
        <Text style={styles.cost}>${item.cost}</Text>
        <View style={styles.cartButton}>
          <Image source={CartAddIcon} style={styles.addingImage} />
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 5,
    width: "47%",
    height: 300,
    borderRadius: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: SIZES.h4,
    margin: 10,
  },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  cartAdding: {
    backgroundColor: "black",
    height: "15%",
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  itemIcon: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  cost: {
    color: "white",
    marginLeft: 10,
  },
  cartButton: {
    backgroundColor: COLORS.secondary,
    width: 35,
    height: 35,
    borderRadius: 10,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  addingImage: {
    height: 25,
    width: 25,
  },
});

export default Item;
