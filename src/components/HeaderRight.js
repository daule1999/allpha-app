import React from "react";
import { View, StyleSheet } from "react-native";
import ReduxWrapper from "../utils/ReduxWrapper";

function HeaderRight({ app }) {
  const { enableBackWithBal = false } = app;
  if (!enableBackWithBal) {
    return (
      <View style={styles.headerRight}>
        <Image source={searchIcon} style={styles.headerRightIcon} />
        <Image source={scanner} style={styles.headerRightIcon} />
        {/* <Image source={notiInactive} style={styles.headerRightIcon} /> */}
        <Badge
          badgeStyle={styles.badge}
          textStyle={styles.badgeText}
          status="success"
          size={10}
          containerStyle={[styles.badgeContainer]}
        >
          <Image source={notiInactive} style={styles.headerRightIcon} />
        </Badge>
        {/* <Icon
      name="bell"
      size={20}
      color={theme.colors.textPrimary}
      style={styles.headerRightIcon}
    /> */}
      </View>
    );
  }
  return <View>HeaderRight</View>;
}
const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerRight: {
    marginRight: 15,
    flexDirection: "row",
  },
  headerRightIcon: { marginLeft: 20 },
  drawerLabel: {
    fontSize: 14,
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  badge: {
    borderRadius: 50,
    height: 8,
    minWidth: 0,
    width: 8,
  },
  badgeContainer: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0,
  },
});
export default ReduxWrapper(HeaderRight);
