import React from 'react';
import "./LoginAgain.css"

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Login:false,
    };

    this.onClick = this.onClick.bind(this);

    this.checkInput = this.checkInput.bind(this);
    this.linkInput1= React.createRef();
    this.linkInput2 = React.createRef();
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

  checkInput(){
    if (this.linkInput1.value != this.linkInput2.value) {
      this.linkInput2.setCustomValidity("Password Must be Matching.");
      } else {
      // input is valid -- reset the error message
        this.linkInput2.setCustomValidity("");
      }
  }

render() {
  return(
      <div>
        <h1 className ="TituloLogin">Inicia sesión para compartir tus paseos</h1>
        {this.state.Login ?
          <div>
            <form action="/users" method = "POST">
              <div className="form-group">
                <label ref="name">Ingrese su Usuario:</label>
                <input className="form-control" name="user" id="name" placeholder=" Usuario"/>
              </div>
              <div className="form-group">
                <label ref="password">Ingrese su contraseña:</label>
                <input className="form-control" ref ={linkInput1 => this.linkInput1 = linkInput1} type ="password" name="password" id="passwordOriginal"  placeholder=" Contraseña"/>
              </div>
              <div className="form-group">
                <label ref="password">Repita su contraseña:</label>
                <input className="form-control" ref ={linkInput2 => this.linkInput2 = linkInput2} onInput = {this.checkInput} type ="password" name="password" id="password" placeholder=" Contraseña"/>
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
                <p className="passwordFail">La contraseña ingresada es incorrecta. Intente nuevamente.</p>
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