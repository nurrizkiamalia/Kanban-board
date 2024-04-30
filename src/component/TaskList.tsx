import { useState } from "react"

const Task: React.FC <{ task: string }> = ({ task }) => {
    const [done, setDone] = useState(false);

    return (
        <div onClick={() => setDone(!done)} className='flex gap-3 items-center justify-start cursor-pointer '>
        <img src={done === false ? "assets/Unchecked.png" : "assets/Checked.png"} />
        <span  className={`${done ? "line-through decoration-double" : ""} text-task text-darkGrey text-label `}>{task}</span>
        </div>
        
    )
}

const TaskList: React.FC<{ tasks: string[] }> = ({ tasks }) => {
    return (
        <div className="task-list flex flex-col gap-1 items-start">
            {tasks.map((task, index) => (
                <div key={index} className="task-detail">
                    <span className="task-desc"><Task task={task}/></span>
                </div>
            ))}
        </div>
    )
}

export default TaskList