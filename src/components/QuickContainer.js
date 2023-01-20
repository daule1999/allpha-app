import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";
import ReduxWrapper from "../utils/ReduxWrapper";
import SwipeContainer from "react-native-scroll-up-container";
import HomeBanner from "./HomeBanner";
import MySwipper from "./MySwipper";
import { Dimensions } from "react-native";

function QuickContainer() {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <SwipeContainer
      useLine={false}
      containerStyle={{
        flex: 1,
      }}
      translateY={200}
      overValue={50}
      topComponent={
        <View>
          <HomeBanner />
        </View>
      }
      limitTopValue={50}
      limitBottomValue={500}
      style={{ backgroundColor: colors.background }}
    >
      <View
        style={{
          borderTopWidth: 1,
          backgroundColor: colors.background,
          borderTopLeftRadius: 3,
          borderBottomRightRadius: 3,
          borderColor: colors.textPrimary,
        }}
      >
        <View
          style={{
            // height: "100%",
            // width: "100%",
            backgroundColor: colors.background,
            borderColor: colors.background,
            borderRadius: 5,
          }}
        >
          <View
            style={[
              style.lineContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <View
              style={[style.line, { backgroundColor: colors.textPrimary }]}
            ></View>
          </View>
        </View>
      </View>
    </SwipeContainer>
  );
}
const style = StyleSheet.create({
  lineContainer: {
    marginTop: 3,
    marginBottom: 3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 50,
    height: 3,
    borderRadius: 2,
  },
});

export default ReduxWrapper(QuickContainer);
