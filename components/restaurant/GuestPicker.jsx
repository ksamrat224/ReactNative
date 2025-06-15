import { Text, TouchableOpacity, View } from "react-native";

const GuestPicker = ({selectedNumber}) => {
    const increment = () => {
    }
    const decrement = ()=>{
        
    }
  return (
    <View className="flex flex-row items-center rounded-lg text-white text-base">
      <TouchableOpacity onPress={decrement} className="rounded">
        <Text className="text-white text-lg border border-[#f49b33]">-</Text>
      </TouchableOpacity>
      <Text className="px-3 text-white bg-[#474747] text-lg">
        {selectedNumber}
      </Text>

      <TouchableOpacity onPress={increment} className="rounded">
        <Text className="text-white text-lg border border-[#f49b33]">+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuestPicker;
