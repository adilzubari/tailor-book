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
import firebase from "firebase/compat/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
    try {
      const jsonValue = JSON.stringify(1);
      const jsonValue2 = JSON.stringify(phoneNumber);

      await AsyncStorage.setItem("LoginState", jsonValue);
      await AsyncStorage.setItem("phoneNumber", jsonValue2);

      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log("error in storing value of user loged in", e.message);
    }
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
