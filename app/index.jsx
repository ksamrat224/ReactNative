import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
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
        <Text className="text-white text-lg">Go to Testing</Text>
      </TouchableOpacity>
    </View>
  );
}
