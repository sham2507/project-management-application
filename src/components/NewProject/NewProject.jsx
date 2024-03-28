import {useRef,useState} from "react";
import Input from "../Templates/Input.jsx";
import Model from "../ErrorMessage/Model.jsx";


function NewProject({onAdd,onCancel}){
    
    let title = useRef();
    let description = useRef();
    let dueDate = useRef();
    let dialog = useRef();

    function handleSave(){
        let enteredTitle = title.current.value;
        let enteredDescription = description.current.value;
        let enteredDueDate = dueDate.current.value;   
        
        if(enteredTitle.trim() === ''||enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
            dialog.current.open();  
            return;                 
        }
        
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    return(
        <>
        <Model ref={dialog} buttonCaption={"Close"}>
            <h2 className="text-xl font-bold text-stone-600 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">Please make sure you have entered all the values...</p>
        </Model>
        <div className="w-[35rem] mt-16 animate-bounceOnce">            
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick = {onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button onClick = {handleSave} className="px-6 py-2 bg-stone-800 text-stone-50 hover:bg-stone-950 rounded-md">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref = {title}>Title</Input>               
                <Input ref = {description} isTextArea={true}>Description</Input>               
                <Input type="date" ref = {dueDate}>Due Date</Input>               
            </div>
        </div>
        </>
    );    
}


export default NewProject;