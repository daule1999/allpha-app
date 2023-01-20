import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import { Divider, Switch, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Age } from "./Age";
import { AppTitle } from "./AppTitle";
import { Counter } from "./Counter";
import { CounterRedux } from "./CounterRedux";
import { Person } from "./Person";
import { enableBanner, setTheme } from "../redux/slices/themeSlice";
import ReduxWrapper from "../utils/ReduxWrapper";
import QuickContainer from "../components/QuickContainer";
import MySwipper from "../components/MySwipper";
import kycCard1 from "../assets/Images/kycCard1.png";
import kycCard2 from "../assets/Images/kycCard2.png";
import kycCard3 from "../assets/Images/kycCard3.png";
import expense from "../assets/Images/EXPENSE_TRACKER.png";
import Quick from "../components/Quick";

const kycSwipper = [
  { id: "1", src: kycCard1, title: "Hey" },
  { id: "2", src: kycCard2, title: "Hey" },
  { id: "3", src: kycCard3, title: "Hey" },
];

function Home(props) {
  const theme = useTheme();
  const {
    app,
    changeTheme$: toogle,
    toggleBanner$: toggleBanner,
    navigation,
  } = props;
  const { isDarkModeOn, bannerScrolled } = app;
  // console.log(bannerScrolled, "bannerScrolled", isDarkModeOn, "isDarkModeOn");
  // console.log(navigation, "navigate");

  return (
    <ScrollView style={{ backgroundColor: theme.colors.background }}>
      <View
        style={{
          // borderWidth: 1,
          // borderStartColor: theme.colors.textPrimary,
          // borderTopEndRadius: 20,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <QuickContainer />
        </View>
        <View
          style={{
            backgroundColor: theme.colors.background,
            height: 3,
            marginTop: -40,
          }}
        ></View>
        <View style={{ flex: 1, backgroundColor: theme.colors.secondary }}>
          <MySwipper cards={kycSwipper} />
        </View>
        <View style={{ backgroundColor: theme.colors.background }}>
          <Quick navigation={navigation} />
        </View>
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
          <MySwipper cards={kycSwipper} />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
            paddingTop: 12,
            paddingLeft: 15,
            paddingBottom: 20,
          }}
        >
          <Image source={expense}></Image>
        </View>
      </View>
    </ScrollView>
  );
}

export default ReduxWrapper(Home);
