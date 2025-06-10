import { useRouter } from "expo-router";
import { Formik } from "formik";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import frame from "../../assets/images/Frame.png";

const Signup = () => {
  const router = useRouter();
  const handleSignup = () => {};
  return (
    <SafeAreaView className={`bg-[#1f2937]`}>
      <StatusBar barStyle="light-content" backgroundColor={"#1f2937"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex items-center justify-center">
          <Image source={logo} style={{ width: "200", height: "100" }} />
          <Text className="text-white text-lg text-center font-bold mb-8">
            Let's get you started.
          </Text>

          <View className="w-5/6 ">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={""}
              onSubmit={handleSignup}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="w-full">
                  <Text className="text-[#f49b33] font-bold  mt-2 mb-2">Email:</Text>
                  <TextInput
                    className="h-15 border border-white text-white rounded px-2 "
                    keyboardType="email-address"
                    onChangeText={handleChange("email")}
                    value={values.email}
                    onBlur={handleBlur("email")}
                  />
                  {touched.email && errors.email && (
                    <Text className="text-red-600 text-xs mb-2">
                      {errors.email}{" "}
                    </Text>
                  )}

                  <Text className="text-[#f49b33] mt-4 mb-2 font-bold">Password:</Text>
                  <TextInput
                    className="h-15 border border-white text-white rounded px-2 "
                    secureTextEntry
                    onChangeText={handleChange("password")}
                    value={values.password}
                    onBlur={handleBlur("password")}
                  />
                  {touched.password && errors.password && (
                    <Text className="text-red-600 text-xs mb-2">
                      {errors.password}{" "}
                    </Text>
                  )}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-[#f49b33] text-black p-4 my-2 rounded-lg shadow-lg mt-10"
                  >
                    <Text className="text-center text-lg font-bold">
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={frame}
            className="w-full h-full "
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
