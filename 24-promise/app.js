let fs = require('fs')

// Sync way
// function readFileFromPath(path){
//     let rootPath = fs.readdirSync(path);
//     return rootPath.map(file =>{
//         if(fs.statSync(`${path}/${file}`).isDirectory()){
//             console.log(`${path}/${file} -------is a directory`);
//             return readFileFromPath(`${path}/${file}`)
//         }else{
//             console.log(`${path}/${file} -------is a file`);
//             return `${path}/${file}`
//         }
//     })
// }

// promise way
// function readFileFromPath(path) {
//     let rootPath = new Promise((good, bad) => {
//         fs.readdir(path, (err, data) => {
//             if (err) { bad(err); }
//             else { good(data) }
//         })
//     })
//     return rootPath.then(file => {
//         file.map(file => {
//             let check = new Promise((good, bad)=>{
//                 fs.stat(`${path}/${file}`, (err, data)=>{
//                     if(err){ bad(err)}
//                     else{good(data)}
//                 })
//             })
// check.then(inside =>{
//     if (inside.isDirectory()) {
//         console.log(`${path}/${file} -------is a directory`);
//         return readFileFromPath(`${path}/${file}`)
//     } else {
//         console.log(`${path}/${file} -------is a file`);
//         return `${path}/${file}`
//     }
// })
//         })
//     })
// }

const toPromise = require('util');
let readDir = toPromise.promisify(fs.readdir);
let checkFile = toPromise.promisify(fs.stat);

// async way
async function readFileFromPath(path) {
    let rootPath = await readDir(path);
    return rootPath.map(async inside => {
        let check = await checkFile(`${path}/${inside}`)
        if (check.isDirectory()) {
            console.log(`${path}/${inside} -------is a directory`);
            return readFileFromPath(`${path}/${inside}`)
        } else {
            console.log(`${path}/${inside} -------is a file`);
            return `${path}/${inside}`
        }
    })
}
readFileFromPath('.')