const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// add command
yargs.command({
    command: 'add',
    describe: 'Add a notes!',
    builder: {
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        },
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
       notes.addNote(argv.title, argv.body)
    }
})



yargs.command({
    command: 'remove',
    describe: 'removing a notes!',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },

    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})




yargs.command({
    command: 'list',
    describe: 'placeholder message for now',
    handler: function() {
        notes.listNotes()
    }
})




yargs.command({
    command: 'read',
    describe: 'placeholder message for now',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'

        }
    },

    handler: function(argv) {
       notes.readNotes(argv.title)
    }
})



yargs.parse()