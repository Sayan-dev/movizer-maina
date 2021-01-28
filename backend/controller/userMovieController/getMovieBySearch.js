const { default: Axios } = require("axios")

exports.getMovieBySearch=async(req,res,next)=>{
    const {user,query,userNotFound}=req

    if(!userNotFound){
        const searchResults=[]
        for (let index = 1; index <= 2; index++) {
            
            const searchresult=await Axios({
                method:"get",
                url:process.env.OMDB_URL+`s=${query.title}&y=${query.year}&plot=${query.plot}&page=${index}`
            })
            searchResults.push(searchresult)
        }
    
        Promise.all(searchResults)
        .then(response=>{
            console.log(response[0].data)
            console.log(response[1].data)
            let result
            if(response[0].data.Response==='False'){

                        
                res.json({
                    message:response[0].data.Error,
                    result:[

                    ]
                });
            }

            if(response[0].data.Response==='True' && response[1].data.Response==='False'){
                console.log("Hi")
                result=[...response[0].data.Search]
                res.json({
                    message:"Success",
                    result:result
                });
            }


            if(response[0].data.Response==='True' && response[1].data.Response==='True')
            {

                result=[...response[0].data.Search,...response[1].data.Search]
                res.json({
                    message:"Success",
                    result:result
                });
            }
    

    
        })
        .catch(error=>{
            console.log(error)
        })
    }
    else{
        
        const error = new HttpError(
          'User Not Found.',
          401
        );
        return next(error);
    
    }



}