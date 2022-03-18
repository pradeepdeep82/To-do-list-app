import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export function AddTask({ setTask, task, settaskActive }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text !== "") {
      setTask([...task, { text, isCompleted: false }]);
      settaskActive([...task, { text, isCompleted: false }]);
      setText("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={text}
          onChange={(event) => setText(event.target.value)}
          label="New Task..."
          id="newTask" />
        <Button type="submit" variant="contained" endIcon={<AddIcon />}>
          Add Task
        </Button>
      </form>
    </div>
  );
}
