import { readFile, writeFile } from 'fs';

readFile('file.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('An error occurred while reading the file:', error);
        return;
    }
    console.log('File content:', data);
});

let addContent="This is the added content"
writeFile('file.txt', addContent, 'utf8', (error)=>{
    if(error){
        console.error('error occured while writing file', error)
        return;
    }
    console.log("Successfully added content")
})