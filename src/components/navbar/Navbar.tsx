import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonMenu, IonMenuButton, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";

const Navbar : React.FC = () => {
    const router = useIonRouter();

    return (
        <>
        <IonMenu side="end" contentId="main-content">

        <IonHeader>
            <IonToolbar color='dark'>
                <IonTitle>Todo App</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonAccordionGroup>
                    <IonItem button  color='dark'>
                        <IonLabel onClick={()=> router.push("/")}>Home</IonLabel>
                    </IonItem>
                <IonAccordion value="Todos">

                    <IonItem slot="header" color='dark'>
                        <IonLabel>Todos</IonLabel>
                    </IonItem>

                    <IonItem button slot="content" color='dark' onClick={() => router.push('todo-list')}>
                        <IonLabel>Todo list Page</IonLabel>
                    </IonItem>

                    <IonItem button slot="content" color='dark' onClick={()=> router.push('add-todo')}>
                        <IonLabel>Ajout Todo</IonLabel>
                    </IonItem>
                </IonAccordion>

            </IonAccordionGroup>
            
        </IonContent>

        </IonMenu>

        <IonHeader>
            <IonToolbar color='dark'>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>

                <IonButtons slot="end">
                    <IonButton onClick={()=> router.push('/')}> Accueil</IonButton>
                </IonButtons>

            </IonToolbar>
        </IonHeader>


        </>
    )
}

export default Navbar;