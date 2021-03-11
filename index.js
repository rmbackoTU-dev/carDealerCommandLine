//Car Command line
var fs=require('fs');
var commandLineArgLength=process.argv.length;

if(commandLineArgLength < 3)
{
    console.info("Syntax");
    console.info("node carCommandLine <buy <dealershipName> <carnumber> |sell <dealershipName> <carnumber> |list (dealership|cars)| set <userfile> >");
}
else 
{
    firstCommand=process.argv[2];
    if(firstCommand === 'buy')
    {
        if(commandLineArgLength < 5)
        {
            console.error('Specify a dealership and a car');
        }
        else
        {
            let dealer=process.argv[3];
            let car=process.argv[4];
            console.log("Buying a "+car+" from "+dealer);
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
            let dealer=process.argv[3];
            let car=process.argv[4];
            console.log("Selling your "+car+" to "+dealer);
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
            if(process.argv[3] === 'dealerships')
            {
            console.log("Listing all of the dealerships");
            }
            else if(process.argv[3] === 'cars')
            {
                if(commandLineArgLength < 5)
                {
                    console.error("Specify a dealership to list cars from");
                }
                else
                {
                    console.log("Listing all of the cars from "+process.argv[4]);
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
            let userFile=process.argv[3];
            console.log("Importing data from "+userFile);
        }
    }

}