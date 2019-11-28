const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//customerize yargs version
yargs.version("1.1.0");
// create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, //false is default
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "sring"
        }
    },
    handler: argv => notes.addNote(argv.title, argv.body)
})

//create remove command
yargs.command({
    command: "remove",
    describe: "remove a  note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true, //false is default
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})
// console.log("Y:", yargs.argv);

//create list command
yargs.command({
    command: "list",
    describe: "List your note",
    handler(argv) {
        notes.listNote(argv.title);
    }
})

//create read command
yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: "title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
})

// console.log("Y:", yargs.argv);
yargs.parse();





// console.log("P:", process.argv);
/**
 * P: [
  '/usr/local/Cellar/node/8.2.1/bin/node',
  '/Users/suelucas/WebDev/Node/node12/notes-app/app.js',
  'add',
  '--title=Things to buy'
]
 */
// console.log("Y:", yargs.argv);
//Y: { _: [ 'add' ], title: 'Things to buy', '$0': 'app.js' }

// console.log("Y:", yargs.argv); //adding a new note Y: { _: [ 'add' ], '$0': 'app.js' }
//node app.js read --title='shopping list'

// console.log(chalk.green.inverse.bold("Sucess!"));
// const command = process.argv[2];
// if (command === "add") {
//     console.log("Adding note"); //commandline:>>  node app.js add 
// } else {
//     console.log("Removing note");
// }

// const validator = require("validator");


// const note = require("./notes");

// console.log(note());
// const fs = require("fs");
// fs.writeFileSync("notes.txt", "This file was created by Node.js");
// fs.appendFileSync("notes.txt", " \nadding more lines")
