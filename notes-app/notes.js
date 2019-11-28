const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();
    const hasDup = notes.some(obj => obj["title"] === title);
    debugger
    if (!hasDup) {
        notes.push({title, body});
        saveNotes(notes);
        console.log(chalk.green("New note added!"));
    } else {
        console.log(chalk.red.bold("Note title taken!"));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const match = notes.find(n => n.title === title);
    if (match) {
        console.log(chalk.green.bold(match.title));
        console.log(match.body);
    } else {
        console.log("No note found");
    }
}

const listNote = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(note.title));
}

const removeNote = title => {
    const notes = loadNotes();
    const index = notes.findIndex(n => n.title === title);
    if (index > -1) {
        notes.splice(index, 1);
        saveNotes(notes);
        console.log(chalk.green("Note removed!"));
    } else {
        console.log(chalk.red.bold("No note found!"));
    }
}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
    try {
        return JSON.parse(fs.readFileSync("notes.json").toString());
    } catch(e) {
        return [];
    }
}


module.exports = {addNote, readNote, listNote, removeNote};