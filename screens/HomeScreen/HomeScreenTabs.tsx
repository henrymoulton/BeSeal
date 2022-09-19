import * as React from "react";
import {
  Animated,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import { MyFriendsTab } from "./tabs/MyFriendsTab";
import { DiscoveryTab } from "./tabs/DiscoveryTab";

const renderScene = SceneMap({
  myfriends: MyFriendsTab,
  discovery: DiscoveryTab,
});

export const HomeScreenTabs = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "myfriends", title: "My Seal Pals" },
    { key: "discovery", title: "Discovery" },
  ]);

  const _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <Pressable
              style={
                i === 0
                  ? styles.tabItem
                  : { ...styles.tabItem, alignItems: "flex-start" }
              }
              onPress={() => setIndex(i)}
              key={route.title}
            >
              <Animated.Text
                style={{
                  opacity,
                  fontSize: 17,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                {route.title}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={_renderTabBar}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
  },
  tabItem: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 8,
  },
});
