import * as React from "react";

import { Image, Text, useWindowDimensions, View } from "react-native";
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
          height: width * 1.3,
          width: width - 16,
          overflow: "hidden",
        }}
      >
        <Image
          source={require("../../assets/images/back.jpg")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 12,
          }}
          resizeMode={"cover"}
        />
        <View
          style={{
            backgroundColor: "papayawhip",
            borderColor: "white",
            borderRadius: 12,
            borderWidth: 4,
            margin: 12,
            width: width / 3,
            height: (width / 3) * 1.3,
          }}
        >
          <Image
            source={require("../../assets/images/front.jpg")}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: 12,
            }}
            resizeMode={"cover"}
          />
        </View>
        <EmojiPicker />
      </View>
    </View>
  );
};
