import { useEffect, useState } from "react";
import { Todo } from "../../models/Todo.model";
import todoService from "../../services/todoService";
import { IonButton, IonCard, IonItem, IonLabel, IonList, IonPage, useIonRouter, useIonViewWillEnter } from "@ionic/react";



const TodoList : React.FC = () => {
    const router = useIonRouter();
    const [todos, setTodos] = useState<Todo[]>([]);

    useIonViewWillEnter(() => {
        const todoList = todoService.getTodos();
        setTodos(todoList);
    })

    useEffect(() => {
        const todoList = todoService.getTodos();
        setTodos(todoList);
    },[])

    const deleteTodoItem = (id : number) => {
        todoService.removeTodo(id);
        const todoList = todoService.getTodos();
        setTodos(todoList);
    }

    return(
        <>
        <IonPage>
            <div className="mt-9 text-center">
                <h1>Liste des Todos</h1>
                <IonButton color="success" style={{marginBottom : "1rem"}} onClick={() => router.push('/')}>Ajouter Todo</IonButton>

                <IonList style={{width:'80%',margin:'auto'}}>

                    {todos.map( (todo) => (
                        <IonItem>
                            <IonCard style={{margin : '0 auto 1rem auto'}}>
                                <div style={{padding: '20px',backgroundColor : 'white', marginTop : '1rem'}}>
                                <IonLabel style={{color : 'black'}}>{todo.title} : {todo.id}</IonLabel>
                                <IonLabel style={{color : 'black'}}>{todo.description}</IonLabel>
                                </div>
                                <IonButton color='secondary' onClick={()=> router.push('/update-todo/'+ todo.id)}>Modifier</IonButton>
                                <IonButton color='danger' onClick={()=> deleteTodoItem(todo.id) }>Supprimer</IonButton>
                            </IonCard>
                        </IonItem>
                    ))}

                </IonList>

            </div>
            
        </IonPage>

        </>
    )
}

export default TodoList;