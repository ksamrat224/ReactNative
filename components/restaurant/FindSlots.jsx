import { Text, View } from "react-native";

const FindSlots = ({
  date,
  slots,
  selectedSlot,
  setSelectedSlot,
  selectedNumber,
}) => {
  const [slotsVisible, setSlotsVisible] = useState(false);

  return (
    <View>
      <Text>FindSlots</Text>
    </View>
  );
};

export default FindSlots;
