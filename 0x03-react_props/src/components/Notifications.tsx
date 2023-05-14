import '../styles/Notifications.css'
import close from '../assets/close.png'
import { getLatestNotification } from '../utils/utils';
import { ReactElement } from 'react';
import { NotificationItem } from './NotificationItem';


export function Notification({displayDrawer = false}): ReactElement {
    const Close = () => console.log("Close button has been clicked");
    
    return (
        <>
            <div>
                Your notifications
            </div>
            <div className="Notifications" style={displayDrawer? {display: "block"}: {display: "none"}}>
                <p>Here is the list of notifications</p>
                <ul>
                    <NotificationItem type='default' value='New course available'/>
                    <NotificationItem type='urgent' value='New resume available'/>
                    <NotificationItem type='urgent' html={getLatestNotification()}/>
                </ul>
                <button style={{position: "absolute", top: "10px", right: "10px", border: "None", background: "None"}} aria-label='Close' onClick={Close}>
                    <img src={close} alt="" style={{maxWidth: "25px", height: "auto", cursor: "pointer"}}/>
                </button>
            </div>
        
        </>
    )
}