import React, { createRef, useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import store, { persistor } from "./src/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DrawerNavigator from "./src/Navigation/DrawerNavigation";
import { useDispatch, useSelector } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PreferencesContext } from "./src/style/PreferencesContext";

import {
  DefaultTheme,
  Provider as PaperProvider,
  Divider,
} from "react-native-paper";
import theme, {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from "./src/style/theme";

const navigationRef = createRef();
const nav = () => navigationRef.current;

function MainApp() {
  // const isDarkModeOn = useSelector((state) => state.mytheme.isDarkModeOn);
  const isDarkModeOn = true;
  const [isThemeDark, setIsThemeDark] = React.useState(false);
  // let currentTheme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  const currentTheme = CombinedDarkTheme;
  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );
  useEffect(() => {
    toggleTheme();
  }, [isDarkModeOn]);

  return (
    <PreferencesContext.Provider value={preferences}>
      <ThemeProvider theme={currentTheme}>
        <PaperProvider theme={currentTheme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.safeArea}>
              <StatusBar />
              <NavigationContainer ref={navigationRef}>
                <DrawerNavigator nav={nav} />
              </NavigationContainer>
            </SafeAreaView>
          </GestureHandlerRootView>
        </PaperProvider>
      </ThemeProvider>
    </PreferencesContext.Provider>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});

export default MainApp;
