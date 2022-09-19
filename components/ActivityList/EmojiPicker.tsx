import * as React from "react";

import { Text, View } from "react-native";

type EmojiPickerProps = {};

export const EmojiPicker = ({}: EmojiPickerProps) => {
  return (
    <View style={{ position: "absolute", bottom: 8, right: 8 }}>
      <Text style={{ fontSize: 32 }}>😊</Text>
    </View>
  );
};
