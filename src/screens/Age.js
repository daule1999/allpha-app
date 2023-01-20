import React, { useState } from "react";
import { View } from "react-native";
import { Button, Switch, Text, TextInput, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addStep, setTheme } from "../redux/slices/ageSlice";
import ReduxWrapper from "../utils/ReduxWrapper";

const Age = (props) => {
  const theme = useTheme();
  const { changeTheme$, app } = props;
  // REDUX
  const count = 2;
  const isDarkModeOn = app;

  const dispatch = useDispatch();
  console.log(isDarkModeOn, "isDarkModeOn");

  return (
    <>
      <View>
        <View style={{ margin: 5 }}>
          <Text style={{ color: theme.colors.primary, fontSize: 20 }}>
            Age Component (blacklist): {count}
          </Text>
          <Text style={{ color: theme.colors.text, fontSize: 20 }}>
            This value is blacklisted in our store's persistConfig, thus age
            won't persist.
          </Text>
        </View>
        <View>
          <Switch
            color={theme.colors.outline}
            value={isDarkModeOn}
            onValueChange={changeTheme$()}
          />
        </View>
        <View style={{ margin: 5 }}>
          <TextInput
            mode="outlined"
            label="Your age"
            keyboardType="numeric"
            value={count}
            onChangeText={(num) => dispatch(addStep(num))}
          />
        </View>
      </View>
    </>
  );
};

export default ReduxWrapper(Age);
