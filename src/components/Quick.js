import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "react-native-paper";
import ElevatedView from "react-native-elevated-view";
import swiggyInsta from "../assets/Images/swiggyInsta.png";
import amazon from "../assets/Images/amazon.png";
import bills from "../assets/Images/bills.png";
import mmy from "../assets/Images/mmy.png";
import booking from "../assets/Images/booking.png";
import irctc from "../assets/Images/irctc.png";
import ola from "../assets/Images/ola.png";
import pharma from "../assets/Images/pharma.png";
import swiggy from "../assets/Images/swiggy.png";
import myntra from "../assets/Images/myntra.png";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../Navigation/RouteItems";
import ReduxWrapper from "../utils/ReduxWrapper";
const quickCards = [
  { id: 1, src: swiggy, site: "https://www.swiggy.com/" },
  { id: 2, src: swiggyInsta, site: "https://www.swiggy.com/swiggy-instamart" },
  { id: 3, src: myntra, site: "https://www.myntra.com/" },
  { id: 4, src: amazon, site: "https://www.amazon.in/" },
  { id: 5, src: mmy, site: "https://www.makemytrip.com/" },
  { id: 6, src: booking, site: "https://www.booking.com/" },
  { id: 7, src: irctc, site: "https://www.irctc.co.in/" },
  { id: 8, src: ola, site: "https://www.olacabs.com/" },
  { id: 9, src: bills },
  { id: 10, src: pharma, site: "https://www.1mg.com/" },
];
function Quick({ setThirdPartySite$: changeSite }) {
  const theme = useTheme();
  const { colors } = theme;
  const navigation = useNavigation();

  const onPress = (site) => {
    changeSite(site);
    navigation.navigate(screens.ThirdPartyStack);
  };
  return (
    <View style={{ margin: 6 }}>
      <ElevatedView
        elevation={3}
        style={[styles.stayElevated, { backgroundColor: colors.backdrop }]}
      >
        <View
          style={{ flex: 1, marginTop: 10, marginLeft: 16, marginBottom: 0 }}
        >
          <Text style={{ color: colors.textPrimary }}>QUICK SWITCH</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
          {quickCards.map((card) => {
            return (
              <View
                key={card.id}
                style={{
                  width: "25%",
                  height: 62,
                  marginTop: 10,
                  marginBottom: 7,
                }}
              >
                <TouchableOpacity onPress={() => onPress(card.site)}>
                  <Image source={card.src}></Image>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ElevatedView>
    </View>
  );
}
const styles = StyleSheet.create({
  stayElevated: {
    width: "95%",
    // height: 200,
    margin: "2.5%",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  },
});

export default ReduxWrapper(Quick);
