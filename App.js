import { ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const Try = styled.View`
  padding: 10px;
  height: 50px;
  width: 50px;
  background-color: red;
  border-radius: 50%;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tesst</Text>
      <Try />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdc",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontSize: 46,
  },
});
