import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Avatar, Card, Switch } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import ClientMeasurements from "./ClientMeasurements";
//   import PaymentStatus from "./PaymentStatus";
//   import SpecialIntructions from "./SpecialIntructions";
//   import RecordAudio from "./RecordAudio";
import { FontAwesome, Ionicons, Feather } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const ClientDressDetails = ({ navigation, route }) => {
  const { Name, phone, Gender, Age } = route.params;
  const [showDatePicker, setshowDatePicker] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isMeasurementDressGiveen, setisMeasurementDressGiveen] =
    useState(false);
  return (
    <ScrollView
      style={{
        marginHorizontal: width * 0.03,
        marginVertical: width * 0.03,
      }}
    >
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          mode={"datetime"}
          is24Hour={"true"}
          display="default"
          value={new Date()}
        />
      )}
      <Card>
        <Card.Content>
          <Text
            style={{
              fontSize: 18,
            }}
          >
            Salwar Kameez #1
            {Name}
            {phone}
            {Gender}
            {Age}
          </Text>
          <View
            style={{
              borderColor: "#eeeff4",
              borderBottomWidth: 1,
              width: width * 0.8,
              marginVertical: width * 0.03,
            }}
          ></View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#181059",
              }}
            >
              Cloth Images:
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: width * 0.09,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  size={width * 0.25}
                  source={require("../../../assets/clientImage.png")}
                />
                <Text
                  style={{
                    color: "#868696",
                    marginVertical: width * 0.03,
                  }}
                >
                  Client Image
                </Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Avatar.Image
                  size={width * 0.25}
                  source={require("../../../assets/cloths.png")}
                />
                <Text
                  style={{
                    color: "#868696",
                    marginVertical: width * 0.03,
                  }}
                >
                  Cloth Image
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: "#181059",
              }}
            >
              Pattern Images:
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                paddingTop: width * 0.05,
              }}
            >
              <Card
                style={{
                  paddingHorizontal: width * 0.03,
                  paddingVertical: width * 0.03,
                }}
              >
                <Text style={{ color: "#868696", marginBottom: width * 0.03 }}>
                  Add New
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#C5C3D6",
                    padding: width * 0.06,
                    borderRadius: width * 0.02,
                  }}
                >
                  <Image source={require("../../../assets/addNew.png")} />
                </TouchableOpacity>
              </Card>
              <Card
                style={{
                  paddingHorizontal: width * 0.03,
                  paddingVertical: width * 0.03,
                  marginLeft: width * 0.09,
                }}
              >
                <Text style={{ color: "#868696", marginBottom: width * 0.03 }}>
                  Pattern one
                </Text>
                <View
                  style={{
                    backgroundColor: "#C5C3D6",
                    padding: width * 0.06,
                    borderRadius: width * 0.02,
                  }}
                >
                  <Image
                    source={require("../../../assets/pngaaa.com-1381294.png")}
                    style={{ width: 90 }}
                  />
                </View>
              </Card>
            </View>
          </View>
        </Card.Content>
      </Card>
      <Card
        style={{
          marginTop: width * 0.09,
          paddingHorizontal: width * 0.07,
          paddingVertical: width * 0.07,
        }}
      >
        <Text style={{ color: "#181059", fontSize: 16 }}>Client Details:</Text>
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
            placeholder="Client Name"
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: width * 0.05,
            }}
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
            placeholder="Client Contact"
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: width * 0.05,
            }}
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
          <Ionicons name="location" size={24} color="#8645FF" />
          <TextInput
            placeholder="Client Address"
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: width * 0.05,
            }}
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
            justifyContent: "space-between",
          }}
        >
          <Feather name="hash" size={22} color="#8645FF" />
          <TouchableOpacity>
            <Feather name="info" size={24} color="#8645FF" />
          </TouchableOpacity>
        </View>
      </Card>
      <Card
        style={{
          marginTop: width * 0.09,
          paddingHorizontal: width * 0.07,
          paddingVertical: width * 0.07,
        }}
      >
        <Text
          style={{
            color: "#181059",
            fontSize: 16,
            marginVertical: width * 0.03,
          }}
        >
          Delivery Date:
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: width * 0.02,
            paddingVertical: width * 0.03,
            // backgroundColor: "rgba(197,195,214,0.15)",
            borderColor: "#C5C3D6",
            borderWidth: 1,
            justifyContent: "space-between",
            borderRadius: width * 0.02,
          }}
        >
          <TextInput
            placeholder="Set Date"
            onFocus={() => {
              setshowDatePicker(true);
            }}
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: width * 0.05,
            }}
          />

          <Image source={require("../../../assets/calendar-date-fill.png")} />
        </View>

        <Text
          style={{
            color: "#181059",
            fontSize: 16,
            marginVertical: width * 0.03,
          }}
        >
          Remind Date
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: width * 0.02,
            paddingVertical: width * 0.03,
            borderColor: "#C5C3D6",
            borderWidth: 1,
            justifyContent: "space-between",
            borderRadius: width * 0.02,
          }}
        >
          <TextInput
            placeholder="Set Date"
            onFocus={() => {
              setshowDatePicker(true);
            }}
            style={{
              backgroundColor: "#FFFFFF",
              marginHorizontal: width * 0.05,
            }}
          />

          <Image source={require("../../../assets/calendar-date-fill.png")} />
        </View>

        <View
          style={{
            marginVertical: width * 0.03,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#2B2B2B", fontSize: 15 }}>Mark as Urgent</Text>
          <Switch
            value={isSwitchOn}
            onChange={() => {
              setIsSwitchOn(!isSwitchOn);
            }}
            color="#8645FF"
          />
        </View>
      </Card>
      <Card
        style={{
          marginTop: width * 0.09,
          paddingHorizontal: width * 0.07,
          paddingVertical: width * 0.07,
        }}
      >
        <Text
          style={{
            color: "#181059",
            fontSize: 16,
            marginVertical: width * 0.03,
          }}
        >
          Add Measurement:
        </Text>

        <View
          style={{
            marginVertical: width * 0.02,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#2B2B2B", fontSize: 13 }}>
            Measurement Dress Given?
          </Text>
          <Switch
            value={isMeasurementDressGiveen}
            onChange={() => {
              setisMeasurementDressGiveen(!isMeasurementDressGiveen);
            }}
            color="#8645FF"
          />
        </View>
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#181059",
            fontSize: 16,
          }}
        >
          Kurta:
        </Text>
        <ClientMeasurements item={"Length"} flag={false} />
        <ClientMeasurements item={"Shoulder"} flag={false} />
        <ClientMeasurements item={"Chest"} flag={false} />
        <ClientMeasurements item={"Waist"} flag={false} />
        <ClientMeasurements item={"Hip"} flag={false} />
        <ClientMeasurements item={"Gher"} flag={false} />
        <ClientMeasurements item={"Arm Length"} flag={false} />
        <ClientMeasurements item={"Arm Length Type"} flag={true} />
        <ClientMeasurements item={"Around Arm"} flag={false} />
        <ClientMeasurements item={"Wrist"} flag={false} />
        <ClientMeasurements item={"Collar Front"} flag={false} />
        <ClientMeasurements item={"Collar Back"} flag={false} />
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#181059",
            fontSize: 16,
          }}
        >
          Kurta:
        </Text>
        <ClientMeasurements item={"Length"} flag={false} />
        <ClientMeasurements item={"Waist"} flag={false} />
        <ClientMeasurements item={"Hip"} flag={false} />
        <ClientMeasurements item={"Hip"} flag={false} />
        <ClientMeasurements item={"Around Leg"} flag={false} />
        <ClientMeasurements item={"Mori"} flag={false} />
      </Card>
      {/* <PaymentStatus />
        <SpecialIntructions />
        <RecordAudio /> */}
      <View
        style={{
          marginVertical: width * 0.2,
          marginHorizontal: width * 0.03,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          // onPress={() => navigation.navigate("Login", { name: "Jane" })}
        >
          <Text style={{ color: "white" }}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ClientDressDetails;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#9B71E8",

    borderRadius: 3,
    padding: height * 0.027,
    marginHorizontal: width * 0.03,
    marginTop: height * 0.01,
  },
});
