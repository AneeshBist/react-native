import { View, Text } from "react-native";
import mainStyling from "../../styles/mainStyling";

export default function LayoutBox() {
  const styleFn = mainStyling();
  return (
    <View style={styleFn.container}>
      <View style={styleFn.yellowBox}>
        <Text>I'm a yellow square!</Text>
      </View>

      <View style={styleFn.blueBox}>
        <Text>I'm a blue square!</Text>
      </View>

      <View style={styleFn.greenBoxContainer}>
        <View style={styleFn.greenBox}>
          <Text>I'm a green square!</Text>
        </View>
      </View>
    </View>
  );
}
