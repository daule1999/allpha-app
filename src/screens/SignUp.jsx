import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    return (
      <View>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleSignUp}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
};
export default SignUp;
