import { mkdir, readdir, rmdir, writeFile } from 'fs';

mkdir("Folder1", (error)=>{
    if(error){
        console.log('error occured')
    }
    else{
        writeFile('./Folder1/fileinFolder.txt','This is the file inside folder', 'utf8',(error)=>{
            if(error){
                console.log('error occured')
            }
            else{
                console.log('successfully created ')
            }
        })
    }
})

mkdir("Folder2", (error)=>{
    if(error){
        console.log('error occured')
    }
    else{rmdir('Folder2', (error)=>{
    if(error){
        console.log('error occured')
    }
    else{
        console.log('removed directory')
    }
})}
})

readdir('Folder1',(error, files)=>{
    if(error){
        console.log('error pccured')
    }
    else{
        console.log(files)
    }
})