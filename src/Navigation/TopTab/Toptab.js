import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Active from "../../Screens/ToptabScreens/Active/Active";
import Completed from "../../Screens/ToptabScreens/Completed/Completed";
import Delivered from "../../Screens/ToptabScreens/Delivered/Delivered";
import OrderDetails from "../../Screens/ToptabScreens/OrderDetails/OrderDetails";
import PastDue from "../../Screens/ToptabScreens/PastDue/PastDue";
import Upcoming from "../../Screens/ToptabScreens/Upcoming/Upcoming";
import Urgent from "../../Screens/ToptabScreens/Urgent/Urgent";

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#8645FF",
        tabBarInactiveTintColor: "#C5C3D6",
        tabBarScrollEnabled: true,
        tabBarItemStyle: { width: 110 },
      }}
    >
      <TopTab.Screen name="Active" component={Active} options={{}} />
      <TopTab.Screen name="PastDue" component={PastDue} />
      <TopTab.Screen name="Completed" component={Completed} />
      <TopTab.Screen name="Upcoming" component={Upcoming} />
      <TopTab.Screen name="Urgent" component={Urgent} />
      <TopTab.Screen name="Delivered" component={Delivered} />
      <TopTab.Screen name="OrderDetails" component={OrderDetails} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;
