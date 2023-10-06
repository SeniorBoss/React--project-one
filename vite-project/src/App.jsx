 import { createContext, useState } from "react"
 import "./App.css"
 import Task from "./Task"
 import {CiLight} from "react-icons/ci"
 import Saver from "./assets/Saver.jsx"
import Completed from "./Completed"
import Remain from "./RemainTask"
import "./assets/Mobile.css"


export const ThemeContext = createContext(null);

const myApp = () =>{
const [todolist, setTodoList] = useState ([])
const [newTask, setnewTask] = useState ("")
const [taskCount, setTaskCount] = useState(0);
const [completedTask, setCompleteTask] = useState ([])
const [showTodo, setshowTodo] = useState (true)
const [showComplete, setshowComplete] = useState (false)
const [theme, setTheme] =useState ("light")
const [showRemain, setShowRemain] = useState (false)
const [addNewTask, setAddNewtask] =useState([])
const [completedTasks, setCompletedTasks2] = useState([
  {
    id: 1,
    taskName: "Task 1",
  },
  {
    id: 2,
    taskName: "Task 2",
  },
]);



const toggletheme =() =>{
  setTheme ((curr) =>(curr) === "light" ? "dark" :"light");
}
const handleNewTask = (event)=>{
 setnewTask (event.target.value)
 
}

const handleTodoList = ()=>{
  setnewTask("")
  if(newTask.trim() !== ""){
    const task ={
      id: todolist.length === 0 ? 1 : todolist [todolist.length -1] .id +1,
      taskName: newTask ,
      completed:false
    }
    setTodoList([...todolist, task])
   setnewTask(" ")
    setTaskCount(taskCount + 1);
    
  }else{
    window.alert("Please enter a valid task name."); 
  }
}

const deleteTask =(id) =>{
  setTodoList (todolist.filter((task) => task.id !== id))
  setTaskCount(taskCount - 1)
}


const completeTask = (id) => {
  setTodoList(
    todolist.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task, completed: !task.completed };
        if (updatedTask.completed) {
          setCompleteTask([...completedTask, updatedTask]);
        } else {

          setCompleteTask(completedTask.filter((t) => t.id !== id));
        }
        return updatedTask;
      } else {
        return task;
      }
    })
  );
};


// const deleteCompleteTask =(id) =>{
//   setTodoList (completedTask.filter((task) => task.id !== id))
// }

console.log(todolist);
console.log('Newly Task',completedTask);

  const remainTask = todolist.filter((task) => !task.completed)
  console.log("Odumodu",remainTask)

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className="container" id={theme}>
        <div className="holder">
          <div className="newtodoheader">
            <h1>TODO</h1>
            <CiLight className="light" onClick={toggletheme}/>
          </div>

          <div className="innercontoler">
          <input type="text" value={newTask} onChange={handleNewTask} className="input"/>
          <button className="taskbutton" onClick={handleTodoList}>Add Task</button>
          </div>
          
          
        </div>  

        <div className="saver">
          {
            showComplete? <>
            {
              showRemain?  
              <Remain 
              remainTask={remainTask}
              

              /> 
              
              : 
              <Completed completedTasks={completedTask}
              setCompletedTasks2 ={setCompletedTasks2}
              
              />
            }
            </>: 
            <div className="alltask"> 
            {
             showTodo?
             todolist.map((task)=>{
              return <Task
              taskName ={task.taskName} 
              id={task.id} 
              deleteTask={deleteTask}
              completed = {task.completed}
              completeTask={completeTask }
              />
              
            }):null
            } 
          </div>
          }

         <Saver 
         completedTasks={completedTask} 
         taskCount={taskCount} 
         setshowComplete={setshowComplete}
         remainTask={remainTask}
         setShowRemain={setShowRemain}
         />
          </div>

          
    </div>
    </ThemeContext.Provider>
  )
        }
export default myApp 

