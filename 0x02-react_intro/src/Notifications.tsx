import './Notifications.css'
import close from './assets/close.png'
import { getLatestNotification } from './utils/utils';


export function Notification() {
    const Close = () => console.log("Close button has been clicked");
    
    return (
        <>
            <div className="Notifications">
                <p>Here is the list of notifications</p>
                <ul>
                    <li data-priority="default" >New course available</li>
                    <li data-priority="urgent" >New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}} ></li>
                </ul>
                <button style={{position: "absolute", top: "10px", right: "10px", border: "None", background: "None"}} aria-label='Close' onClick={Close}>
                    <img src={close} alt="" style={{maxWidth: "25px", height: "auto", cursor: "pointer"}}/>
                </button>
            </div>
        
        </>
    )
}