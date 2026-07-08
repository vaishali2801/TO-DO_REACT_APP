import React, { useEffect, useState } from 'react'

const AddToDo = ({handleAdd,editVal}) => {

    const [ input,setInput] =useState({
        task:"",
        description:""
    });

    useEffect(() => {
        if (editVal) {
            setInput(editVal);
        } else {
            setInput({
                task: "",
                description: ""
            });
        }
    }, [editVal]);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        handleAdd(input);

        setInput({task:"",description:""});
    }

    const handleChange = (field,e)=>{
        setInput((prev)=>{
            return{
                ...prev,
                [field]:e.target.value,
            }
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='enter task' value={input.task} onChange={(e)=>handleChange("task",e)}/>
                
                <input type="text" placeholder='enter description' value={input.description} onChange={(e)=>handleChange("description",e)} />
                
                {/* <button class="button-85" role="button" ></button> */}
            
                <button class="button-91" role="button" type='submit'><span class="text">{editVal ? "Update" : "Add"}</span></button>

            </form>
        </>
    )
}

export default AddToDo
