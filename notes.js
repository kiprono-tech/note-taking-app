const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return 'Your notes...';
};

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter(function (note) {
        return note.title === title;
    });
    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log('Note added successfully.');
    } else {
        console.log('Note title taken!');
    }
    // saveNotes(notes);
}

const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }

    saveNotes(notesToKeep);
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
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
