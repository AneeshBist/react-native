// src/screens/Solution/styles.js

import { StyleSheet } from "react-native";

const mainStyling = () => {
  return StyleSheet.create({
    container: {
      height: "100%",
      justifyContent: "space-between",
    },
    yellowBox: {
      backgroundColor: "yellow",
      height: 200,
      width: 200,
    },
    blueBox: {
      alignSelf: "center",
      backgroundColor: "blue",
      height: 100,
      width: 100,
    },
    greenBoxContainer: {
      alignItems: "flex-end",
    },
    greenBox: {
      backgroundColor: "green",
      height: 150,
      width: 150,
    },
  });
};

export default mainStyling;
