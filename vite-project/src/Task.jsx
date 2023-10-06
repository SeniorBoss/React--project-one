import {AiFillDelete} from "react-icons/ai"
const Task = (props) => {
    return (
      <div className="display" style={{ backgroundColor: props.completed ? "green" : "rgb(37, 33, 33)" }}>
          {props.completed ? (
          <input type="checkbox" onClick={() => props.completeTask(props.id)} className="checkbox"/>
        ) : (
          <input type="checkbox" onClick={() => props.completeTask(props.id)} className="checkbox"/>
        )}
        <h5 style={{textDecoration : props.completed ? "line-through" : "none"}}>{props.taskName}</h5>
          <AiFillDelete onClick={() => props.deleteTask(props.id)} className="button"/>
        
      
      </div>
    );
  };
  
  export default Task;
  
