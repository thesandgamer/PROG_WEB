const express = require('express');
const path = require('path');
const weatherLib = require('./weather');

const app = express();
const publicStaticDir = path.join(__dirname,'../public');
app.use(express.static(publicStaticDir));

//On va écouter un port spécifique  | Quand le serveur se lance

//Get request et reponse d'une requête http, premier argument vide
/*
app.get("", (req,res)=>
    {
        res.send("Hello express");
    }
);


app.get("", (req,res)=>
    {
        res.send("<h1>Weather</h1>");
    }
);


app.get("", (req,res)=>
    {
        res.send({
            name: "My name",
            age: 21
        });
    }
);
*/


app.get("", (req,res)=>
    {
        res.send("<h1>Main Page</h1>");
    }
);

app.get('/help', (req,res)=>
    {
        res.sendFile(publicStaticDir + '/help.html');
    }
);

/* OLD
app.get('/weather', (req,res)=>
    {
        const weather = weatherLib.weather("Montpellier",(error,data)=>       
            {
                console.log(data);
                res.status(200).send(data); //Renvoie un statu au clien, statu 200 = statu OK
            }
        );
    }
);
*/

function buildWeatherData(city)
{
    return{
        summary: city + ' est hors ligne',
        temperature : 0,
        precip: 0,
    }
}

app.get('/weather', (req,res)=>
    {
        weatherLib.weather(req.query.city,(error,data)=>       //On va réupérer la ville dans la reqûete
            {
                console.log(req.query.city);
                res.status(200).send(data); //Renvoie un statu au client avec les data, statu 200 = statu OK
            }
        );
    }
);


app.get('*',(req,res) =>    //Le * va s'appliquer si tous les autre ne peuvent pas
    {   
        res.status(404).send('This page does not exists');//Renvoie un statu au clien, statu 404 = statu pas bon
    }
)


app.listen(4000, () =>
    {
        console.log("Server has started on port 4000");
    }
);




