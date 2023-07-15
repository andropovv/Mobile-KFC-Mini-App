import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ButtonWithImg = ({ image, onPress }) => {
  const handlePress = () => {
    onPress();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});

export default ButtonWithImg;
