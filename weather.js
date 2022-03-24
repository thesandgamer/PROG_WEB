const request = require('request');

//const url = 'https://api.darksky.net/forecast/ad95e11dbf8fe6961a05425dea338c24/43.3639,3.5238';
const url = 'https://api.darksky.net/forecast/ad95e11dbf8fe6961a05425dea338c24/43.3639,3.5238?units=si&lang=fr';
const mapboxToken = 'pk.eyJ1IjoiZ2FldHoiLCJhIjoiY2s1cDdlcG8xMHQyYjNmbnN0YjJhcmNqeiJ9.kLu5p2ln7vq0X7CyQARZfQ';
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Montpellier.json?&language=fr&access_token=' + mapboxToken;

/*
request({url:url},
    (error, response)=>
            {   
                if(error)
                {
                    console.log('Unable to connect to weather API');
                }
                else
                {
                    const data = JSON.parse(response.body);
                    //console.log(data.currently);
                    console.log('It is currently ' + data.currently.temperature + ' out, and there is ' + data.currently.precipProbability + ' of risk of rain.')
                }

            }
        );
        





request({url:geocodeUrl,json :true}, //On utilise le token de geocoden et le json
    (error, response)=>
            {   
                if(error)
                {
                    console.log('Unable to connect to weather API');
                }
                else if (response.body.error)
                {
                    console.log('Unable to find location')
                }
                else
                {
                   // console.log(response.body);
                    console.log("Longitude: " + response.body.features[0].center[0] + ' | Latitude: ' + response.body.features[0].center[1] );
                }
                
            }
        );
        

        
function functionName(data,callback)
 {
    url = createUrlFromData(data);
    request( {url, json:true},(error, response) =>
    {
        if (error)
        {
            callback("Server not reached error");
        }
        else if (response.error)
        {
            callback("Server error");
        }
        else
        {
            newData = buildNewDataFromResponse(response);
            callback(error,newData);
        }
        

    })   
 }*/

//Callback: va stoquer une valeur qui va être une data ou une erreur

 //Fonction pour récupérer les coordonées de la ville qu'on rentre en entrée 
 function coordinates(city, callback) //Va prendre une ville et un callback qu'on va modifier
 {
     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+city+'.json?&language=fr&access_token=' + mapboxToken; //URL à se connecter en fonction de la ville

     request({url:url,json:true}, (error, response) => //Envoie une requête à l'url, en disant qu'on va récupérer du json, et on va récupérer la possible erreur et la réponse  
     {
        if (error) //Si il nous renvoie une erreur
        {
            callback("Unable to connect to API");//le callback va être ce message d'erreur
        }
        else if (response.body.features.length == 0) //Si la réponse est null(genre il renvoie rien)
        {
            callback("Unable to find location");
        }
        else //Si c'est bon
        {
            const latitude = response.body.features[0].center[1]; //On récupère la latitude dans l'api
            const longitude = response.body.features[0].center[0];//On récupère la longitude dans l'api
            const data = {latitude, longitude}; //On stoque le tout dans un data
            callback(error,data); //Et on renvoie le tout dans un callback: la data et l'erreur dans callback
            console.log("A " + city +", données météo: ");    
        }
     });
 }

 function displayWeather(data, callback)//Data: paramètre 
 {                                                                                  //Remplacer par data longitude et latitude
     const url = 'https://api.darksky.net/forecast/ad95e11dbf8fe6961a05425dea338c24/'+ data.latitude +',' + data.longitude +'?units=si&lang=fr'; //URL à se connecter

     request({url:url,json:true}, (error, response) => //Envoie une requête
     {
        if (error) //Si il nous renvoie une erreur
        {
            callback("Unable to connect to API");
        }
        else if (response.body.error) //Si la réponse est null(genre il renvoie rien)
        {
            callback("Unable to find location");
        }
        else //Si c'est bon
        {
            const{temperature,precipProbability} = response.body.currently;//on créer les data temperature et precip propbability
            callback(undefined,response.body.daily.data[0].summary +' Il fait en ce moment  ' + temperature + ' degrès et le risque de pluie est de ' + precipProbability + ' %.' ); //Et on renvoie le tout dans un callback
        }
     });
 }

 function weather(city,callback)
 {
     coordinates(city,(error, data)=>{
            if (error) //Si on à une erreur dans le calcul de coordinates
            {
                console.log(error);
                return;
            }
            displayWeather(data,callback);//Display le weather avec comme ville le data calculé dans coordinates
            
        }
        
        )
 }

 //On appel la météo avec le paramètre la ville
 weather('Montpellier',(error,data) =>
    {
        console.log(data);//On écrit ce que retourne la fonction weather
    }
 );