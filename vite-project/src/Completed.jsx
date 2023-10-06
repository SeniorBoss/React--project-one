import {AiFillDelete} from "react-icons/ai"

const Completed = ({ completedTasks, setCompletedTasks2 }) => {


    const handleDelete = (taskId) => {

        setCompletedTasks2( completedTasks.filter( (task) => task.id !== taskId ));
      };
    return (
      <>
        <div className="completedContainer">
          {completedTasks?.map((item, index) => (
            <div className="CompleteContainerHolder" key={index}>
              <h5 className="h1tage">{item.taskName}</h5>
              {/* <AiFillDelete
                className="completeDelete"
                onClick={() => handleDelete(item.id)}
              /> */}
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default Completed;
  