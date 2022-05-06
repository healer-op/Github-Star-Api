// 🚀 Npm-Packages 
const express = require('express')
const fetch = require("node-fetch");
const cors = require('cors')
const app = express()

// ☁️ Utils
const port = 3000
app.use(cors());


// 🌔 Express Routes

app.get("/", async function (req, res) {
    res.send("Made By Healer-op <br>https://gitstars.cyberhub.repl.co/api/LocalMiner/Installer/healer-op");
});


app.get("/api/:username/:repo/:name", async function (req, res) {
    let username = req.params.username;
    let repo = req.params.repo;
    let name = req.params.name;
    fetch(`https://api.github.com/repos/${username}/${repo}/stargazers`)
        .then(response => {
            if (!response.ok) {
                res.send(`check repo link`)
            }
            return response.json();
        })
        .then(data => {
            if(data.length > 0){
                let find = 0
                find = data.find(elem => elem.login === name);
                if(typeof find !== 'undefined' && find.login == name){
                    res.send(find)
                }
                else{
                  res.send(`false`)
                }
            }
            else{
                res.send(`false`)
            }
        })
});





app.listen(port, (err) => {
    if (err) {
        console.log("❌Server crashed❌");
        console.log("--------------------");
        console.log(err)
    } else {
        console.log(`✅Server started successfully✅`);
        console.log(`http://localhost:${port}`);
    }
})
