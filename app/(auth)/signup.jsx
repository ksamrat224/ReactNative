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
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="bg-[#f49b33] text-black p-4 my-2 rounded-lg shadow-lg"
            >
              <Text className="text-center text-lg font-bold">Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="bg-[#1f2937] border border-[#f49b33]  p-4 my-2 rounded-lg shadow-lg max-w-fit"
            >
              <Text className="text-center text-lg font-semibold text-[#f49b33]">
                Sign In as a guest
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-white text-lg text-center my-4 font-semibold">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity
              className="flex flex-row items-center justify-center"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-white font-semibold ">
                Already a User?{" "}
              </Text>
              <Text className="text-[#f49b33] font-semibold text-base  underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full "
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
