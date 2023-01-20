import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "../RouteItems";

const Stack = createStackNavigator();

const Transactions = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Transactions screen!</Text>
  </View>
);

const TransactionsStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.Transactions} component={Transactions} />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
