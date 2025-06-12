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

const Home = () => {
  const renderItem = ({ item }) => (
    <TouchableOpacity className="bg-[#4b5563] max-h-64 max-w-xs flex justify-center rounded-lg p-4 mx-4 shadow-md">
      <Image
        source={{ uri: item.image }}
        resizeMode="cover"
        className="h-28 mt-2 
        mb-1 rounded-lg"
      />
      <Text className="text-white text-lg font-bold mb-2">{item.name}</Text>
      <Text className="text-white mb-2 ">{item.address}</Text>
      <Text className="text-white  mb-2">
        Open:{item.opening}- Close:{item.closing}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView
      style={[
        { backgroundColor: "#1f2937" },
        Platform.OS === "android" && { paddingBottom: 25 },
        Platform.OS === "ios" && { paddingBottom: 0 },
      ]}
    >
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
      <ScrollView stickyHeaderIndices={[0]}>
        <ImageBackground
          source={require("../../assets/images/homeBanner.png")}
          resizeMode="cover"
          className="mb-4 w-full bg-[#1f2937] h-52 items-center justify-center"
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
        <View className="p-4 bg-[#1f2937] flex-row items-center">
          <Text className="text-3xl text-white mr-2 font-semibold">
            Special Discount %
          </Text>
        </View>

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
        <View className="p-4 bg-[#1f2937] flex-row items-center">
          <Text className="text-3xl text-[#f49b33] mr-2 font-semibold">
            Our Restaurant
          </Text>
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
