import React from 'react';

//Représenter un élément du menu
class MenuItem extends React.Component
{
    render()
    {
        const label = this.props.label; //On va récupérérer le label du props(qui ici va être la ville)
        const func = this.props.function; //On va récupérer la fonction du props
        return <a key={label} href = '#' onClick= {() => func(label)}> {label}</a> //Et on va display le tout
    }
}

export default MenuItem;