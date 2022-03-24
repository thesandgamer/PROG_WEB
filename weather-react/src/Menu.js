import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component{

    constructor(props)
    {
        super(props);
        this.createMenuItem = this.createMenuItem.bind(this);
    }

    //Fonction qui va créer un nouvel item de menu avec une ville et une fonction donnée
    createMenuItem(city,func) 
    {
        return <span key={city} > <MenuItem label={city} key={city}  function={func}/>  </span>
    }


    render()
    {
        //Récupère tous les éléments cities de props, et pour chaque on créer un menu item avec comme paramètre le nom de la ville et la fonction change city(stoqué dans props)
        const menu = this.props.cities.map(city => this.createMenuItem(city,this.props.changeCity));

        return(
            <div>
            <br></br>   
                 {menu}
            <br></br>
           </div>

        );
    }
}

export default Menu;    //Il faut export pour pouvoir l'utiliser