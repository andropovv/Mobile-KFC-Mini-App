import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppIcon from "../assets/images/kfcIcon.png";
import CartIcon from "../assets/images/cartIcon.png";
import { useNavigation } from "@react-navigation/native";
import ButtonWithImg from "./UI/ButtonWithImg";

const Header = () => {
  const navigation = useNavigation();

  const handlePressHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.homeButton} onPress={handlePressHome}>
        <Image source={AppIcon} style={styles.iconApp} />
      </TouchableOpacity>
      <ButtonWithImg image={CartIcon} onPress={() => {}} />
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
