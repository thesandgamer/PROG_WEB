const fs = require('fs');
const { __esModule } = require('validator/lib/isFloat');

function saveNotes(notes)
{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

function loadNotes()
{
    try//On essaye de faire le code, si ça echoue (car y'a un truc qui existe pas)
    {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e)//Fait autre chose à la place(exeption),cause exepetion(erreur) appelée e 
    {
        console.log("Error: " + e);
        return [];

    }
}


function AddNote(title, body)
{
    const notes = loadNotes(); //On prend le fichier de notes et on le stoque
    /*Pour éviter d'avoir plusiuers nodes avec le même nom*/
    const duplicatedNotes = notes.filter((note) => {return note.title === title}); //On va chercher si un note avec le même nom existe dans le fichier 

    if (duplicatedNotes.length == 0)
    {
        notes.push({title:title,body:body});//On rajoute une note qui prendra pour titre title et pour corps body
        saveNotes(notes);//On réécrit le fichier de notes avec la mise à jour
        console.log("New note added " + title);
    }
    else
    {
        console.log("A note with this title already exits");
    }

   
}

function RemoveNote(title)
{
    const notes = loadNotes(); //On prend le fichier de notes et on le stoque

    //"Copie de liste"  "Cherche note"" var note" " retourne les notes qui n'ont pas le titre de la note"
    const notesToKeep = notes.filter((note) => {return note.title !== title}); //On va chercher la note à remove et copier les éléments de la liste qui ne sont pas cette note

    if (notesToKeep.length < notes.length)
    {
        console.log('Note removed');
    }
    saveNotes(notesToKeep); //On réécrit le fichier JSON
   
}

function ListNotes()
{
    const notes = loadNotes(); //On prend le fichier des notes
    if (loadNotes.length < 0)
    {
        console.log("No notes");
        return;
    }
    console.log("NOTES:");
    notes.forEach( (note) =>           //Pour chaque note in notes
                    { 
                      console.log('Title : ' + note.title); //Print le titre de la note
                    }
                 );
   
}

function ReadNote(title)
{
    const notes = loadNotes(); //On prend le fichier de notes et on le stoque
    const note  = notes.find(
                                (note) =>  //Cherche la note note in notes
                                {
                                    return note.title === title;  //Retourne si on la trouve ou pas
                                }
                            );

    if (note)//Si la note existe
    {
        console.log("Title: "+ note.title);
        console.log("Body: " + notes.body);
    }
    else
    {
        console.log("This note does not exists");
    }
   
}


//Export du module, on lien un nom avec une fonction
module.exports = 
{
    addNote: AddNote,
    removeNote : RemoveNote,
    listNotes : ListNotes,
    readNote: ReadNote
}