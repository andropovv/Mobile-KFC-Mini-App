import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import FrenchFriesBunner from "../components/UI/FrenchFriesBunner";
import ItemsList from "../components/ItemsList";
import { COLORS } from "../constants";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <FrenchFriesBunner />
      <ItemsList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
});

export default HomeScreen;
