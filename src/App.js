import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>Minha Agenda</h1>
      </header>
      <form className="inputs">
        <label for="txt">Seu nome:</label><br></br>
        <input className="inpt" type={"text"} id="txt" placeholder="Digite o seu nome aqui..."></input><br></br><br></br>

        <label for="idade">Sua idade:</label><br></br>
        <input className="inpt" type={"number"} id="idade" placeholder="Informe sua idade..."></input><br></br><br></br>

        <label for="email">Email:</label><br></br>
        <input className="inpt" type={"email"} id="email" placeholder="Informe seu email..."></input><br></br><br></br>

        <label for="fone">Telefone de contato:</label><br></br>
        <input className="inpt" type={"tel"} id="cell" placeholder="(00) 00000-0000"></input><br></br><br></br>

        <label for="txttarea">Endereço:</label><br></br>
        <textarea id="txtarea" placeholder="Informe seu endreço, rua, número, complementos etc..." cols="40" rows="10"></textarea><br></br><br></br>

        ⇨<input className="button" type={"submit"} value="Guardar Dados" onClick="salvarDados()"></input>⇦
      </form>
     
    </div>
  );
}

export default App;
