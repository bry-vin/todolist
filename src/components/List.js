import ListItem from "./ListItem";
import { useSelector } from "react-redux";


function List () {  

    const todos = useSelector((state)=>{
          return state.todos.data;
    })

    const renderedList = todos.map((todo)=>{
        return <ListItem key={todo.id} todo={todo} />
    })


    return( 
            <div>
                {renderedList}                 
            </div>
       
    
    )
}

export default List;