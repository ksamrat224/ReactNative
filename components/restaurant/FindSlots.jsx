import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const FindSlots = ({
  date,
  slots,
  selectedSlot,
  setSelectedSlot,
  selectedNumber,
}) => {
  const [slotsVisible, setSlotsVisible] = useState(false);
  const handlePress = () => {
    setSlotsVisible(!slotsVisible);
  };

  return (
    <View className="flex-1">
      <View className={`flex ${selectedSlot != null && "flex-row"}`}>
        <View className={`${selectedSlot != null && flex - 1}`}>
          <TouchableOpacity onPress={handlePress}>
            <Text className="text-center text-lg font-bold  bg-[#f49b33] p-2 my-3 mx-2 rounded-lg">
              Find Slots
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-1">
          <TouchableOpacity onPress={handlePress}>
            <Text className="text-center text-lg font-bold  bg-[#f49b33] p-2 my-3 mx-2 rounded-lg text-white">
              Book Slots
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FindSlots;
