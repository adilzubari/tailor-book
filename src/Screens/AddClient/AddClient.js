import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Card, RadioButton, Avatar } from "react-native-paper";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { async } from "@firebase/util";

const { width, height } = Dimensions.get("screen");

const AddClient = ({ navigation }) => {
  const [Name, setName] = useState();
  const [phone, setPhone] = useState();
  const [Gender, setGender] = useState();
  const [Age, setAge] = useState();

  return (
    <ScrollView
      style={{
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.04,
      }}
    >
      <Card>
        <Card.Content>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "rgba(28,55,90,0.16)",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingHorizontal: width * 0.02,
              paddingVertical: width * 0.04,
            }}
          >
            <FontAwesome name="user" size={24} color="#8645FF" />

            <TextInput
              style={{
                backgroundColor: "#FFFFFF",
                marginHorizontal: width * 0.05,
                height: height * 0.03,
                width: width * 0.7,
              }}
              placeholder="Client Name"
              autoFocus
              onChangeText={(Name) => setName(Name)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "rgba(28,55,90,0.16)",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingHorizontal: width * 0.02,
              paddingVertical: width * 0.04,
            }}
          >
            <FontAwesome name="phone" size={24} color="#8645FF" />

            <TextInput
              style={{
                backgroundColor: "#FFFFFF",
                marginHorizontal: width * 0.05,
                height: height * 0.03,
                width: width * 0.7,
              }}
              placeholder="Phone Number"
              autoCompleteType="tel"
              keyboardType="phone-pad"
              textContentType="telephoneNumber"
              maxLength={11}
              onChangeText={(phone) => setPhone(phone)}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "rgba(28,55,90,0.16)",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingHorizontal: width * 0.02,
              paddingVertical: width * 0.04,
            }}
          >
            <FontAwesome name="calendar" size={24} color="#8645FF" />

            <TextInput
              style={{
                backgroundColor: "#FFFFFF",
                marginHorizontal: width * 0.05,
                height: height * 0.03,
                width: width * 0.7,
              }}
              placeholder="Age"
              keyboardType="phone-pad"
              maxLength={2}
              onChangeText={(Age) => setAge(Age)}
            />
          </View>
          <View
            style={{
              marginVertical: height * 0.04,
            }}
          >
            <Text style={{ color: "#2B2B2B", fontSize: 16 }}>
              Select Gender:
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: width * 0.04,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RadioButton
                  value="Male"
                  status={Gender === "Male" ? "checked" : "unchecked"}
                  onPress={() => setGender("Male")}
                  color="#8645FF"
                  uncheckedColor="#8645FF"
                />
                <Text style={{ fontSize: 18, color: "#2B2B2B" }}> Male</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <RadioButton
                  color="#8645FF"
                  uncheckedColor="#8645FF"
                  value="Female"
                  status={Gender === "Female" ? "checked" : "unchecked"}
                  onPress={() => setGender("Female")}
                />
                <Text style={{ fontSize: 18, color: "#2B2B2B" }}> Female</Text>
              </View>
            </View>
          </View>
        </Card.Content>
      </Card>
      <View style={{ justifyContent: "space-between", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("ClientMeasurements", {
              Name,
              phone,
              Gender,
              Age,
            })
          }

          //   onPress={() => navigation.navigate("ClientMeasurements")}
        >
          <Text style={{ color: "white" }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AddClient;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#9B71E8",

    borderRadius: 3,
    padding: height * 0.016,
    // marginHorizontal: width * 1,
    width: width * 0.5,
    marginTop: height * 0.02,
  },
  cardStyle: {
    marginHorizontal: 2,
    marginVertical: 10,
    padding: width * 0.09,
  },
  selectedCardStyle: {
    borderWidth: 2,
    borderColor: "#8645FF",
  },
});
