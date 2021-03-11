var app=require('./index.js');
var schemaSetup=require('./db/schemaSetup.js');

schemaSetup();
processArgs=process.argv;
setTimeout(app, 5000, processArgs, 10);



