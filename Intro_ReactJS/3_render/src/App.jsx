import React from "react";
/*
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
*/

const App = () => {
   /* const renderCustomer = (customer, index) => {
        return (
            <li key={`customer.${customer.id}`}>{customer.name}</li>
        )
    }*/
    const showEvent = (e) =>{
        console.log('Evento clicado');
        console.log(e);
        alert(name);
    }
    const Button = <button onClick={showEvent}>Mostrar evento</button>

    const name = 'Márcio';

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value);
    }
    return (
        <div>
            <p>Digital Innovation One</p>
            <p>Bem vindo!</p>
            <input onChange = {handleChange} />
            {Button}
            {/* <div>
                <ul>
                    {listCustomer.map(renderCustomer)}
                </ul>
            </div>  */}
        </div >
    );
};

export default App;