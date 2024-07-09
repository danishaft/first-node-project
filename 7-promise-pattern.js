const {readFile, writeFile} = require('fs'); //or just append .promises
const util = require('util')
// Promisify the read and write file function to use async/await syntax.
const readPromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readPromise('./content/first.txt/', 'utf8');
        const second = await readPromise('./content/second.txt/', 'utf8');
        await writePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first}`)
        console.log(first, second)
    } catch (err) {
        console.error(err)
    }
}
start()
//using the promise syntax to promisify our function

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

//using async await pattern to await the promise(resolved or error)
// const start = async() => {
//     try {
//         const first = await getText('./content/first.txt/');
//         const second = await getText('./content/second.txt/');
//         console.log(first, second)
//     } catch (err) {
//         console.error(err)
//     }
// }

// using the .then chaining method to await the promise(resolved or error)
// getText('./content/first.txt/')
// .then(result => console.log(result))
// .catch(err => console.log(err))

