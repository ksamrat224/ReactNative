import { useLocalSearchParams } from "expo-router";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const[restaurantData, setRestaurantData] = useState({});
  const[carouselData, setCarouselData] = useState({});
  const[slotsData, setSlotsData] = useState({});
  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#1f2937" },
        Platform.OS === "android" && { paddingBottom: 25 },
        Platform.OS === "ios" && { paddingBottom: 0 },
      ]}
    >
      <ScrollView className="h-full">
        <View className="flex-1 my-2 p-2">
          <Text className="text-xl text-[#f49b33] mr-2 font-semibold ">
            {restaurant}
          </Text>
          <View className="border border-[#f49b33]"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
