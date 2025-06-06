import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabLayout = () => {
  return (
   <Tabs screenOptions={{headerShown:false}}>
    <Tabs.Screen name='home' options={{title:"Home"}}/>
    <Tabs.Screen name='history' options={{title:"History"}}/>
    <Tabs.Screen name='profile' options={{title:"Profile"}}/>
   </Tabs>
  )
}

export default TabLayout