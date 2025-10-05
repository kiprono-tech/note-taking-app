const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.filter((note) => note.title === title);

    if (!duplicateNote.length) {
        notes.push({ title, body });
        console.log(chalk.green.inverse('Note added successfully.'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
    saveNotes(notes);
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if (notes.length > notesToKeep.length) {
        console.log(chalk.red.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }

    saveNotes(notesToKeep);
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes,
    addNote,
    removeNote
};
