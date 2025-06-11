import { BlurView } from "expo-blur";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import { restaurants } from "../../store/restaurant";

const home = () => {
  const renderItem = ({ item }) => {
    <TouchableOpacity>
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        className="h-28 mt-2 mb-1 rounded-lg"
      />
    </TouchableOpacity>;
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#1f2937" }}>
      <View className="flex items-center">
        <View className="bg-[#4b5563] mt-4 w-11/12 rounded-lg shadow-lg items-center px-4 py-3">
          <View className="flex flex-row items-center">
            <Text
              className={`text-base text-white font-bold ${
                Platform.OS === "android" ? "pt-0.5" : ""
              }`}
            >
              Welcome to{" "}
            </Text>
            <Image
              source={logo}
              resizeMode="cover"
              className="w-20 h-12 mt-1"
            />
          </View>
        </View>
      </View>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/images/homeBanner.png")}
          resizeMode="cover"
          className="my-4 w-full h-52 items-center justify-center"
        >
          <BlurView
            intensity={Platform.OS === "android" ? 100 : 25}
            tint="dark"
            className="w-full p-4 shadow-lg"
          >
            <Text className="text-center text-3xl font-bold text-white">
              Dine with your loved ones
            </Text>
          </BlurView>
        </ImageBackground>
      </ScrollView>
      {restaurants.length > 0 ? (
        <FlatList
          data={restaurants}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 16 }}
          scrollEnabled={true}
        />
      ) : (
        <ActivityIndicator animating color={"#fb9b33"} />
      )}
    </SafeAreaView>
  );
};

export default home;
