import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";

const DatePicker = ({date, setDate}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const handlePress = () => {
    setShow(true);
  };

  return (
    <View className="flex flex-row p-2">
      <TouchableOpacity
        onPress={handlePress}
        className={`flex flex-row w-full rounded-lg text-white text-base p-2 items-center justify-between ${
          Platform.OS === "android" ? "bg-[#474747]" : "bg-[#1C1C1E]"
        }`}
      >
        {Platform.OS === "android" && (
          <>
            <Text className="text-white px-2 py-1 justify-center bg-[#474747]">
              {date.toLocaleDateString()}
            </Text>
            {show && (
              <DateTimePicker
                accentColor="#f49b33"
                textColor="#f49b33"
                value={date}
                onChange={onChange}
                mode="date"
                display="default"
                minimumDate={new Date()}
                maximumDate={
                  new Date(new Date().setDate(new Date().getDate() + 7))
                }
              />
            )}
          </>
        )}
        {Platform.OS === "ios" && (
          <DateTimePicker
            value={date}
            onChange={onChange}
            mode="date"
            display="default"
            minimumDate={new Date()}
            maximumDate={new Date(new Date().setDate(new Date().getDate() + 7))}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
