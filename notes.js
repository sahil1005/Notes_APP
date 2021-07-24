const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        
         saveNotes(notes)
         console.log(chalk.green.inverse('new note added!'))


    }else{
        console.log(chalk.red.inverse('note title taken!'))
    } 

}

const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title

    })

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('note removed!'))

    }else{
        console.log(chalk.red.inverse('no note found!'))
    }

    saveNotes(notesToKeep)
}



const listNotes = () => {
    const notes = loadNotes() 
    console.log(chalk.inverse('your Notes!'))
    notes.forEach((note) => {
        console.log(note.title)
        
    })



}

const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)

    }else{
        console.log(chalk.red.inverse('Note not Found!'))
    }


}


const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = function() {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)

    }catch (e) {
        return[]
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes

}
