import { Image, Platform, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";

const home = () => {
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
            <Image source={logo} resizeMode="cover" className="w-20 h-12" />
          </View>
        </View>
      </View>
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default home;
