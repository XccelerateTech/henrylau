const fs = require('fs')

class NoteService {
    constructor(fileName) {
        this.fileName = fileName
        this.notes = [];
        this.previousNote = this.listNote();
    }

    listNote() {
        return new Promise((good, bad) => {
            fs.readFile(this.fileName, 'utf-8', (err, data) => {
                if (err) {
                    bad(err);
                } else {
                    this.notes = JSON.parse(data);
                    good(this.notes)
                }
            })
        })
    }

    addNote(input) {
        return new Promise((good, bad) => {
            this.previousNote.then(() => {
                this.notes.push(input)
                fs.writeFile(this.fileName, JSON.stringify(this.notes), err => {
                    if (err) {
                        bad(err);
                    } else {
                        good();
                    }
                });
            })
        });
    }

    deteleNote() {

    }
}

module.exports = NoteService;