import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppIcon from "../assets/images/kfcIcon.png";
import CartIcon from "../assets/images/cartIcon.png";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();

  const handlePressCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton}>
        <Image source={AppIcon} style={styles.iconApp} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartButton} onPress={handlePressCart}>
        <Image source={CartIcon} style={styles.cartIcon} />
      </TouchableOpacity>
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
  },
  homeButton: {
    paddingLeft: 25,
  },
  cartButton: {
    paddingRight: 25,
  },
  iconApp: {
    height: 80,
    width: 80,
  },
  cartIcon: {
    height: 40,
    width: 40,
  },
});

export default Header;
