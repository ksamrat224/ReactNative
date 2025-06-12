import { useLocalSearchParams } from "expo-router";
import { Platform, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#1f2937" },
        Platform.OS === "android" && { paddingBottom: 25 },
        Platform.OS === "ios" && { paddingBottom: 0 },
      ]}
    >
      <ScrollView className="h-full">
        <Text>{restaurant}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
