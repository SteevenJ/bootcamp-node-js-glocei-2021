const yargs = require('yargs')

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
    handler: function(argv){
        console.log('Adding a new note. \nTitle: ' +  argv.title + '\nBody: ' + argv.body)
    }
})


// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing a note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing all notes')
    }
})

// Create list command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note')
    }
})

// Update yargs to show
yargs.parse()


//console.log(yargs.argv)