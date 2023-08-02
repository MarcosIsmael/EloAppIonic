import {
  IonAccordion,
  IonAccordionGroup,
  IonButton,
  IonChip,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
} from '@ionic/react'
import {
  accessibility,
  accessibilityOutline,
  add,
  logoIonic,
  people,
  timeOutline,
} from 'ionicons/icons'
function Clase() {
  return (
    <IonAccordionGroup style={{ padding: '8px' }}>
      <IonAccordion value='first' style={{ borderRadius: '8px' }}>
        <IonItem slot='header'>
          <IonLabel
            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
          >
            <IonIcon icon={accessibility} style={{ fontSize: '20px' }}></IonIcon>
            <div style={{ alignItems: 'center', display: 'flex' }}>
              <IonIcon icon={timeOutline} style={{ fontSize: '20px' }}></IonIcon>
              <IonText>
                <strong style={{ fontSize: '16px' }}>12:45hs</strong>
              </IonText>
            </div>
            <IonChip style={{ height: '30px', backgroundColor: '#3880ff' }}>
              <IonIcon icon={people} color='dark' style={{ fontSize: '20px' }} />
              <IonText style={{ fontSize: '16px' }} color={'dark'}>
                <strong>3/10</strong>
              </IonText>
            </IonChip>

            <IonIcon icon={add} style={{ fontSize: '20px' }}></IonIcon>
          </IonLabel>
        </IonItem>
        <div className='ion-padding' slot='content'>
          First Content
        </div>
      </IonAccordion>
    </IonAccordionGroup>
  )
}
export default Clase
