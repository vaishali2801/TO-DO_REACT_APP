import React from 'react'

const ListToDo = ({todo,handleEdit,handleDelete,handleToggleToDo}) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Status</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo.map((t,index)=>{
                            return(
                                <tr key={t.id}>
                                    <td>{index + 1}</td>
                                    <td><input type="checkbox" checked={t.completed} onChange={()=>handleToggleToDo(t.id)}/></td>
                                    <td>{t.task}</td>
                                    <td>{t.description}</td>
                                    <td><button onClick={()=>handleEdit(t.id)} className='btn1'>Edit</button></td>
                                    <td><button onClick={()=>handleDelete(t.id)} className='btn2'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ListToDo
