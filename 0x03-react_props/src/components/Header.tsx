import holbertonLogo  from "../assets/holbertonlogo.jpg"
import "../styles/Headers.css"


export function Header() {
    return (
        <div className="App-header">
        <img src={holbertonLogo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </div>
    )
}