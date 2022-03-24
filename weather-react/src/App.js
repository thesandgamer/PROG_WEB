import React from 'react';
import axios from 'axios';

import './App.css';

import Body from './Body.js'
import Header from './Header.js'
import Menu from './Menu.js'
import Footer from './Footer.js'
import Field from './Field';



/*
import { response } from 'express';
import res from 'express/lib/response';
*/

class App extends React.Component
{

  //Fonction pour setup les variable
  constructor() 
  {
    super();
    this.state= //Récupére le variables(getter/setter)
    {
      summary:'',
      temperature:0.0,
      precip: 0.0,
      cities:['Montpellier','Paris','Wellington']

    }
    this.changeCity = this.changeCity.bind(this); //Bind la fonction
    this.addCity = this.addCity.bind(this); //Bind la fonction
  }


  componentDidMount()
  {
    //console.log("Just loaded");
    axios.get('/weather').then(response =>  //.then: quand la réponse arrive fait ce qu'il y a 
      {
        this.setState({ //On va changer le state avec les info contenu dans la réponse
          summary: response.data.summary,
          temperature: response.data.temperature,
          precip:response.data.precip,
        })

      });
  }

  //Fonction pour changer de city à récupérer la météo
  changeCity(city)
  {
    console.log(city);
    axios.get('/weather?city='+city).then(response=>
      {
        this.setState(  //Change l'état actuel avec les données donnée par la réponse 
          {
            summary: response.data.summary,
            temperature: response.data.temperature,
            precip: response.data.precip,
          }
          
        )
      });
  }

  addCity(citie)
  {
    const oldCities = this.state.cities;
    if (citie !='')
    {
      console.log("City added: " + citie);
      oldCities.push(citie);
      console.log(oldCities);
      
      this.setState(
        {
          cities: [oldCities],
        }
      )

    }
  }


  render()
  {
    /*
    var weather = '';

    if (this.summary != '')
    {
      //On va set la variable weather par du code HTML qui va dire le temps et la température
        weather = <div> 

        <p>Le temps: {this.state.summary}</p>
        <p>Le temperature: {this.state.temperature}</p>

        </div>
    }*/

    return (            //Menu changeCity = {this.changeCity} : on fait passer la fonction change city dans le props de menu du même nom
      <div className="App">
        <Header/>
        <Field addCityFunction = {this.addCity} />

        <Menu cities ={this.state.cities}    changeCity ={this.changeCity}/>
        <Body  summary = {this.state.summary} temperature = {this.state.temperature} precip ={this.state.precip} />
        <Footer/>
      </div>
    );
  }

}


export default App;
