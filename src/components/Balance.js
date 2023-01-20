import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

function Balance({ myBalance }) {
  const theme = useTheme();
  const { colors } = theme;
  return (
    <View
      style={{
        backgroundColor: colors.green,
        padding: 4,
        borderRadius: 8,
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      <Text style={{ color: colors.textPrimary }}>
        {"\u20B9"}
        {myBalance}
      </Text>
    </View>
  );
}

export default Balance;
