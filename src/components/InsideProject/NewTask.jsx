import {useState,useRef} from "react";
import Model from "../ErrorMessage/Model.jsx";


export default function NewTask({onAddTask}){

    let dialog = useRef();
    let [enteredTasks , setEnteredTasks] = useState("");

    function handleChange(event){
        setEnteredTasks(event.target.value);
    }

    function handleClick(){
        if(enteredTasks.trim() ===""){
            dialog.current.open();
            return;
        }
        onAddTask(enteredTasks);
        setEnteredTasks("");        
    }
    return(
        <>
        <Model ref={dialog} buttonCaption={"Close"}>
            <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">Please make sure you have entered a task...</p>
        </Model>
        <div className="flex items-center gap-4">
            <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" onChange={handleChange} value={enteredTasks}/>
            <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add task</button>
        </div>        
        </>
        
    );
}