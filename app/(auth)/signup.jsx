import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import frame from "../../assets/images/Frame.png";

const Signup = () => {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#1f2937]`}>
      <StatusBar barStyle="light-content" backgroundColor={"#1f2937"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex items-center justify-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <Text className="text-white text-lg text-center font-bold mb-10">
            Welcome to DineTime
          </Text>
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full "
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="bg-[#f49b33] text-black p-4 my-2 rounded-lg shadow-lg"
        >
          <Text className="text-center text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
