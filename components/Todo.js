import React from "react"
import { View, Text, StyleSheet, CheckBox, Button } from "react-native"

const Todo = ({ todo, toggleCompleted, removeTodo }) => {
  const { id, task, completed } = todo
  return (
    <View style={styles.todo}>
      <CheckBox value={completed} onValueChange={() => toggleCompleted(id)} />
      <Text style={styles.todoText}>{task}</Text>
      <Button title="X" color="red" onPress={() => removeTodo(id)} />
    </View>
  )
}

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.1)",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "80%",
    alignSelf: "center"
  },
  todoText: {
    fontSize: 16,
    color: "black"
  }
})

export default Todo
