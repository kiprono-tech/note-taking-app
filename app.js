const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');
const notes = require('./notes.js');

// Create yargs parser instance
const y = yargs(hideBin(process.argv));

// customize yargs version
y.version('1.1.0');

// create add command
y.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create remove command
y.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// create list command
y.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        console.log('Listing out all notes');
    }
});

// create read command
y.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('Reading a note');
    }
});

y.parse();
