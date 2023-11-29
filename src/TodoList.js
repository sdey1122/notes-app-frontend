import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css"; // Import your CSS file here

// Custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.125rem", // Larger for major headings
      fontWeight: 500,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h2: {
      fontSize: "1.625rem", // For section headings
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
    },
    h3: {
      fontSize: "1.5rem", // For sub-section headings
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h4: {
      fontSize: "1.25rem", // For smaller headings
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h5: {
      fontSize: "1rem", // For minor headings
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    h6: {
      fontSize: "0.875rem", // For the smallest headings
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.0075em",
    },
    subtitle2: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem", // For primary body text
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem", // For secondary body text
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      textTransform: "none", // Button text styling
      fontWeight: 500,
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem", // For captions and annotations
      fontWeight: 400,
      lineHeight: 1.66,
    },
    overline: {
      fontSize: "0.75rem", // For overlines and smaller text
      fontWeight: 400,
      lineHeight: 2.66,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "8px 0",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: "8px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          "&:hover": {
            backgroundColor: "rgba(0,0,0,0.04)",
          },
        },
      },
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
});

const TodoListThree = () => {
  const [inputValue, setInputValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, isEditing: false }]);
      setInputValue("");
    }
  };

  const handleEditTodo = (indexToEdit) => {
    setEditValue(todos[indexToEdit].text);
    setTodos(
      todos.map((todo, index) =>
        index === indexToEdit ? { ...todo, isEditing: true } : todo
      )
    );
  };

  const handleUpdateTodo = (indexToUpdate) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToUpdate
          ? { ...todo, text: editValue, isEditing: false }
          : todo
      )
    );
    setEditValue("");
  };

  const handleCancelEdit = (indexToCancel) => {
    setTodos(
      todos.map((todo, index) =>
        index === indexToCancel ? { ...todo, isEditing: false } : todo
      )
    );
    setEditValue("");
  };

  const handleDeleteTodo = (indexToDelete) => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      setTodos(todos.filter((_, index) => index !== indexToDelete));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ padding: "20px" }}
      >
        <Grid item xs={12} md={6}>
          <form
            onSubmit={handleAddTodo}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <TextField
              label="Add Todo"
              variant="outlined"
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={{ marginRight: "10px" }}
            />
            <Button variant="contained" color="primary" type="submit">
              Add
            </Button>
          </form>
          <List>
            <TransitionGroup>
              {todos.map((todo, index) => (
                <CSSTransition
                  key={index}
                  timeout={500}
                  classNames="todo-transition"
                >
                  <ListItem
                    style={{
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {todo.isEditing ? (
                      <>
                        <TextField
                          variant="outlined"
                          fullWidth
                          value={editValue}
                          onChange={(e) => setEditValue(e.target.value)}
                          style={{ marginRight: "10px" }}
                        />
                        <IconButton
                          onClick={() => handleUpdateTodo(index)}
                          color="primary"
                        >
                          <CheckIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleCancelEdit(index)}
                          color="secondary"
                        >
                          <ClearIcon />
                        </IconButton>
                      </>
                    ) : (
                      <>
                        <ListItemText primary={todo.text} />
                        <IconButton
                          onClick={() => handleEditTodo(index)}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDeleteTodo(index)}
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </>
                    )}
                  </ListItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </List>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default TodoListThree;
