import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ToDoItem({ text }: { text: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.todoItem}>{text}</Text>
        </View>

    )
}
const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },  
  
  todoItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1/3,
    flexDirection: "row",
    alignItems: "center",
  }

});