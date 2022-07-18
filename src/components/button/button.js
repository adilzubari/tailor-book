import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function button({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        height: 63,
        width: 378,
        backgroundColor: "#9b71e8",
        alignSelf: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: "white", alignSelf: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
}
