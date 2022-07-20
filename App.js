import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import SignUp from "./src/Screens/SignUp/SignUp";
import Starter from "./Starter";
import CustomerDetails from "./src/Screens/CustomerDetails/CustomerDetails";
import ClientMeasurements from "./src/Screens/AddClient/ClientMeasurements";
import ClientDressDetails from "./src/Screens/AddClient/ClientDressDetails";
import AddClient from "./src/Screens/AddClient/AddClient";
import ConfirmCode from "./src/Screens/SignUp/ConfirmCode/ConfirmCode";
import EnterName from "./src/Screens/EnterName/EnterName";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Starter"
          component={Starter}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ConfirmCode"
          component={ConfirmCode}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Crud"
          component={CustomerDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ClientMeasurements"
          component={ClientMeasurements}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="ClientDressDetails"
          component={ClientDressDetails}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="AddClient"
          component={AddClient}
          // options={{
          //   headerShown: false,
          // }}
        />
        <Stack.Screen
          name="EnterName"
          component={EnterName}
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
