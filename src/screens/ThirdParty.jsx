import React from "react";
import { View, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import { WebView } from "react-native-webview";
import ReduxWrapper from "../utils/ReduxWrapper";
import Constants from "expo-constants";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const { height, width } = Dimensions.get("window");
const testURI = "https://www.swiggy.com/";

function ThirdParty({ app }) {
  const { thirdPartySite } = app;
  return (
    <View style={styles.container}>
      <WebView
        style={{ height: height, width: width }}
        containerStyle={{ height: height, width: width }}
        // ref={(ref) => (this.webview = ref)}
        source={{ uri: thirdPartySite }}
        renderError={(error) => (
          <View style={{ flex: 1 }}>
            <Text>{error}</Text>
          </View>
        )}
        avaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("WebView error: ", nativeEvent);
        }}
        onNavigatorStateChange={(event) => {
          if (event.url !== testURI) {
            this.webview.stopLoading();
            Linking.openURL(event.url);
          }
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  webview: {
    flex: 1,
    backgroundColor: "yellow",
    width: deviceWidth,
    height: deviceHeight,
  },
});
export default ReduxWrapper(ThirdParty);
