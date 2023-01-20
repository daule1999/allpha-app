import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, StyleSheet, View } from "react-native";

import HomeStackNavigator from "./stack-navigators/HomeStackNavigator";
import GrabDealsStackNavigator from "./stack-navigators/GrabDealsStackNavigator";
import TransactionsStackNavigator from "./stack-navigators/TransactionsStackNavigator";
import MyRewardsStackNavigator from "./stack-navigators/MyRewardsStackNavigator";
import LocationsStackNavigator from "./stack-navigators/LocationsStackNavigator";
import { routes, screens } from "./RouteItems";
import { useTheme } from "react-native-paper";
import ThirdPartyStackNavigator from "./stack-navigators/ThirdPartyStackNavigator";
import ReduxWrapper from "../utils/ReduxWrapper";

const Tab = createBottomTabNavigator();

const tabOptions = ({ route }) => {
  const theme = useTheme();
  const item = routes.find((routeItem) => routeItem.name === route.name);

  if (!item.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: { height: 60, backgroundColor: theme.colors.background },
      title: item.title,
    };
  }

  return {
    tabBarIcon: ({ focused }) => item.icon(focused),
    tabBarLabel: () => (
      <Text style={{ color: theme.colors.textPrimary, fontSize: 12 }}>
        {item.title || ""}
      </Text>
    ),
    headerShown: false,
    tabBarStyle: {
      height: 60,
      backgroundColor: theme.colors.background,
    },
    tabBarItemStyle: {
      marginBottom: 2,
    },
    title: item.title,
  };
};

const BottomTabNavigator = ({ app }) => {
  const theme = useTheme();
  const { disableBottom = true } = app;

  return (
    <Tab.Navigator screenOptions={tabOptions} barStyle={{}}>
      <Tab.Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Tab.Screen
        name={screens.GrabDealsStack}
        component={GrabDealsStackNavigator}
      />
      <Tab.Screen
        name={screens.TransactionsStack}
        component={TransactionsStackNavigator}
      />
      <Tab.Screen
        name={screens.MyRewardsStack}
        component={MyRewardsStackNavigator}
      />
      <Tab.Screen
        name={screens.LocationsStack}
        component={LocationsStackNavigator}
      />
      <Tab.Screen
        name={screens.ThirdPartyStack}
        component={ThirdPartyStackNavigator}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {},
});

export default ReduxWrapper(BottomTabNavigator);
