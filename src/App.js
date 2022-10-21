import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import {
  ChakraProvider,
  Input,
  Button,
  List,
  ListItem,
  ListIcon,
  Badge,
} from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({ id: 1, text: "Learn React" });
  return (
    <ChakraProvider>
      <div className="mainProvider">
        <Input
          value={todo.text}
          onChange={(e) =>
            setTodo({
              id: todos.length + 1,
              text: e.target.value,
            })
          }
          className="input"
          variant="outline"
          htmlSize={50}
          width="auto"
          placeholder="enter something to do..."
        />

        <div className="buttonGroup" key={todo.id}>
          <Button
            onClick={() => {
              setTodos([todo, todos]);
            }}
            className="buttons"
            colorScheme="green"
          >
            Add
          </Button>
          <Button className="buttons" colorScheme="blue">
            Clear
          </Button>
          <Button className="buttons" colorScheme="red">
            Clear Completed
          </Button>
          <Button className="buttons" colorScheme="yellow">
            Edit
          </Button>
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
              >
                Edit
              </Button>
              {todo.text}
            </ListItem>
          ))}
        </List>
      </div>
    </ChakraProvider>
  );
}

export default App;
