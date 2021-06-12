import React, { Component } from "react";
import loginImg from "../../images/login.svg";

export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref="{this.props.containerRef}">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="login" />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Nome</label>
              <input type="text" name="username" placeholder="nome"></input>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="senha"
              ></input>
            </div>
          </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">Registrar</button>
        </div>
      </div>
    );
  }
}
