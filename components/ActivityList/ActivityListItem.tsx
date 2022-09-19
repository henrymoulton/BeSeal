import * as React from "react";

import { Text, useWindowDimensions, View } from "react-native";
import { ActivityListItemHeader } from "./ActivityListItemHeader";
import { EmojiPicker } from "./EmojiPicker";

type ActivityListItemProps = {};

export const ActivityListItem = ({}: ActivityListItemProps) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <ActivityListItemHeader />
      <View
        style={{
          backgroundColor: "papayawhip",
          borderColor: "white",
          borderRadius: 12,
          borderWidth: 4,
          margin: 8,
          padding: 8,
          height: width * 1.3,
        }}
      >
        <View
          style={{
            backgroundColor: "papayawhip",
            borderColor: "white",
            borderRadius: 12,
            borderWidth: 4,
            margin: 12,
            padding: 24,
            width: width / 3,
            height: (width / 3) * 1.3,
          }}
        />
        <EmojiPicker />
      </View>
    </View>
  );
};
