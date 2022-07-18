import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BottomTabs from "../../Navigation/BottomTabs/BottomTabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
const Drawer = createDrawerNavigator();

const MainScreen = ({ navigation }) => {
  const logout = async () => {
    try {
      const jsonValue = JSON.stringify(0);
      await AsyncStorage.setItem("LoginState", jsonValue);
      navigation.navigate("SignUp");
    } catch (e) {
      console.log("setting logout", e.message);
    }
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerRight: ({ tintColor, focused }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {/* <Ionicons
              name="search"
              color={focused ? "white" : "#FFFFFF"}
              style={{
                fontSize: 25,
                marginHorizontal: 15,
              }}
            />
            <Ionicons
              name="notifications"
              color={focused ? "#FFFFFF" : "#FFFFFF"}
              style={{
                fontSize: 25,
              }}
            /> */}
            <Ionicons
              name="log-out-outline"
              color={focused ? "#FFFFFF" : "#FFFFFF"}
              style={{
                fontSize: 25,
              }}
              onPress={() => logout()}
            />
          </View>
        ),

        headerStyle: {
          backgroundColor: "#8645FF",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
        headerTitle: <Text>TailorBook.</Text>,
      }}
    >
      <Drawer.Screen
        name="BottomTabNavigation."
        component={BottomTabs}
        options={{ title: "TailorBook" }}
      />
    </Drawer.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
