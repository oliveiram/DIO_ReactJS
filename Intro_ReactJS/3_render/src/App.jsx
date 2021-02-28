import React from "react";

const buttonA = <button>Histórico dos clientes</button>;
const buttonB = <button>Cadastrar cliente</button>;

const hasCustomer = true;

const App = () => {
    const showHistory = () => (
        <div>
            Clique no botão abaixo para exibir a lista de clientes
            <br />
            {buttonA}
        </div>
    )

    const addCustomer = () => (
        <div>
            Clique abaixo para cadastrar clientes
            <br />
            {buttonB}
        </div>
    )

    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo!</p>

            {hasCustomer ? showHistory() : addCustomer()}
        </div >
    );
};

export default App;