import React from "react";

import { Button, StyleSheet, View } from "react-native";
import firebaseConfig from "../../../firebase/firebase-config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const db = getFirestore(firebaseConfig);

export default function CustomerDetails() {
  const AddData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        alignSelf: "center",
        flex: 1,
      }}
    >
      <Button title="add data" onPress={() => AddData()} />
    </View>
  );
}

// const styles = StyleSheet.create({});
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// export default function Crud() {
//   return (
//     <View>
//       <Text>Crud</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
