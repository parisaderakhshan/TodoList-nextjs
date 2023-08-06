import styles from "./Todo.module.css";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Todo = () => {
  return (
    <div className={styles.todo}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Todo list</h1>
        </div>
        <div style={{ height: "55px" }} className={styles.input}>
          <TextField
            style={{ width: "100%", height: "55px" }}
            id="outlined-basic"
            label="Enter your task"
            variant="outlined"
          />
          <div
            style={{
              width: "35%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "10px",
            }}
            className={styles.add}
          >
            <Button
              style={{ width: "100%", height: "55px", background: "#A9DDF8",color:"black" }}
              variant="contained"
            >
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
