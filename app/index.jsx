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
import logo from "../assets/images/dinetimelogo.png";

// const logo = require("../assets/images/dinetimelogo.png"); //different import method for local images

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#1f2937]`}>
      <StatusBar barStyle="light-content" backgroundColor={"#1f2937"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex items-center justify-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <View className="w-3/4">
            <TouchableOpacity onPress={()=>router.push("/home")} className="bg-[#f49b33] text-black p-4 my-2 rounded-lg shadow-lg">
              <Text className="text-center text-base font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
