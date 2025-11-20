import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <div style={{marginTop: '4rem'}}>

            <IonTitle size="large">Exercice Todo</IonTitle>
            <IonList>
              <IonContent><p>Implementation des pages : List ( avec utilisation du service : getAll & delete ) et home et de la navigation ( navbar ou dans les pages )</p></IonContent>
              <IonContent><p>Implementation des pages : add et update ( avec utilisation du service )</p></IonContent>
            </IonList>
            </div>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
