var app=require('./index.js');
var schemaSetup=require('./db/schemaSetup.js');

schemaSetup();
processArgs=process.argv;
app(processArgs);



