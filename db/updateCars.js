module.exports=(dealership, carNum, newQuantity) => 
{
    //Get the cars with the dealership id matching the id

    var mongodb=require('mongodb').MongoClient;

    //Connection URL
    const url='mongodb://127.0.0.1:27017';

    //Database Name
    const dbName='cars';

    const client=new mongodb(url);

    const updateCar=function(db, dealership,carNum, newQuantity,callback)
    {
        const dealers=db.collection('dealers');
        const cars=db.collection('cars');

        dealers.findOne({"name": dealership}, function(err, result)
        {
            if(err)
            {
                throw err;
            }
            console.log(result);
            console.log("Found Dealer "+result.name+": ");
            console.log(JSON.stringify(result));
            let dealerNum=result.id;
            cars.find({"make_id": dealerNum}).toArray(function(err, result)
            {
                if(err)
                {
                    throw err;
                }
                console.log(result);
                carToChange=result[carNum];
                carToChangeQuantity=carToChange.quantity;
                carToChangeId=carToChange.id;
                cars.updateOne({"id":carToChangeId}, {$set: {"quantity":newQuantity}}, function(err, res)
                {
                    if(err)
                    {
                        throw err;
                    }
                    console.log("Changed quantity of "+carToChange.make+" from "+
                    carToChangeQuantity+" to "+newQuantity+" got "+res);

                    console.log(JSON.stringify(carToChange));
                })
            })
            if(callback)
            {
                callback(result);
            }
        })
    };

    client.connect(function( err)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("Connected successfully to server");
            const db = client.db(dbName);
            updateCar(db, dealership, carNum, newQuantity);
            console.log("updated car to new Quantity "+newQuantity);
            
        }
    });

}