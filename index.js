//Car Command line
module.exports= (processArgs, quantity) => {
    var fs=require('fs');
    var updateCar=require('./db/updateCars.js');
    var commandLineArgLength=processArgs.length;

    if(commandLineArgLength < 3)
    {
        console.info("Syntax");
        console.info("node carCommandLine <buy <dealershipName> <carnumber> |sell <dealershipName> <carnumber> |list (dealership|cars)| set <userfile> >");
    }
    else 
    {
        firstCommand=processArgs[2];
        if(firstCommand === 'buy')
        {
            if(commandLineArgLength < 5)
            {
                console.error('Specify a dealership and a car');
            }
            else
            {
                let dealer=processArgs[3];
                let car=processArgs[4];
                console.log("Buying a "+car+" from "+dealer);
                let newQuant=quantity-1;
                updateCar(dealer, car, newQuant);
            }
        }
        else if (firstCommand === 'sell')
        {
            if(commandLineArgLength < 5)
            {
                console.error('Specify a dealership and a car');
            }
            else
            {
                let dealer=processArgs[3];
                let car=processArgs[4];
                console.log("Selling your "+car+" to "+dealer);
                let newQuant=quantity+1;
                updateCar(dealer, car, newQuant);
            }
        }
        else if(firstCommand === 'list')
        {
            if(commandLineArgLength < 4)
            {
                console.error('specify list "dealerships" or "cars"');
            }
            else
            {
                if(processArgs[3] === 'dealerships')
                {
                    console.log("Listing all of the dealerships");
                }
                else if(processArgs[3] === 'cars')
                {
                    if(commandLineArgLength < 5)
                    {
                        console.error("Specify a dealership to list cars from");
                    }
                    else
                    {
                        console.log("Listing all of the cars from "+processArgs[4]);
                    }
                }
                else
                {
                    console.log("Error choose cars or dealerships");
                }
        
            }
        }
        else if(firstCommand === 'set')
        {
            if(commandLineArgLength < 4)
            {
                console.error('please enter in your user file');
            }
            else
            {
                let userFile=processArgs[3];
                console.log("Importing data from "+userFile);
            }
        }

    }
}