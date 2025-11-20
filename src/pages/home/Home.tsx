import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonPage } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <div>
        <IonImg src='https://cdn.pixabay.com/photo/2015/12/28/02/58/home-1110867_1280.png' alt='' style={{width:'200px', height:'150px' , margin : '5rem auto 0 auto' }} />
      </div>

      <IonCard style={{margin:'0 auto 5rem auto', width:'80%'}}>
        <IonImg src="https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg" alt="" style={{width : '60%',margin : 'auto',padding: '20px' }}/>
        <IonCardHeader>
          <IonCardTitle>Bienvenue sur votre application de gestion de tache</IonCardTitle>
          <IonCardSubtitle>Gérer vos taches simplement</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>

    </IonPage>
  );
};

export default Home;
