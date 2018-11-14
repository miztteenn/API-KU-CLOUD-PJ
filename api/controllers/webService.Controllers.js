const MongoClient = require('mongodb').MongoClient

const url = "mongodb://localhost:27017/api/"

exports.get_all = (req, res, next) =>{
    MongoClient.connect(url,function(err,db){
        db.collection("Weather3Hours")
        .find({})
        .toArray(function(err ,result)
        {
            if(err) throw err 
            const output =
            {
                status:"OK",
                message  : result
            }
            res.json(output)
            
             db.close()
        })
    })

}

exports.createfirstWebService = (req ,res,next) =>{
    console.log(req.body)
   
    //res.json(output)
}
