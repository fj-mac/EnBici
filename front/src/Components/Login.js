import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Login:false,
    };

    this.onClick = this.onClick.bind(this);
}


onClick(){
  if(this.state.Login==true)
  {
    this.setState({Login:false})
  }
  else
  {
    this.setState({Login:true})
  }
}

render() {
  return(
      <div>
        <h1>Inicia sesión para compartir tus paseos</h1>
        {this.state.Login ?
          <div>
            <form action="/users" method = "POST">
              <div className="form-group">
                <label ref="name">Ingrese su Usuario:</label>
                <input className="form-control" name="user" id="name" placeholder=" Usuario"/>
              </div>
              <div className="form-group">
                <label ref="password">Ingrese su contraseña:</label>
                <input className="form-control"name="password" id="password"  placeholder=" Contraseña"/>
              </div>
              <div className="form-group">
                <label ref="password">Repita su contraseña:</label>
                <input className="form-control"name="password" id="password"  placeholder=" Contraseña"/>
              </div>
              <input className = "btn"type="submit" value="Submit"></input>
            </form>
          </div>:
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
            </form>
          </div>}
          <div class="text-center">
          {this.state.Login ?
            <div><button onClick={this.onClick}>Ir a Login</button></div>:
            <div><button onClick={this.onClick}>Ir a registro</button></div>}
          </div>
      </div>
    )
}
}
export default Login;