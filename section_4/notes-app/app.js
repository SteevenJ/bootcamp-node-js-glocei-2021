const yargs = require('yargs')
const notes = require('./notes.js')


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note boby',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Adding a new note. \nTitle: ' +  argv.title + '\nBody: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        console.log('Removing a note. \nTitle: ' +  argv.title)
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log('Listing all notes')
    }
})

// Create list command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading a note')
    }
})

// Update yargs to show
yargs.parse()


//console.log(yargs.argv)