import * as React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { firebaseConfig } from "../../../../firebase/firebase-config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import { collection, query, where, getDocs } from "firebase/firestore";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../../../firebase/firebase-config";
import { db } from "../../../../firebase/firebase-config";

export default function ConfirmCode({ navigation, route }) {
  const { verificationId, phoneNumber } = route.params;
  const [verificationCode, setVerificationCode] = React.useState();
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );
  const confirmCode = async () => {
    try {
      const credential = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      signInWithCredential(auth, credential);
      showMessage({ text: "Phone authentication successful 👍" });
      const q = query(
        collection(db, "users"),
        where("phone_number", "==", "+923405102109")
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);

      let docs = querySnapshot.docs;
      let Docid = docs.id;
      docs = docs.map((e) => e.data());
      console.log("Docid", Docid);

      if (docs.length == 0) {
        //if user not exist
        const jsonValue = JSON.stringify(1);
        const jsonValue2 = JSON.stringify(phoneNumber);
        const jsonValue3 = JSON.stringify(uuid.v4());
        await AsyncStorage.setItem("LoginState", jsonValue);
        await AsyncStorage.setItem("phoneNumber", jsonValue2);
        await AsyncStorage.setItem("id", jsonValue3);
        navigation.navigate("EnterName");
      } else {
        // if user exist(tailor exist already)
        const jsonValue = JSON.stringify(1);
        const jsonValue2 = JSON.stringify(phoneNumber);

        await AsyncStorage.setItem("LoginState", jsonValue);
        await AsyncStorage.setItem("phoneNumber", jsonValue2);
        await AsyncStorage.setItem("id", Docid);

        navigation.navigate("HomeScreen");
      }
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
    // try {
    //   const q = query(
    //     collection(db, "users"),
    //     where("phone_number", "==", phoneNumber)
    //   );
    //   const querySnapshot = await getDocs(q);
    //   if (!querySnapshot) {
    //     //if user not exist
    //     const jsonValue = JSON.stringify(1);
    //     const jsonValue2 = JSON.stringify(phoneNumber);
    //     const jsonValue3 = JSON.stringify(uuid.v4());
    //     await AsyncStorage.setItem("LoginState", jsonValue);
    //     await AsyncStorage.setItem("phoneNumber", jsonValue2);
    //     await AsyncStorage.setItem("id", jsonValue3);
    //     navigation.navigate("EnterName");
    //   } else {
    //     //if user exist(tailor exist already)
    //     const jsonValue = JSON.stringify(1);
    //     const jsonValue2 = JSON.stringify(phoneNumber);
    //     const jsonValue3 = JSON.stringify(uuid.v4());

    //     await AsyncStorage.setItem("LoginState", jsonValue);
    //     await AsyncStorage.setItem("phoneNumber", jsonValue2);
    //     await AsyncStorage.setItem("id", jsonValue3);

    //     navigation.navigate("HomeScreen");
    //   }
    // } catch (e) {
    //   console.log("error in storing value of user loged in", e.message);
    // }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 28,
          color: "#000000",
          fontWeight: "bold",
          padding: 15,
        }}
      >
        Enter Varification Code
      </Text>
      <Text style={{ fontSize: 15 }}>
        Please Enter Code We Have Send To You.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="265512"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={setVerificationCode}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          confirmCode();
        }}
      >
        <Text style={{ color: "white", alignSelf: "center" }}>Confirm</Text>
      </TouchableOpacity>
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: "center" },
          ]}
          onPress={() => showMessage(undefined)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    padding: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#c5c5c5",
    marginTop: 50,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#9B71E8",
    borderRadius: 3,
    padding: 5,
    marginTop: 40,
    height: 50,
    width: 250,
    justifyContent: "center",
  },
});
