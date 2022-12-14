import React from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { RootNavigation } from "./navigation/RootNavigation";

export default function App() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <RootNavigation />
      <View
        style={{ width, height, position: "absolute", opacity: 0 }}
        pointerEvents={"none"}
      >
        <Image
          source={require("./screenshots/home-discovery.jpeg")}
          resizeMode={"contain"}
          style={{ width, height }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
