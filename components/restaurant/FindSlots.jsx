import { View } from "react-native";

const FindSlots = ({
  date,
  slots,
  selectedSlot,
  setSelectedSlot,
  selectedNumber,
}) => {
  const [slotsVisible, setSlotsVisible] = useState(false);

  return (
    <View className="flex-1">
      <View className={`flex ${selectedSlot != null && "flex-row"}`}>
        
      </View>
    </View>
  );
};

export default FindSlots;
