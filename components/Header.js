import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"
import globalStyles from "../assets/styles/global"

const Header = ({ addTodos }) => {
  const [task, setTask] = useState("")

  return (
    <View style={styles.container}>
      <Text style={globalStyles.h1}>Hello there!</Text>
      <View style={styles.inputCtn}>
        <TextInput
          style={styles.input}
          placeholder="New task..."
          onChangeText={(text) => setTask(text)}
          value={task}
        />
        <Button
          title="Add task"
          style={styles.btn}
          color="black"
          onPress={() => {
            addTodos(task)
            setTask("")
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  inputCtn: {
    width: "70%",
    padding: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
    borderRadius: 5,
    marginTop: 40
  },
  input: {
    paddingHorizontal: 5
  },
  btn: {
    height: "100%"
  }
})

export default Header
