import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore, setDoc } from "firebase/firestore";
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
import validationSchema from "../../utils/authSchema";

const Signup = () => {
  const router = useRouter();
  const auth = getAuth();
  const db = getFirestore();
  const handleSignup = async (values) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredentials.user;
      await setDoc
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
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
              validationSchema={validationSchema}
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
                  <Text className="text-[#f49b33] font-bold  mt-2 mb-2">
                    Email:
                  </Text>
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

                  <Text className="text-[#f49b33] mt-4 mb-2 font-bold">
                    Password:
                  </Text>
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
            <View>
              <TouchableOpacity
                className="flex flex-row items-center justify-center mt-4 p-2"
                onPress={() => router.push("/signin")}
              >
                <Text className="text-white font-semibold ">
                  Already a User?{" "}
                </Text>
                <Text className="text-[#f49b33] font-semibold text-base  underline">
                  Sign In
                </Text>
              </TouchableOpacity>
              <Text className="text-white text-lg text-center  font-semibold mb-4">
                <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />{" "}
                or{" "}
                <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
              </Text>
              <TouchableOpacity
                className="flex flex-row items-center justify-center mb-4 p-2"
                onPress={() => router.push("/home")}
              >
                <Text className="text-white font-semibold ">Be a</Text>
                <Text className="text-[#f49b33] font-semibold text-base  underline">
                  {" "}
                  Guest User
                </Text>
              </TouchableOpacity>
            </View>
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