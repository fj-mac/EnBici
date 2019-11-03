import React, { Component } from "react";



class form extends Component{
formatDate() {
    let d = new Date();
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  }

render(){
  return(
    <div>
      <form>
        <div className="form-group">
          <label >Ingrese una pequeña descripción:</label>
          <input className="form-control"   placeholder=" Ingrese descripción"/>
        </div>
        <div className="form-group">
          <label >Ingrese un punto de encuentro:</label>
          <input className="form-control"   placeholder=" Ingrese punto de encuentro"/>
        </div>
        <div className="form-group">
          <label >Ingrese la descripción de la ruta:</label>
          <input className="form-control"   placeholder=" Ingrese descripción de ruta"/>
        </div>
        <div className="form-group">
          <label >Seleccione la cantidad máxima de personas:</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div className="form-group">
            <label htmlFor="productName">Seleccione la fecha de inicio</label>
            <input
              className="form-control"
              type="date"
              min={this.formatDate()}
              ref="finishDate"
              required
            />
          </div>
      </form>
    </div>
    )
}
}
export default form;