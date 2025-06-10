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
          <Image source={logo} style={{ width: "300", height: "300" }} />
          <Text className="text-white text-lg text-center font-bold mb-10">
            Let's get you started.
          </Text>
        </View>

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
                <Text>Email:</Text>
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

                <Text>Password:</Text>
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
                  onPress={() => router.push("/signup")}
                  className="bg-[#f49b33] text-black p-4 my-2 rounded-lg shadow-lg"
                >
                  <Text className="text-center text-lg font-bold">Sign Up</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
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
