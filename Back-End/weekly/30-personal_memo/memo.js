const fs = require('fs');

class Memo {
    constructor() {
        this.filePath = './json/memo.json';
        this.notes;
    }
    read(user) {
        return new Promise((good, bad)=>{
            return fs.readFile(this.filePath, 'utf-8', (err, data)=>{
                if(err){
                    bad(err);
                }else if(data){
                    this.notes = JSON.parse(data)
                }
                return good(this.notes[user])
            })
        })
    }

    write(user) {
        return new Promise((good, bad)=>{
            fs.writeFile(this.filePath, JSON.stringify(this.notes), err=>{
                if(err){bad(err)}
                good(this.notes[user])
            })
        })
    }
    
    list(user) {
        return this.read(user).then(data =>{  
            if(data !== undefined){
                return data
            }else{
                return []
            }
        }).catch(err =>{
            console.log('from memo_list '+err);
        })
    }

    add(user, content) {
        return this.read(user).then(data=>{
            if(data === 'undefined'){
                return this.notes[user] = []
            }else{
                this.notes[user].push({memo : content, date : new Date()});
                return this.write(user);
            }
        }).catch(err=>{
            console.log('from memo_add '+err);
        })
    }
    
    update(user, content, index) {
        return this.read(user).then(data=>{
            if (typeof data === 'undefined') {
                throw new Error('Cannot update a note, if the user doesnt exist');
            }
            if (data.length <= Number(index)) {
                throw new Error('Cannot update a note that doesnt exist');
            }
            data[Number(index)].memo = content;
            return this.write(user);
        }).catch(err=>{
            console.log('from memo_update '+err);
        })
    }

    remove(user, index) {
        return this.read(user).then(data=>{
            if (typeof data === 'undefined') {
                throw new Error('Cannot remove a note, if the user doesnt exist');
            }
            if (data.length <= Number(index)) {
                throw new Error('Cannot remove a non-existent note');
            }
            data.splice(Number(index), 1);
            return this.write(user);
        }).catch(err=>{
            console.log('from memo_remove '+err);
        })
    }
}

module.exports = Memo

// let a = new Memo();
// a.list('Henry').then(data=>{console.log(data);});
// a.read()