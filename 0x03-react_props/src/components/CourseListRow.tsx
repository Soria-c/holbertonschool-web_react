import { ReactElement } from "react"

interface prop {
    isHeader: boolean,
    textFirstCell: string
    textSecondCell?: string | null
}


export function CourseListRow({isHeader = false, textFirstCell, textSecondCell = null}: prop): ReactElement {
    if (isHeader) {
        if (textSecondCell) {
            return (
                <tr>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </tr>
            )
        }
        return <tr> <th colSpan={2} >{textFirstCell}</th> </tr>
    }
    return (
        <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
        </tr>
    )
}