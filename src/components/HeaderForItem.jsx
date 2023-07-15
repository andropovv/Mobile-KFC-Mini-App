import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowIcon from "../assets/images/arrowLeft.png";
import CartIcon from "../assets/images/cartIcon.png";
import { useNavigation } from "@react-navigation/native";
import ButtonWithImg from "./UI/ButtonWithImg";
import { SIZES } from "../constants";

const HeaderForItem = () => {
  const navigation = useNavigation();

  const handlePressCart = () => {
    navigation.navigate("Cart");
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ButtonWithImg onPress={handlePressBack} image={ArrowIcon} />
      <Text style={styles.title}>Details</Text>
      <ButtonWithImg onPress={handlePressCart} image={CartIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: SIZES.h3,
  },
});

export default HeaderForItem;
