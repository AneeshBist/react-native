import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView, SectionList } from "react-native-web";

const MyView = () => {
  const printLog = () => {
    console.log("Button Pressed");
  };

  const animalsByHabitat = [
    {
      title: "Marine",
      data: ["Seal", "Octopus", "Otter"],
    },
    {
      title: "Desert",
      data: ["Fennec Fox", "Jerboa", "Road Runner"],
    },
    {
      title: "Rainforest",
      data: ["Coatimundi", "Okapi", "Gorilla"],
    },
    {
      title: "Mountains",
      data: ["Mountain Goat", "Snow Leopard"],
    },
  ];

  return (
    <ScrollView>
      <View>
        <Text>Hello There</Text>
        <TouchableOpacity onPress={printLog}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
        <Text>These are animals by habitat:</Text>
        <SectionList
          sections={animalsByHabitat}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Button title={item} />}
          renderSectionHeader={({ section: { title } }) => <Text>{title}</Text>}
        />
      </View>
    </ScrollView>
  );
};

export default MyView;
