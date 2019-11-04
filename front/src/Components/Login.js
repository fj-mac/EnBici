import React from 'react';

class Login extends React.Component {
   constructor(props) {
    super(props);
    this.state={
      "user":null,
      "password":null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangea = (event) => this.setState({ user: event.target.value });

   onChange = (event) => this.setState({ password: event.target.value });

  handleSubmit(event) {
    event.preventDefault();
    let data=JSON.stringify({
      "user":"a",
      "password":"a"
    })
    fetch('/login', {
      method: 'POST',
      body: data,
    });
  }

render() {
  return(
      <div>
        <h1>Inicia sesión para compartir tus paseos</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label ref="name">Ingrese su Usuario:</label>
                <input className="form-control" value={this.state.user} id="name" onChange={this.onChangea} placeholder=" Usuario"/>
              </div>
              <div className="form-group">
                <label ref="password">Ingrese su contraseña:</label>
                <input className="form-control" value={this.state.password} id="password" onChange={this.onChange} placeholder=" Contraseña"/>
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