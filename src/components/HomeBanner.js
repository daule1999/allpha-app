import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import ReduxWrapper from "../utils/ReduxWrapper";
import { useFonts } from "expo-font";
import BannerButton from "./BannerButton";

function HomeBanner(props) {
  const theme = useTheme();
  const [loaded] = useFonts({
    Lato: require("../assets/fonts/Lato/Lato-Bold.ttf"),
  });
  const { myBalance = "" } = props;

  if (!loaded) {
    return null;
  }
  console.log(props, "HomeBanner");
  return (
    <View
      style={{
        display: "flex",
        direction: "column",
        justifyCenter: "center",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <View>
        <Text
          style={{
            color: theme.colors.textPrimary,
            fontFamily: "Lato",
            fontStyle: "normal",
            fontSize: 12,
            lineHeight: 16,
            letterSpacing: 0.24,
            textTransform: "uppercase",
            order: 0,
            flexGrow: 0,
          }}
        >
          Total Balance
        </Text>
      </View>
      <View style={{ marginTop: 12 }}>
        <Text style={{ color: theme.colors.textPrimary }}>
          {"\u20B9"}
          {myBalance}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: 12,
        }}
      >
        <View>
          <BannerButton text="Add Money" icon={true} iconName="plus" />
        </View>
        <View style={{ marginLeft: 12 }}>
          <BannerButton text="Send Money" icon={true} iconName="send" />
        </View>
      </View>
    </View>
  );
}

export default ReduxWrapper(HomeBanner);
