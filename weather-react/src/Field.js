import React from 'react';

import TextField from "@material-ui/core/TextField";
import  Button from '@material-ui/core/Button';


//Représenter un élément du menu
class Field extends React.Component
{

    constructor(props)
    {
        super(props);
        this.setName = this.setName.bind(this);
        this.state= //Récupére le variables(getter/setter)
        {
          name:'',
    
        }

    }

    setName(newName)
    {
        this.setState(
            {
                name:newName,
            }
        )
    }

    render()
    {
        //const addCityFunction = this.props.addCityFunction;
        return (
            <div>
             <Button key={this.state.name} href = '#' onClick= {() =>{this.props.addCityFunction(this.state.name); this.setName('')}}> Add city</Button>
             <TextField value={this.state.name} label="Enter city name" onChange={(e) => {this.setName(e.target.value);} }/>
            </div>
        
        );
       
    }
}

export default Field;

//<Button href="#" onClick = {this.props.addCityFunction(this.state.name)}> Add City </Button>


        /*
<div>
<span>
    <Button id = "AddCityToList"  onClick = {console.log("Button pressed")} name ="AddCityButton" > Add City </Button>
</span>

    <TextField value={this.state.name} label="Enter city name" onChange={(e) => {this.setName(e.target.value);} }/>
</div>*/