import '../styles/Body.css'


export function Body() {
    return (
        <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' style={{display: "block"}}/>
        <label htmlFor="password">Password</label>
        <input type="text" id='password' style={{display: "block"}} />
        <button>OK</button>
      </div>
    )
}