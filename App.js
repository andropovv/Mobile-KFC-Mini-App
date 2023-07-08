import { NavigationContainer } from "@react-navigation/native";

import { COLORS } from "./src/constants";
import Navigator from "./src/navigation/Navigator";
import { View, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: COLORS.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
