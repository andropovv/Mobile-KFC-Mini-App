import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import FrenchFriesBunner from "../components/UI/FrenchFriesBunner";
import ItemsList from "../components/ItemsList";

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <FrenchFriesBunner />
      <ItemsList />
    </View>
  );
};

export default HomeScreen;
