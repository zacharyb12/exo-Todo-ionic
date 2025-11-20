import { useState } from "react";
import { Todo } from "../../models/Todo.model";
import todoService from "../../services/todoService";
import { useIonViewWillEnter } from "@ionic/react";



const TodoList : React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useIonViewWillEnter(() => {
        const todoList = todoService.getAllTodos();
        setTodos(todoList);
    })

    return(
        <>
        
        </>
    )
}

export default TodoList;