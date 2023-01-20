import React, { createRef } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import store, { persistor } from "./src/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import DrawerNavigator from "./src/Navigation/DrawerNavigation";

import {
  DefaultTheme,
  Provider as PaperProvider,
  Divider,
  useTheme,
} from "react-native-paper";
import theme from "./src/style/theme";
import MainApp from "./MainApp";
import storePre from "./src/redux/store";

const navigationRef = createRef();
const nav = () => navigationRef.current;

const LoadingMarkup = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.accent} />
    </View>
  );
};

const App = () => {
  const { store, persistor } = storePre;
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<LoadingMarkup />} persistor={persistor}>
        {/* <PaperProvider theme={theme}>
          <SafeAreaView style={styles.safeArea}>
            <StatusBar />
            <NavigationContainer ref={navigationRef}>
              <DrawerNavigator nav={nav} />
            </NavigationContainer>
          </SafeAreaView>
        </PaperProvider> */}
        <MainApp />
      </PersistGate>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: "hidden",
  },
});

export default App;
