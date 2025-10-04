import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import chalk from 'chalk';
import getNotes from './notes.js';

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
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

// create remove command
// y.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         console.log('Removing note: ' + argv.title);
//     }
// });

// Parse arguments
y.parse();
