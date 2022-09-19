import * as React from "react";
import { View, Text, FlatList } from "react-native";
import { ActivityListItem } from "./ActivityListItem";

type ActivityListProps = {};

export const ActivityList = ({}: ActivityListProps) => {
  const handleRenderItem = React.useCallback(
    ({ item }) => <ActivityListItem />,
    []
  );

  return (
    <FlatList
      style={{ marginTop: 16 }}
      data={[1, 2, 3]}
      ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
      renderItem={handleRenderItem}
    />
  );
};
