// built-in file system (fs) module, async method
const {readFile, writeFile } = require('fs')
 
//callback hell 
readFile('./content/first.txt/', 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt/', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `${first}\n${second}`,
        (err, result) => {
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        }
        )
    })
})