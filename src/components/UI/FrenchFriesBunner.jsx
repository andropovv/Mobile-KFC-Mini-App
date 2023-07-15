import React from "react";
import { Text, View, Image } from "react-native";
import friesIcon from "../../assets/images/frenchFree.png";
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const FrenchFriesBunner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get free French fries</Text>
        <Text style={styles.bodyText}>for every burger purchase</Text>
      </View>
      <Image source={friesIcon} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 150,
    marginLeft: 25,
    marginRight: 25,
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 20,
    transform: [{ rotate: "15deg" }],
  },
  textContainer: {
    paddingLeft: 20,
  },
  title: {
    color: "white",
    fontStyle: "italic",
    fontSize: SIZES.h3,
    fontWeight: 300,
    marginBottom: 5,
  },
  bodyText: {
    color: "white",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: SIZES.body3,
  },
});

export default FrenchFriesBunner;
