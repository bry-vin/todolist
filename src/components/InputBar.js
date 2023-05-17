import {useDispatch, useSelector} from "react-redux";
import {changeTermToAdd, addTodoItem} from "../store/index";


function InputBar(){

    
    const dispatch = useDispatch();

    const termToAdd = useSelector((state)=>{
        return state.todos.termToAdd
    });

    const handleChangeTermToAdd = (event) => {
        dispatch(changeTermToAdd(event.target.value));
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        dispatch(addTodoItem(termToAdd));
    }

    return(
        <div>
            <h1 className="font-sans font-semibold text-4xl">To do List</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="mx-auto mb-10 mt-4">
                        <input className="shadow rounded w-1/4 py-1 border text-2xl" onChange={handleChangeTermToAdd} value={termToAdd} />
                        <button className="text-2xl py-1 px-2 border-emerald-300 border-2 rounded text-green-300 hover:bg-emerald-300 hover:text-white ml-3">Add</button>
                </div>
            </form>  
        </div>
    )
}

export default InputBar;