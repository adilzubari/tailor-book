import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

import firebaseConfig from "../../../firebase/firebase-config";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, Timestamp } from "firebase/firestore";

const db = getFirestore(firebaseConfig);

const EnterName = ({ navigation }) => {
  const [Name, setName] = useState("");
  const SetUserData = async () => {
    try {
      const phoneNumber = await AsyncStorage.getItem("phoneNumber");
      const id = await AsyncStorage.getItem("id");

      const docData = {
        name: Name,
        created_at: Timestamp.fromDate(new Date()),
        created_by: id,
        modified_at: Timestamp.fromDate(new Date()),
        modified_by: id,
        phone_number: phoneNumber,
      };
      await setDoc(doc(db, "users", id), docData);
      console.log("User Added with id", id);
      navigation.navigate("HomeScreen");
    } catch (e) {
      console.log("Adding tailors error occuerd", e.message);
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Name"
        autoFocus
        onChangeText={(Name) => setName(Name)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          SetUserData();
        }}
      >
        <Text style={{ color: "white", alignSelf: "center" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EnterName;

const styles = StyleSheet.create({
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
