const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Notas'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!!')
    }else{
        console.log('Note title taken')
    }
}

const saveNotes = (notes) => {
    try{
        const dataJSON = JSON.stringify(notes)
        fs.writeFileSync('notes.json', dataJSON)
    } catch(e){
        return null
    }
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        //console.log(e)
        return []
    }
}

const removeNote = (title) => {
    try{
        const notes = loadNotes()
        const notesToKepp = notes.filter((note) => note.title !== title )
        if(notesToKepp.length === notes.length){
            console.log(chalk.red.inverse('No note found!'))
        }else{
            saveNotes(notesToKepp)
            console.log(chalk.green.inverse('Note remove!'))
        }
    } catch(e){
        console.log(chalk.red.inverse('Note not remove!'))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
