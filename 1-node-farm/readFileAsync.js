//Non blocking asynchronous way of dealing with File
const fs = require('fs')
fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
      console.log(data2);
      fs.readFile("./txt/append.txt", "utf-8", (err, dat3) => {
        console.log(dat3);

        fs.writeFile('./txt/final.txt',`${data2}\n ${dat3}`,'utf-8', err=>{
            console.log('Your file has been written.')
        })
      });
    });
});
console.log('Will read Fie!')