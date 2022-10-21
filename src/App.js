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
} from "@chakra-ui/react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <ChakraProvider>
      <div className="mainProvider">
        <Input
          value={todo}
          onChange={e => setTodo(e.target.value)}
          className="input"
          variant="outline"
          htmlSize={50}
          width="auto"
          placeholder="enter something to do..."
        />

        <div className="buttonGroup">
          
          <Button
            onClick={() => {
              setTodos([...todos, todo]);
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: "15px",
          }}
        >
          {todos.map(todo => (
          <ListItem textColor="white">
            <ListIcon color="green.500" />
            {todo}
          </ListItem>
          ))}
          <ListItem textColor="white">
            <ListIcon color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem textColor="white">
            <ListIcon color="green.500" />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
        </List>
      </div>
    </ChakraProvider>
  );
}

export default App;
