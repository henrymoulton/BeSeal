import * as React from "react";
import { Text, View } from "react-native";

type ActivityListItemHeaderProps = {};

export const ActivityListItemHeader = ({}: ActivityListItemHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 32,
            height: 32,
            backgroundColor: "papayawhip",
            borderRadius: 100,
            marginRight: 8,
          }}
        />
        <View>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
            articseal123
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              color: "#777",
            }}
          >
            Chilly Place, World
          </Text>
        </View>
      </View>

      {/*  TODO(Henry): replace with icon */}
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        •••
      </Text>
    </View>
  );
};
