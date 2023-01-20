import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme, Switch } from "react-native-paper";
import { PreferencesContext } from "../../style/PreferencesContext";
// import { screens } from "../RouteItems";

export const ThemeSwitch = ({ scene }) => {
  const theme = useTheme();
  const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

  return (
    <View style={[styles.container]}>
      <Text style={{ color: theme.colors.secondary }}>Theme</Text>
      <Switch
        color={theme.colors.outline}
        value={isThemeDark}
        onValueChange={toggleTheme}
      />
    </View>
  );
};
const Stack = createStackNavigator();
// const ThemeSwitchNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen name={screens.themeSwitch} component={ThemeSwitch} />
//     </Stack.Navigator>
//   );
// };

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
// export { ThemeSwitchNavigator };
