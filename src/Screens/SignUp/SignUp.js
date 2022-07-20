import * as React from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../firebase/firebase-config";
import { auth } from "../../../firebase/firebase-config";
import { PhoneAuthProvider } from "firebase/auth";
export default function SignUp({ navigation }) {
  const recaptchaVerifier = React.useRef(null);
  const [phoneNumber, setPhoneNumber] = React.useState();
  const [message, showMessage] = React.useState(
    !firebaseConfig || Platform.OS === "web"
      ? {
          text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device.",
        }
      : undefined
  );

  const sendCode = async () => {
    try {
      const provider = new PhoneAuthProvider(auth);
      const verificationId = await provider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      showMessage({
        text: "Verification code has been sent to your phone.",
        onPress: navigation.navigate("ConfirmCode", {
          verificationId,
          phoneNumber,
        }),
      });
    } catch (err) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Image source={require("../../../assets/login.png")} />
      <Text
        style={{
          fontSize: 28,
          color: "#000000",
          fontWeight: "bold",
          padding: 15,
        }}
      >
        Login to Your Account
      </Text>
      <Text style={{ fontSize: 15 }}>
        Welcome Back,please enter your phone number.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="+92 340 5682586"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        maxLength={13}
        onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          sendCode();
        }}
        // onPress={() => navigation.navigate("ConfirmCode", 1)}
      >
        <Text style={{ color: "white", alignSelf: "center" }}>Next</Text>
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
