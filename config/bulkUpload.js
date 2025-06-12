import { collection, doc, setDoc } from "firebase/firestore";
import { carouselImages } from "../store/restaurant";
import { db } from "./firebaseConfig";

const restaurantData = carouselImages;

const uploadData = async () => {
  try {
    for (let i = 0; i < restaurantData.length; i++) {
      const restaurant = restaurantData[i];
      const docRef = doc(collection(db, "carousel"), `carousel_${i + 1}`);
      await setDoc(docRef, restaurant);
    }
    console.log("Data uploaded successfully!");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
};
export default uploadData;
