import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemScreen from "../screens/ItemScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
