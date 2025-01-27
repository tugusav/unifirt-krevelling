import { View, Text } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ItineraryLocDate from "./screens/ItineraryLocDate";
import AddItinerary from "./screens/AddItinerary";
import Home from "./screens/Home";
import Recommendation from "./screens/Recommendation";
export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Recommendation" component={Recommendation} />
        <Stack.Screen name="ItineraryLocDate" component={ItineraryLocDate} />
        <Stack.Screen name="AddItinerary" component={AddItinerary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
