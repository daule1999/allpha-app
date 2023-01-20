import React from 'react'
import { Button, Text, View } from 'react-native'

function About({navigation}) {
  return (
    <View>
      <Text>About</Text>
      <Text>About</Text>
      <Button
        title="Go to home"
        onPress={() => navigation.navigate('home')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}

export default About
