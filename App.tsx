

import React, { useState } from "react";
import { Text, View, TextInput, Pressable, ScrollView } from "react-native";
import { styles } from './styles';

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<boolean>(false);

  const handleSubmit = (): void => {
    if (value.trim()) {
      setToDos([...toDoList, { text: value, completed: false }]);
    } else {
      showError(true);
    }
    setValue("");
  };

  const removeItem = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDos(newToDoList);
  };

  const toggleComplete = (index: number): void => {
    const newToDoList = [...toDoList];
    newToDoList[index].completed = !newToDoList[index].completed;
    setToDos(newToDoList);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>TASKEASE - MY TO DO LIST</Text>
       
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="ENTER YOUR TASK"
            value={value}
            onChangeText={(e) => {
              setValue(e);
              showError(false);
            }}
            style={styles.inputBox}
          />
          <Pressable
            style={styles.addButton}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>ADD</Text>
          </Pressable>
        </View>
        {error && (
          <Text style={styles.error}>Error: Input field is empty...</Text>
        )}
        <Text style={styles.subtitle}>TASK LIST</Text>
        {toDoList.length === 0 && <Text>No to do task available</Text>}
        {toDoList.map((toDo: IToDo, index: number) => (
          <View style={styles.listItem} key={`${index}_${toDo.text}`}>
            <Text
              style={[
                styles.task,
                { textDecorationLine: toDo.completed ? "line-through" : "none" }
              ]}
            >
              {toDo.text}
            </Text>
            <Pressable
              style={styles.completeButton}
              onPress={() => toggleComplete(index)}
            >
              <Text style={styles.buttonText}>
                {toDo.completed ? "To Do" : "Done"}
              </Text>
            </Pressable>
            <Pressable
              style={styles.deleteButton}
              onPress={() => {
                removeItem(index);
              }}
            >
              <Text style={styles.buttonText}> X </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
