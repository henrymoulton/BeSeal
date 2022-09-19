import { View } from "react-native";
import * as React from "react";
import { ActivityList } from "../../../components/ActivityList/ActivityList";

export const DiscoveryTab = () => (
  <View style={{ flex: 1, backgroundColor: "#000" }}>
    <ActivityList />
  </View>
);
