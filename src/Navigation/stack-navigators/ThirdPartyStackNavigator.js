import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ThirdParty from "../../screens/ThirdParty";
import { screens } from "../RouteItems";

const Stack = createStackNavigator();

const ThirdPartyStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.ThirdParty} component={ThirdParty} />
    </Stack.Navigator>
  );
};

export default ThirdPartyStackNavigator;
