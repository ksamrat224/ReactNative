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
  const handleSlotPress = (slot) => {
    let prevSlot = selectedSlot;
    if (prevSlot === slot) {
      setSelectedSlot(null);
    } else {
      setSelectedSlot(slot);
    }
  };

  return (
    <View className="flex-1">
      <View className={`flex ${selectedSlot != null && "flex-row"}`}>
        <View className={`${selectedSlot != null && "flex-1"}`}>
          <TouchableOpacity onPress={handlePress}>
            <Text className="text-center text-lg font-bold  bg-[#f49b33] p-2 my-3 mx-2 rounded-lg">
              Find Slots
            </Text>
          </TouchableOpacity>
        </View>
        {selectedSlot != null && (
          <View className="flex-1 ">
            <TouchableOpacity >
              <Text className="text-center text-lg font-bold  bg-[#f49b33] p-2 my-3 mx-2 rounded-lg text-white">
                Book Slots
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {slotsVisible && (
        <View className="flex-wrap flex-row my-2 p-2 bg-[#474747] rounded-lg">
          {slots.map((slot, index) => (
            <TouchableOpacity
              key={index}
              className={`m-2 p-2 bg-[#f49b33] rounded-lg items-center justify-center `}
              onPress={() => handleSlotPress(slot)}
              disabled={
                selectedSlot == slot || selectedSlot == null ? false : true
              }
              style={{ opacity: selectedSlot && selectedSlot !== slot ? 0.5 : 1 }}
            >
              <Text className="text-white font-bold">{slot}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default FindSlots;
