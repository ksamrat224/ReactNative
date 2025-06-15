import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Linking,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DatePicker from "../../components/restaurant/DatePicker";
import FindSlots from "../../components/restaurant/FindSlots";
import GuestPicker from "../../components/restaurant/GuestPicker";
import { db } from "../../config/firebaseConfig";

const Restaurant = () => {
  const { restaurant } = useLocalSearchParams();
  const flatListRef = useRef(null);
  const windowWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [restaurantData, setRestaurantData] = useState({});
  const [carouselData, setCarouselData] = useState({});
  const [date, setDate] = useState(new Date());
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [slotsData, setSlotsData] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  const carouselLength = carouselData[0]?.images?.length;
  const handleNextImage = () => {
    if (currentIndex < carouselLength - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
    if (currentIndex === carouselLength - 1) {
      const nextIndex = 0;
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }
  };
  const handlePrevImage = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({ index: prevIndex, animated: true });
    }
    if (currentIndex === 0) {
      const prevIndex = carouselLength - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current.scrollToIndex({
        index: prevIndex,
        animated: true,
      });
    }
  };
  const carouselItem = ({ item }) => {
    return (
      <View style={{ width: windowWidth - 2 }} className="h-64 relative ">
        <View
          style={{
            position: "absolute",
            top: "50%",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: 50,
            padding: 5,
            zIndex: 10,
            left: "2%",
          }}
        >
          <Ionicons
            onPress={handlePrevImage}
            name="arrow-back"
            size={24}
            color="white"
          />
        </View>
        <View
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            bottom: 15,
          }}
        >
          {carouselData[0].images?.map((_, index) => (
            <View
              key={index}
              className={`bg-white h-2 w-2 ${
                index == currentIndex && "h-3 w-3"
              } p-1 mx-1 rounded-full`}
            />
          ))}
        </View>
        <View
          style={{
            position: "absolute",
            top: "50%",
            backgroundColor: "rgba(0,0,0,0.6)",
            borderRadius: 50,
            padding: 5,
            zIndex: 10,
            right: "6%",
          }}
        >
          <Ionicons
            onPress={handleNextImage}
            name="arrow-forward"
            size={24}
            color="white"
          />
        </View>
        <View>
          <Image
            source={{ uri: item }}
            style={{
              opacity: 0.5,
              backgroundColor: "black",
              marginRight: 20,
              marginLeft: 5,
              borderRadius: 25,
            }}
            className="h-full w-full"
            resizeMode="cover"
          />
        </View>
      </View>
    );
  };

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
  const handleLocation = async () => {
    const url = "https://www.google.com/maps";
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Don't know how to open URI: " + url);
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
        <View className="h-64 max-w-[98%] mx-2 rounded-[250px]">
          <FlatList
            ref={flatListRef}
            data={carouselData[0]?.images}
            renderItem={carouselItem}
            horizontal
            scrollEnabled={false}
            style={{ borderRadius: 25 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className="flex-1 flex-row p-2 mt-2">
          <Ionicons name="location-sharp" size={24} color="#f49b33" />
          <Text className="max-w-[75%] text-white">
            {restaurantData?.address || "Address not available"}| {"  "}
            <Text
              className="underline flex items-center text-[#f49b33] italic mt-1 font-semibold"
              onPress={handleLocation}
            >
              Get Direction
            </Text>
          </Text>
        </View>
        <View className="flex-1 flex-row p-2 ">
          <Ionicons name="time" size={20} color="#f49b33" />
          <Text className="max-w-[75%] mx-2 font-semibold text-white">
            {restaurantData?.opening} -{" "}
            {restaurantData?.closing || "Opening hours not available"}
          </Text>
        </View>
        <View className="flex-1 border m-2 p-2 border-[#f49b33] rounded-lg">
          <View className="flex-1 flex-row m-2 p-2 justify-end items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="calendar" size={20} color="#f49b33" />
              <Text className="text-white mx-2 text-base">
                Select booking date
              </Text>
            </View>
            <DatePicker date={date} setDate={setDate} />
          </View>
          <View className="flex-1 flex-row bg-[#474747] rounded-lg  m-2 p-2 justify-end items-center">
            <View className="flex-1 flex-row">
              <Ionicons name="people" size={20} color="#f49b33" />
              <Text className="text-white mx-2 text-base">
                Select number of guests
              </Text>
            </View>
            <GuestPicker
              selectedNumber={selectedNumber}
              setSelectedNumber={setSelectedNumber}
            />
          </View>
        </View>
        <View className="flex-1">
          <FindSlots slots={slotsData} selectedSlot={selectedSlot} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Restaurant;
