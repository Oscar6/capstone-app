var express = require('express');
var app = express();

app.use(require('./routes/authentication'));
app.use(require('./routes/returnData'));


app.listen(3001, ()=>{
    console.log("on port 3001")
})