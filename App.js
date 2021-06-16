import React, { useState } from "react"
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform
} from "react-native"
import globalStyles from "./assets/styles/global"
import uuid from "react-native-uuid"

import { Header, Todo } from "./components"

const App = () => {
  const [todos, setTodos] = useState([])

  function addTodos(task) {
    const newTodo = { id: uuid.v4(), task, completed: false }
    setTodos([...todos, newTodo])
  }

  function toggleCompleted(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }

      return todo
    })

    setTodos(newTodos)
  }

  function removeTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const renderTodos = ({ item }) => (
    <Todo
      todo={item}
      toggleCompleted={toggleCompleted}
      removeTodo={removeTodo}
    />
  ) // For FlatList todos mapping

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: 10,
        paddingTop: Platform.OS === "ios" ? 0 : 50
      }}
    >
      <Header addTodos={addTodos} />
      <View style={styles.todoListSection}>
        {todos.length ? (
          <FlatList
            data={todos}
            renderItem={renderTodos}
            keyExtractor={(todo) => todo.id}
          />
        ) : (
          <Text style={globalStyles.h2}>No Todos</Text>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  todoListSection: {
    marginTop: 30,
    marginBottom: 60,
    padding: 5
  }
})

export default App
