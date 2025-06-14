import { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const DatePicker = () => {
  const [show, setShow] = useState(false);
  const handlePress = () => {
    setShow(true);
  };
  return (
    <View className="flex flex-row">
      <TouchableOpacity onPress={handlePress}></TouchableOpacity>
    </View>
  );
};

export default DatePicker;
