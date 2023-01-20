import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../RouteItems";

const Stack = createStackNavigator();

const GrabDeals = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>GrabDeals screen!</Text>
  </View>
);

const GrabDealsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.GrabDeals} component={GrabDeals} />
    </Stack.Navigator>
  );
};

export default GrabDealsStackNavigator;
