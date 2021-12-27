/*
 * Title: Typing Test Game.
 * Description: Server file for typing game app
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 27/12/2021
 */
 
// Dependencies.
 const express = require('express');
 
// App object or Module scaffolding.
 const app = express();
// main functions or objects.
//  view engine initialization
app.set('view engine', 'ejs');

// Initiate Static directory
app.use('/Assets', express.static('./Assets'))

app.get('/', (req, res)=>{
    res.render('index');
})
 
 
// Server Creation
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Listening Typing Test App`);
})


// export the module.