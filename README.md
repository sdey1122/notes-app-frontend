<h1 align="center">Notes App Frontend Project</h1>

<p align="center">
  ![Image 1](https://github.com/sdey1122/notes-app-frontend/raw/master/s1.png "Image 1")
  ![Image 2](https://github.com/sdey1122/notes-app-frontend/master/s2.png "Image 2")
  ![Image 2](https://github.com/sdey1122/notes-app-frontend/master/s2.png "Image 2")
</p>

## Table of Contents
- [Introduction](#introduction)
- [TodoList.js](#todolistjs)
  - [Imports](#imports)
  - [Custom Themes](#custom-themes)
  - [Functional Component](#functional-component)
  - [useEffect Hooks](#useeffect-hooks)
  - [Event Handlers](#event-handlers)
  - [JSX Structure](#jsx-structure)
- [TodoList.css](#todolistcss)
  - [CSS Styles](#css-styles)
- [Global Styling](#global-styling)
- [Note](#note)

---

## Introduction

Welcome to the Notes App Frontend project. This document provides an overview of the code and styling used in the project.

## TodoList.js

### Imports
- React, useState, useEffect: Used for building the component and handling state.
- Material-UI components (Button, TextField, List, ListItem, ListItemText, IconButton, Grid, ThemeProvider, createTheme, Switch, useTheme): Material-UI is a popular UI library for React that provides styled components and themes.
- Material-UI Icons (DeleteIcon, EditIcon, CheckIcon, ClearIcon): Icons used for various actions.
- Transition components from `react-transition-group`: Used for animations.
- Custom CSS from "TodoList.css": Imported CSS file for styling.

### Custom Themes
- `lightTheme` and `darkTheme`: Custom Material-UI themes for light and dark modes, defining color palettes, typography, and component styles.

### Functional Component
- `TodoListThree`: The main functional component representing the todo list application.
- Manages state variables such as `inputValue`, `editValue`, `todos`, and `isDarkMode` using `useState`.

### useEffect Hooks
- Utilizes `useEffect` hooks for managing local storage and applying dark mode changes.

### Event Handlers
- `handleAddTodo`: Handles adding new todos to the list.
- `handleEditTodo`: Initiates editing a todo item.
- `handleUpdateTodo`: Updates a todo item after editing.
- `handleCancelEdit`: Cancels editing mode for a todo item.
- `handleDeleteTodo`: Deletes a todo item.
- `toggleTheme`: Toggles between light and dark themes.

### JSX Structure
- Uses Material-UI's `ThemeProvider` to apply the selected theme.
- Renders a form for adding new todos.
- Maps over `todos` to display a list of items.
- Animates item transitions using `TransitionGroup` and `CSSTransition`.

## TodoList.css

### CSS Styles
- Defines keyframes for the slide-down fade-in animation.
- Styles for the animated heading, form, list items, list item text, buttons, and icon buttons.
- Responsive design adjustments for smaller screens.

## Global Styling
- Provides global styling for the body of the application.

## Note
- This is just a code summary. You can include explanations and details as needed in your documentation.

