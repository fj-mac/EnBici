import React from 'react';

class Login extends React.Component {

render() {
  return(
      <div>
        <h1>Inicia sesión para compartir tus paseos</h1>
          <div>
            <form action="/loginUsuario" method = "POST">
              <div className="form-group">
                <label ref="name">Ingrese su Usuario:</label>
                <input className="form-control" name="user" id="name" placeholder=" Usuario"/>
              </div>
              <div className="form-group">
                <label ref="password">Ingrese su contraseña:</label>
                <input className="form-control"name="password" id="password"  placeholder=" Contraseña"/>
              </div>
              <input className = "btn"type="submit" value="Submit"></input>
              <button>Send data!</button>
            </form>
          </div>
      </div>
    )
}
}
export default Login;