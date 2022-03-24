const yargs = require('yargs');
 


 const command = process.argv[2];

 /*
 if (command == 'add')
 {
     console.log('Adding note');
 }
 else if (command = 'remove')
 {
     console.log('Removing note');
 }

 function addNote()
 {
     console.log("Added a note");
 }
 */

 yargs.command('add','Add a note',
                    {
                        title : {describe: "Note title",demandOption : true, type : 'string'},
                        body : {describe: "Note body",demandOption : true, type : 'string'},
                    }, 
                    (argv)=> {
                        console.log("Title: ", argv.title);
                        console.log("Body: ", argv.body);
                    } 
               );

 yargs.command('remove','Remove a note',{},  ()=> {console.log("Remove a note")}  );
 yargs.command('read','Read a note',{},  ()=> {console.log("Read a note")}  );
 yargs.command('list','List notes',{},  ()=> {console.log("List notes")}  );

 yargs.parse();

 
