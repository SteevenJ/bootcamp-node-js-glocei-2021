const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => 'Notas'

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
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
        console.log('Error')
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

const readNote = (title) => {
    try{
        const notes = loadNotes()
        const noteF = notes.find((note) => note.title == title)
        if(!noteF){
            console.log(chalk.red('No not found!'))
        }else{
            console.log(chalk.green.inverse('Note found!'))
            console.log(chalk.blue.inverse(noteF.title))
            console.log(noteF.body)
        }
    } catch(e){
        console.log('Error')
    }
}


const listNotes = () => {

    console.log(chalk.blue.inverse("Your notes"))
    try{
        notes = loadNotes()
        notes.forEach(note => {
            console.log(note.title)
        })
    } catch(e){
        //console.log(e)
        console.log('Nothing to show')
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
