import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      className="bg-red-800" 
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-extrabold text-white">add nativewind  tailwid</Text>
      <TouchableOpacity>
        <Text
         className="text-white text-lg"
         onPress={()=>router.push("/testing")}
        >
          Go to Testing</Text>
      </TouchableOpacity>
    </View>
  );
}
