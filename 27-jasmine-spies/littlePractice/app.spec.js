const notes = require('./app')
const fs = require('fs')
const testCase = './test.json'

describe('jasmine with Promise', () => {
    beforeEach(() => {
        if (fs.existsSync(testCase)) {
            fs.unlinkSync(testCase);
        }
        fs.writeFileSync(testCase, '[]')
    })

    // using done for async code under jasmine
    it('read notes', done => {
        let note = new notes(testCase);
        note.listNote().then(result => {
            expect(result).toEqual([]);
            done();
        }).catch(err => {
            done.fail(err)
        })
    });

    it('add a note using addNote()', done => {
        let note = new notes(testCase);
        note.addNote('test').then(() => {
            return note.listNote();
        }).then(result => {
            expect(result).toEqual(['test']);
            done();
        }).catch(err => {
            done.fail(err);
        })
    })

    it('look how data concatenate', done => {
        let note = new notes(testCase);
        note.addNote('test').then(() => {
            note.addNote('SUPER').then(() => {
                return note.listNote()
            }).then(result => {
                expect(result).toEqual(['test', 'SUPER']);
                done();
            }).catch(err => {
                done.fail(err)
            })
        })
    })

    it('look how file concatenate from two instances', done =>{
        let note1 = new notes(testCase);
        note1.addNote('This is one').then(()=>{
            let note2 = new notes(testCase);
            return note2.addNote('This is two').then(()=>{
                return note2.listNote();
            }).then(result =>{
                expect(result).toEqual(['This is one', 'This is two'])
                done();
            }).catch(err =>{
                done.fail(err)
            })
        }).catch(err =>{
            done.fail(err)
        })
    })
})