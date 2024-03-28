import {forwardRef} from "react";


let Input = forwardRef(function Input({children,isTextArea,...props},ref){

    let classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return(
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{children}</label>
            {isTextArea ? <textarea ref={ref} className={classes} {...props}/> : <input ref={ref} className={classes}{...props}/>}
        </p>    
    );
});

export default Input;