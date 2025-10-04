const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');
const chalk = require('chalk');
const notes = require('./notes.js');

// Create yargs parser instance
const y = yargs(hideBin(process.argv));

y.version('1.1.0');

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

y.parse();
