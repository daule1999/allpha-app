import * as React from "react";
import { Image, Text } from "react-native";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { ThemeSwitch } from "./stack-navigators/ThemeSwitch";
import homeTabIcon from "../assets/Icons/homeTabIcon.png";

export const screens = {
  HomeTab: "HomeTab",
  HomeStack: "HomeStack",
  Home: "Home",
  GrabDealsStack: "GrabDealsStack",
  GrabDeals: "GrabDeals",
  TransactionsStack: "TransactionsStack",
  Transactions: "Transactions",
  MyRewardsStack: "MyRewardsStack",
  MyRewards: "MyRewards",
  LocationsStack: "LocationsStack",
  Locations: "Locations",
  themeSwitch: "ThemeSwitch",
  ThirdParty: "ThirdParty",
  ThirdPartyStack: "ThirdPartyStack",
};
const Title = ({ title }) => {
  return <Text>{title}</Text>;
};
const TabIcon = ({ focused }) => {
  const theme = useTheme();
  const [color, setColor] = React.useState(theme.colors.colors);
  React.useEffect(() => {
    setColor(focused ? theme.colors.primary : theme.colors.textPrimary);
  }, [focused]);
  return <Image source={homeTabIcon} style={{ color: color }} />;
};
export const routes = [
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Home" />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Home" />,
  },

  {
    name: screens.GrabDealsStack,
    focusedRoute: screens.GrabDealsStack,
    title: "Grab Deals",
    showInTab: true,
    showInDrawer: true,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Grab Deals" />,
  },

  {
    name: screens.GrabDeals,
    focusedRoute: screens.GrabDealsStack,
    title: "Grab Deals",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Grab Deals" />,
  },

  {
    name: screens.TransactionsStack,
    focusedRoute: screens.TransactionsStack,
    title: "Transactions",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Home" />,
  },
  {
    name: screens.Transactions,
    focusedRoute: screens.TransactionsStack,
    title: "Transactions",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Transactions" />,
  },

  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: "My Rewards",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="My Rewards" />,
  },
  {
    name: screens.MyRewardsStack,
    focusedRoute: screens.MyRewardsStack,
    title: "My Rewards",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="My Rewards" />,
  },
  {
    name: screens.MyRewards,
    focusedRoute: screens.MyRewardsStack,
    title: "My Rewards",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="My Rewards" />,
  },

  {
    name: screens.LocationsStack,
    focusedRoute: screens.LocationsStack,
    title: "Locations",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Locations" />,
  },
  {
    name: screens.Locations,
    focusedRoute: screens.LocationsStack,
    title: "Locations",
    showInTab: true,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="Locations" />,
  },
  {
    name: screens.themeSwitch,
    focusedRoute: screens.ThemeSwitch,
    title: "Theme",
    showInTab: false,
    showInDrawer: true,
    icon: (focused) => <TabIcon focused={focused} />,
    isCompo: true,
    Compo: () => <ThemeSwitch />,
  },
  {
    name: screens.ThirdPartyStack,
    focusedRoute: screens.ThirdPartyStack,
    title: "ThirdParty",
    showInTab: false,
    showInDrawer: false,
    icon: (focused) => <TabIcon focused={focused} />,
    Compo: () => <Title title="ThirdParty" />,
  },
];
