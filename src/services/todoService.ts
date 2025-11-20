// Gestion de la liste
// Ajout, suppression, modification, récupération
// utilisation du service dans les composants

import { Todo } from "../models/Todo.model";

 let data : Todo[] = [
    {
        id: 1,
        title : "Premier todo",
        description : "Ceci est le premier todo",
        completed : false
    },
        {
        id: 2,
        title : "Premier todo",
        description : "Ceci est le premier todo",
        completed : false
    }
 ];

const todoService = {

    getTodos : () : Todo[] => {
        return data;
    },
    removeTodo : (id : number) : void => {
        data = data.filter((todo) => todo.id !== id)
    },
    getTodoById : (id : number) : Todo | undefined => {
        const todo = data.find((todo)=> todo.id === id);
        return todo;
    },
    updateTodo : (updatedTodo : Todo) : void => {
        data = data.map((todo) => {
            if(todo.id === updatedTodo.id){

                return {...updatedTodo}
            }
            return todo;
        })
    },
    completedTodo : (id : number) : void => {
        data = data.map((todo) => {
            if(todo.id === id){
                return {...todo, completed : !todo.completed}
            }
            return todo;
        })
    }

}

export default todoService;