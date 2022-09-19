import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();

export const RootNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "BeSEAL.",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          },
          //  TODO(Henry): Add icon.
          headerLeft: (props) => (
            <Text style={{ color: "#fff" }}>Contacts</Text>
          ),
          // TODO(Henry): Add seal profile picture.
          headerRight: (props) => (
            <Text style={{ color: "#fff" }}>Profile</Text>
          ),
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
