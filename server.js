/*
 * Title: Typing Test Game.
 * Description: Server file for typing game app
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 27/12/2021
 */
 
// Dependencies.
 const express = require('express');
 const path = require('path');
 
// App object or Module scaffolding.
 const app = express();
// main functions or objects.
//  view engine initialization
app.set('view engine', 'ejs');

// Initiate Static directory
app.use('/public', express.static('./public'))
app.use(express.static(path.join(__dirname, 'public/Js')));


app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/static',(req,res)=>{
    res.sendFile(path.join(__dirname, "/index.html"));
})
 
//  404 handler
app.all('*', (req, res)=>{
    res.render('404.ejs', {url : req.originalUrl})
})

// Server Creation
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening Typing Test App`);
})


// export the module.