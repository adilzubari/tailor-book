import { View, Text, Dimensions, Button, ScrollView } from "react-native";
import React, { useState } from "react";
import { RadioButton, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import firebaseConfig from "../../../firebase/firebase-config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const db = getFirestore(firebaseConfig);

const { height, width } = Dimensions.get("screen");
const ClientMeasurements = ({ item, route, navigation }) => {
  const { Name, phone, Gender, Age } = route.params;

  const fields = [
    {
      title: "Please Enter Arm size",
      name: "armsize",
    },
    {
      title: "Please enter shoulder size",
      name: "shouldersize",
    },
    {
      title: "Please enter chest size",
      name: "chestsize",
    },
    {
      title: "Please enter neck size",
      name: "necksize",
    },
    {
      title: "Please enter kameez/shirt weist",
      name: "kameezweist",
    },
    {
      title: "Please enter kameez/shirt lenght",
      name: "kameezlength",
    },
    {
      title: "Please enter hip size",
      name: "hipsize",
    },
    {
      title: "Please enter pent/shalwar lenght",
      name: "shalwarlength",
    },
    {
      title: "Please enter pent/shalwar weist",
      name: "shalwarweist",
    },
  ];

  const onSubmit = async (e) => {
    try {
      const phoneNumber = await AsyncStorage.getItem("phoneNumber");

      const docRef = await addDoc(collection(db, "Clients"), {
        Name: Name,
        PhoneNumber: phone,
        Gender: Gender,
        Age: Age,
        measurements: e,
        added_by: phoneNumber,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",

          padding: height * 0.03,
        }}
      >
        <View>
          {fields.map(({ title, name }) => (
            <>
              <Text>{title}</Text>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    onBlur={onBlur}
                    autoFocus
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={value}
                    outlineColor="#9B71E8"
                    activeOutlineColor="#9B71E8"
                    mode="outlined"
                    style={{
                      backgroundColor: "#FFFFFF",
                      height: height * 0.04,
                      width: width * 0.8,
                    }}
                  />
                )}
                name={name}
              />
              {errors[name] && <Text>This is required.</Text>}
            </>
          ))}
        </View>
      </View>
      <View
        style={{
          backgroundColor: "#9B71E8",
          width: width * 0.5,
          alignSelf: "center",
          margin: height * 0.009,
        }}
      >
        <Button title="submit" color="white" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default ClientMeasurements;
