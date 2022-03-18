import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link,  } from "react-router-dom";
import { useState } from "react";
import { ActiveTask } from "./ActiveTask";
import { AllTask } from "./AllTask";
import { CompltedTask } from "./CompltedTask";
import { AddTask } from "./AddTask";

function App() {
 
  
  const [task, setTask] = useState([
    {
      text: "Create theme",
      isCompleted: false,
    },
    {
      text: "complete the assignment",
      isCompleted: false,
    },
    {
      text: "Organize office main department",
      isCompleted: false,
    },
    {
      text: "Solve the errors",
      isCompleted: false,
    },
  ]);
const[taskCompleted, setTaskCompleted]= useState("");
const[taskActive, settaskActive]= useState("");
  const toggleTask = (index) => {
    const newTask = [...task];

    if (newTask[index].isCompleted) {
      newTask[index].isCompleted = false;
    } else {
      newTask[index].isCompleted = true;
    }
    setTask(newTask);
  };
  // const removeTask=(index)=>{
  //   const remainingTask=[...task];
  //   remainingTask.splice(index,1);
  //   setTask(remainingTask);
  //   console.log(remainingTask);
  //   const activeRemainingTask=[...taskActive];
  //   activeRemainingTask.splice(index,1);
  //   settaskActive(activeRemainingTask);
  //   console.log(activeRemainingTask);
  //   const completedRemainingTask= [...taskCompleted];
  //   completedRemainingTask.splice(index,1);
  //   setTaskCompleted(completedRemainingTask);
  //   console.log(completedRemainingTask);
  // }
  const removeTaskCompleted=(index)=>{
    const completedRemainingTask= [...taskCompleted];
    completedRemainingTask.splice(index,1);
   setTaskCompleted(completedRemainingTask);
   const newTask=task.filter(task=>task.isCompleted===false);
     setTask([...completedRemainingTask,...newTask])
  }

const removeTaskActive=(index)=>{
  const activeRemainingTask=[...taskActive];
     activeRemainingTask.splice(index,1);
    settaskActive(activeRemainingTask);
    const newTask=task.filter(task=>task.isCompleted===true);
    setTask([...newTask,...activeRemainingTask])
}
const removeTaskAll=(index)=>{
  const remainingTask=[...task];
     remainingTask.splice(index,1);
     setTask(remainingTask);
}


const activeTask=()=>{
  const newTask = task.filter(task=>task.isCompleted===false);
  settaskActive(newTask);
 

}
   const allTask=()=>{
     const newTask=[...task];
     setTask(newTask);
   } 
   const completedTask=()=>{
     const newTask=task.filter(task=>task.isCompleted===true);
     setTaskCompleted(newTask);
  
   }

  return (
    <div className="App">
      <h2>Todo App</h2>
      <AddTask setTask={setTask} task={task} settaskActive={settaskActive}/>
      <Link  onClick={()=>allTask()} className="link" to="/">
        All
      </Link>
      <Link onClick={()=>activeTask()} className="link" to="/activeTask">
        Active
      </Link>
      <Link  onClick={()=>completedTask()} className="link" to="/completedTask">
        Completed
      </Link>

      <Switch>
        <Route path="/completedTask">
          <CompltedTask taskCompleted={taskCompleted} toggleTask={toggleTask} removeTaskCompleted={removeTaskCompleted}/>
        </Route>
        <Route path="/activeTask">
          <ActiveTask  taskActive={taskActive} toggleTask={toggleTask} removeTaskActive={removeTaskActive} />
        </Route>
        {/* <Route path="/allTask">
          <AllTask task={task} toggleTask={toggleTask} removeTask={removeTask}/>        
        </Route> */}
        <Route path="/">
          <AllTask task={task} toggleTask={toggleTask} removeTaskAll={removeTaskAll}/>        
        </Route>
      </Switch>


    </div>
  );
}

export default App;


