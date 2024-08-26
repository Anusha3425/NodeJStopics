import { appendFile, mkdir, readFile, unlink, writeFile } from 'fs';

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

appendFile('file.txt', 'This is appended', 'utf8',(error)=>{
    if(error){
        console.log('error occured')
    }
    else{
        console.log('successfully appended');
    }
})

readFile('file.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('error occurred while reading the file', error);
        return;
    }
    console.log('File content:', data);
});

// to delete the file, use 'unlink' 

writeFile('file2.txt', 'Created another file', 'utf8', (error)=>{
    if(error){
        console.log('error occured')
    }
    else{
        console.log('successfully created file');
    }
})

unlink('file2.txt', (error)=>{
    if(error){
        console.log('error occured while deleting file');
    }
    else{
        console.log('Deleted successfully');
    }
})