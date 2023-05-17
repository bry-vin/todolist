import { useDispatch } from "react-redux";
import {deleteTodoItem , changeEditStatus, editTodoItem} from "../store/index";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";

function ListItem({todo}){

    const dispatch = useDispatch();

    const [termToEdit, setTermToEdit] = useState(todo.name)

    const handleDelete = (event)=>{
        dispatch(deleteTodoItem(todo.id));
    }
    
    const handleTermToEditChange = (event) =>{
        setTermToEdit(event.target.value);
    }

    const handleChangeEditStatus = () =>{
        dispatch(changeEditStatus(todo.id));
    }

    const handleEditSubmit = (event)=>{
        event.preventDefault();
        dispatch(editTodoItem({
            id : todo.id,
            name : termToEdit
        }));
    }

    let content = <></>

    todo.edit === false
    ? content = <div className=" pl-2 w-1/5 h-10 mb-4 text-truncate overflow-hidden">{todo.name}</div>
    : content = <form onSubmit={handleEditSubmit}>
        <input className="h-10 shadow rounded w-96 border mb-4" onChange={handleTermToEditChange} value={termToEdit} />
        <button className=" text-2xl ml-4 h-10" ><FcCheckmark /></button>
    </form> 

    return(
        <div className="flex"> 
                {content}
                <button className=" text-2xl ml-4 h-10" onClick={handleChangeEditStatus}><BiEdit /></button>                 
                <button className=" text-2xl ml-4 h-10" onClick={handleDelete}><RiDeleteBinLine /></button>           
        </div>  
    )   

}

export default ListItem;