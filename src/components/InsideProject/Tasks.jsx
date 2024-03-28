import NewTask from "./NewTask.jsx";

export default function Tasks({tasks,onAddTask,onDeleteTask,selectedProjectId}){
    return(
        <section className="mt-4"> 
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <NewTask  onAddTask = {onAddTask}/>
            {tasks.length === 0 && <p className="text-stone-800 my-4">This project does not have any task</p>}
            {tasks.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) =>{
                if(task.projectId === selectedProjectId){
                    return(
                        <li className="flex justify-between my-4" key={task.id}>
                        <span>{task.text}</span>
                        <button onClick={() => {
                            onDeleteTask(task.id)
                        }} className="text-stone-700 hover:text-red-500">Clear</button>
                        </li>
                        )
                    }                
            })}
            </ul> }            
        </section>
    );
}