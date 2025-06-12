import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router'

const Restaurant = () => {
    const {restaurant}= useLocalSearchParams();
  return (
   <SafeAreaView>
    <Text>{restaurant}</Text>
   </SafeAreaView>
  )
}

export default Restaurant