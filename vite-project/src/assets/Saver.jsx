import { useState } from "react"

const Saver = ({ taskCount, completedTasks, setshowComplete, remainTask, setShowRemain }) =>{
    console.log('My Completed',completedTasks)
    const taskLength = completedTasks.length
    console.log(taskLength)
    const [com, setCom] = useState(false)
    const [completedLength, setCompletedLength] =useState(false)

    const handleShowComplete = () =>{
        setshowComplete(true)
        setCompletedLength(true)
    }

    const handleSHowRemain = () =>{
        setShowRemain(true)
    }
    
    return(
        
        <div className="checkpart">
        <h5 onClick={handleSHowRemain}>
            {
               completedLength? remainTask.length : taskCount
            }
            { taskCount === 1 ? "task" : "tasks"} left</h5>
        <h5 onClick={handleShowComplete}>{taskLength} Task Completed</h5>
        
      </div>
    )
}

export default Saver