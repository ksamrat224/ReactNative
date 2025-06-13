import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../config/firebaseConfig";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const [restaurantData, setRestaurantData] = useState({});
  const [carouselData, setCarouselData] = useState({});
  const [slotsData, setSlotsData] = useState({});
  const getRestaurantData = async () => {
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
        if (carouselSnapshot.empty) {
          console.error("No carousel images found for this restaurant");
          return;
        }
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
        if (slotSnapshot.empty) {
          console.error("No slots found for this restaurant");
          return;
        }
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
  useEffect(() => {
    getRestaurantData();
  }, []);
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
        <View className="h-64 max-w-[98%] mx-2 rounded-[250px]">
          <FlatList
            ref={flatListRef}
            data={carouselData[0]?.images}
            renderItem={carouselItem}
            horizontal
            scrollEnabled={true}
            style={{ borderRadius: 25 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
