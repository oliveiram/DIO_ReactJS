import React from "react";

const listCustomer = [
    {
        id: 1,
        name: 'João'
    },
    {
        id: 2,
        name: 'Aline'
    },
    {
        id: 3,
        name: 'Cleber'
    },
    {
        id: 4,
        name: 'Leandro'
    }
]

const App = () => {
    const renderCustomer = (customer, index) => {
        return (
            <li key={`customer.${customer.id}`}>{customer.name}</li>
        )
    }
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo!</p>
            <div>
                <ul>
                    {listCustomer.map(renderCustomer)}
                </ul>
            </div>
        </div >
    );
};

export default App;