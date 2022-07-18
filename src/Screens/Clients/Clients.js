import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("screen");
import { collection, getDocs } from "firebase/firestore";
import firebaseConfig from "../../../firebase/firebase-config";
import { getFirestore } from "firebase/firestore";
const db = getFirestore(firebaseConfig);

const Clients = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const GetDocs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Clients"));
      const data = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log("data", data);
      setData(data);
    } catch (error) {
      console.error("Error getting document: ", error);
    }
  };
  const ListItemView = ({ item }) => (
    <Text style={{ fontSize: 24, color: "black" }}>{item.id}</Text>
  );

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      GetDocs();
      //   console.log("aya");
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <View style={{ flex: 0.9 }}>
        <Text>start</Text>
        <FlatList
          //   key={Data ? "h" : "v"}
          //   numColumns={2}
          data={Data}
          //   keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListItemView item={item} />}
        />
        <Text>last</Text>
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          style={{
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5,
            flexDirection: "row-reverse",
          }}
          onPress={() => navigation.navigate("AddClient")}
        >
          <Ionicons
            name="add-circle"
            size={65}
            color="#8645FF"
            style={{
              marginTop: -width * 0.04,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Clients;

const styles = StyleSheet.create({});
