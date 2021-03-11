module.exports= function() 
{

    var mongodb=require('mongodb').MongoClient;

    //Connection URL
    const url='mongodb://127.0.0.1:27017';

    //Database Name
    const dbName='cars';

    const client=new mongodb(url);

    var dealerships=
    [{"id":0,
      "name":"Ford"}, 
      {"id":1,
       "name":"Jeep"}, 
       { "id":2,
        "name":"Chevrolet"
       }];

    var fordCars=
    [
        {"id":0,
        "make":"Ford",
        "model":"EcoSport",
        "make_id":0,
        "quantity":10,
        "cost":19995},

        {"id":1,
        "make":"Ford",
        "model":"Escape",
        "make_id":0,
        "quantity":10,
        "cost":24885},

        {"id":2,
        "make":"Ford",
        "model":"Bronco Sport",
        "make_id":0,
        "quantity":10,
        "cost":26820},

        {"id":3,
        "make":"Ford",
        "model":"Edge",
        "make_id":0,
        "quantity":10,
        "cost":26820},

        {"id":4,
        "make":"Ford",
        "model":"Explorer",
        "make_id":0,
        "quantity":10,
        "cost":32450},

        {"id":5,
        "make":"Ford",
        "model":"Mustang Mach-E",
        "make_id":0,
        "quantity":10,
        "cost":42895},

        {"id":6,
        "make":"Ford",
        "model":"Mustang Mach-E",
        "make_id":0,
        "quantity":10,
        "cost":49995}
    ];

    var jeepCars=
    [
        {"id":7,
        "make":"Jeep",
        "model":"Renegade",
        "make_id":1,
        "quantity":10,
        "cost":22850},

        {"id":8,
        "make":"Jeep",
        "model":"Compass",
        "make_id":1,
        "quantity":10,
        "cost":23915},

        {"id":9,
        "make":"Jeep",
        "model":"Cherokee",
        "make_id":1,
        "quantity":10,
        "cost":26555},

        {"id":10,
        "make":"Jeep",
        "model":"Wrangler",
        "make_id":1,
        "quantity":10,
        "cost":28457},

        {"id":11,
        "make":"Jeep",
        "model":"Gladiator",
        "make_id":1,
        "quantity":10,
        "cost":32450},

        {"id":12,
        "make":"Jeep",
        "model":"Grand Cherokee",
        "make_id":1,
        "quantity":10,
        "cost":34220},

        {"id":13,
        "make":"Jeep",
        "model":"Grand Cherokee L",
        "make_id":1,
        "quantity":10,
        "cost":36995},

        {"id":14,
        "make":"Jeep",
        "model":"Wrangler 4xe",
        "make_id":1,
        "quantity":10,
        "cost":47995},
    ];


    var chevyCars=
    [
        {"id":15,
        "make":"Chevrolet",
        "model":"Trailblazer",
        "make_id":2,
        "quantity":10,
        "cost":19000},

        {"id":16,
        "make":"Chevrolet",
        "model":"Trax",
        "make_id":2,
        "quantity":10,
        "cost":21300},

        {"id":17,
        "make":"Chevrolet",
        "model":"Equinox",
        "make_id":2,
        "quantity":10,
        "cost":23800},

        {"id":18,
        "make":"Chevrolet",
        "model":"Blazer",
        "make_id":2,
        "quantity":10,
        "cost":28800},

        {"id":19,
        "make":"Chevrolet",
        "model":"Traverse",
        "make_id":2,
        "quantity":10,
        "cost":29800},

        {"id":20,
        "make":"Chevrolet",
        "model":"Tahoe",
        "make_id":2,
        "quantity":10,
        "cost":49000},

        {"id":21,
        "make":"Chevrolet",
        "model":"Suburan",
        "make_id":2,
        "quantity":10,
        "cost":51700},
    ];

    const insertDocuments =function (db, objects, callback)
    {
        //Get the documents collection
        const collection= db.collection('documents');

        collection.insertMany(objects, function(err, result)
        {
            console.log("Inserted object: ");
            objects.forEach((element, index) => {
                console.log(index+": "+JSON.stringify(element));
            });
            callback(result);
        });

    }

    //Use connect method to connect to the Server
    client.connect(function( err) 
    {
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        insertDocuments(db, dealerships, function()
        {
            console.log("Inserting  dealerships document");
        });
        insertDocuments(db, fordCars, function()
        {
            console.log("Inserting  fordCars document");
        });
        insertDocuments(db, jeepCars, function()
        {
            console.log("Inserting  jeepCars document");
        });
        insertDocuments(db, chevyCars, function()
        {
            console.log("Inserting  chevyCars document");
        });
        client.close();
    });

}