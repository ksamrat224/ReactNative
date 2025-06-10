import { Image, Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";

const home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#1f2937" }}>
      <View className="flex items-center">
        <View className="bg-[#4b5563] mt-4 w-11/12 rounded-lg shadow-lg justify-between items-center">
          <View className="flex flex-row">
            <Text
              className={`text-base h-10 align-middle text-white font-bold ${
                Platform.OS === "android" ? "pt-2.5" : "pt-2"
              }`}
            >
              {" "}
              Welcome to {""}
            </Text>
            <Image
              source={logo}
              resizeMode="cover"
              className={"w-20 h-12 mt-1"}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
