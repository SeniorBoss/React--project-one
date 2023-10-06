import { AiFillDelete } from "react-icons/ai"


const Remain = ({remainTask}) =>{
    console.log("Baby", remainTask)

    return(
        <>

<div className="completedContainer2">

                {
                    remainTask?.map((item, index) => (
                        <div className="CompleteContainerHolder2" key={index}>
                        <input type="checkbox" />    
                        <h5>{item.taskName}</h5>
                        <AiFillDelete className="completeDelete2" onClick={() => item.deleteTask(item.id)}/>
                   </div>
                    ))
                }
              

              

             
            </div>
        </>
    )
}

export default Remain