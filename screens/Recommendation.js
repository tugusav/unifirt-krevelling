import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
export default function Recommendation() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <StatusBar style="auto" />
        <Text>Recommendation</Text>
      </View>
    </SafeAreaView>
  );
}