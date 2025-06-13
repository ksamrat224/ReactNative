import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [carouselData, setCarouselData] = useState({});
  const [slotsData, setSlotsData] = useState({});
  getRestaurantData = async () => {
    try {
      const restaurantQuery = query(
        collection(db, "restaurants"),
        where("name", "==", restaurant)
      );
      const restaurantSnapshot = await getDocs(restaurantQuery);
      if (restaurantSnapshot.empty) {
        console.error("No restaurant found with that name");
        return;
      }
      for (const doc of restaurantSnapshot.docs) {
        const restaurantData = doc.data();
        setRestaurantData(restaurantData);

        const carouselQuery = query(
          collection(db, "carousel"),
          where("res_id", "==", doc.ref)
        );
        const carouselSnapshot = await getDocs(carouselQuery);
        const carouselImages = [];
        carouselSnapshot.forEach((carouselData) => {
          carouselImages.push(carouselData.data());
        });
        setCarouselData(carouselImages);

        const slotQuery = query(
          collection(db, "slot"),
          where("ref_id", "==", doc.ref)
        );
        const slotSnapshot = await getDocs(slotQuery);
        const slots = [];
        slotSnapshot.forEach((slotData) => {
          slots.push(slotData.data());
        });
        setSlotsData(slots);
      }
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  };
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
          <View className="border border-[#f49b33]" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
