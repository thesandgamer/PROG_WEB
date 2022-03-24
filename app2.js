const yargs = require('yargs');
const validator = require('validator');
//const chalk = require('chalk');
const fs = require('fs');
const notes = require('./notes');

yargs.command('add','Add a note',   //Créer la commande
    {
        title: {describe: 'Note title', demandOption: true, type: 'string'},//Argument 1: title
        body: {describe: 'Note body', demandOption: true, type: 'string'},//Argument 2: body
    },
    function(argv) //Quand on appel la fonction avec argv qui va être égal à ce qu'on va rentrer
    {
        notes.addNote(argv.title, argv.body);//On appel la fonction addNote de notes
    }
);

yargs.command('remove','Remove a note',
    {
        title: {describe: 'Note title', demandOption: true, type: 'string'},//Argument 1: title
    }, 
    (argv)=> 
    {
        notes.removeNote(argv.title);
    }  

);

yargs.command('read','Read a note',
    {
        title: {describe: 'Note title', demandOption: true, type: 'string'},//Argument 1: title
    }, 
    (argv)=> 
    {
        notes.readNote(argv.title);
    }  

);

yargs.command('list','List notes',
    {   }, //pas d'arguments
    ()=> 
    {
        notes.listNotes();
    }  

);

yargs.parse();