import { ReactElement } from "react"

interface prop {
    type: string,
    html?: string,
    value?: string
}

export function NotificationItem({ type, html, value }: prop): ReactElement {
    return (
        html? <li data-priority={type} dangerouslySetInnerHTML={{ __html: html}} ></li> : <li data-priority={type}  >{value}</li>
        
    )
}