import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { Input, Button, List, ListItem } from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 1, text: "" });

  const addTodo = () => {
    if(todo.text === "") return;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  };

  return (
    <>
      <div className="mainProvider">
        <div className="addingRow">
          <Input
            value={todo.text}
            onChange={(e) => 
              setTodo({
                id: todos[todos.length - 1]?.id + 1 || 1,
                text: e.target.value,
              })
            }
            className="input"
            variant="outline"
            htmlSize={40}
            width="auto"
            placeholder="enter something to do..."
          />

          <div className="buttonGroup" key={todo.id}>
            <Button
              onClick={() => addTodo()}
              className="buttons"
              colorScheme="green"
            >
              Add
            </Button>
          </div>
        </div>
        <List
          spacing={3}
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "15px",
          }}
        >
          {todos.map((todo) => (
            <ListItem textColor="white" key={todo.id} className="listItem">
              <Button
                className="editButton"
                colorScheme="yellow"
                border="solid"
                borderColor="white"
                borderWidth={1}
                onClick={() => {
                  setTodos(todos.filter((t) => t.id !== todo.id));
                }}
              >
                I did!
              </Button>
              {todo.text}
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
}

export default App;
