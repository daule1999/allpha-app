import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, IconButton, useTheme } from "react-native-paper";
import ReduxWrapper from "../utils/ReduxWrapper";

function BannerButton({ text, src, icon = false, iconName }) {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.colors.textPrimary,
          borderRadius: 6,
          width: 50,
        }}
      >
        <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5}>
          {icon ? (
            <IconButton icon={iconName} iconColor={theme.colors.primary} />
          ) : (
            <Image source={src} style={styles.ImageIconStyle} />
          )}
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text
          style={{
            color: theme.colors.textPrimary,
          }}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});

export default ReduxWrapper(BannerButton);
