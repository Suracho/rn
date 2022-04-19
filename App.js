import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [outputGoal, setOutputGoal] = useState("");
  const [allGoals, setAllGoals] = useState([]);

  const addGoal = () => {
    setAllGoals([...allGoals, {key : Math.random().toString(), value :  outputGoal}]);
    console.log(allGoals);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your text"
          value={outputGoal}
          onChangeText={(enteredText) => {
            setOutputGoal(enteredText);
          }}
        ></TextInput>
        <Button title="ADD" onPress={addGoal} />
      </View>

      <FlatList
        data={allGoals}
        renderItem={goal => (
          <View style={styles.listItems}>
            <Text> {goal.item.value} </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 100,
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInputStyle: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 3,
    marginRight: 10,
  },
  listItems: {
    borderBottomColor: "black",
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: "#ccc",
    padding: 10,
  },
});
