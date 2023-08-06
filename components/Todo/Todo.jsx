import styles from "./Todo.module.css";
import React from "react";
import TextField from "@mui/material/TextField";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Todo list</h1>
        </div>
        <div className={styles.input}>
          <TextField
          style={{width:'100%'}}
            id="outlined-basic"
            label="Enter your task"
            variant="outlined"
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
