import * as React from "react";
import { useState } from "react";

import {
  Image,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { ActivityListItemHeader } from "./ActivityListItemHeader";
import { EmojiPicker } from "./EmojiPicker";

type ActivityListItemProps = {};

export const ActivityListItem = ({}: ActivityListItemProps) => {
  const { width } = useWindowDimensions();

  const frontSrc = require("../../assets/images/front.jpg");
  const backSrc = require("../../assets/images/back.jpg");

  const [srcs, setSrcs] = useState({
    thumbnailSrc: frontSrc,
    mainSrc: backSrc,
  });

  const handlePressImages = () => {
    setSrcs((prevState) => ({
      mainSrc: prevState.thumbnailSrc,
      thumbnailSrc: prevState.mainSrc,
    }));
  };

  return (
    <View>
      <ActivityListItemHeader />
      <TouchableOpacity onPress={handlePressImages} activeOpacity={0.8}>
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
            source={srcs.mainSrc}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: 12,
            }}
            resizeMode={"cover"}
          />
          <TouchableOpacity
            onPress={handlePressImages}
            activeOpacity={0.8}
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
              source={srcs.thumbnailSrc}
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: 12,
              }}
              resizeMode={"cover"}
            />
          </TouchableOpacity>
          <EmojiPicker />
        </View>
      </TouchableOpacity>
    </View>
  );
};
