import { useRouter } from "expo-router";
import { Image, ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
// const logo = require("../assets/images/dinetimelogo.png"); //different import method for local images

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView className={`bg-[#1f2937]`}>
      <StatusBar barStyle="light-content" backgroundColor={"#1f2937"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center justify-center">
          <Image source={logo} style={{ width: "300", height: "300" }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
