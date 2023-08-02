import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import ExploreContainer from '../components/ExploreContainer'
import './Tab1.css'
import Clase from '../components/clase/Clase'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color={'primary'}>hola2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color={'medium'}>
        <Clase />
      </IonContent>
    </IonPage>
  )
}

export default Tab1
