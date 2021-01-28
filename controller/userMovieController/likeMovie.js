
exports.putLikeMovie=async(req,res,next)=>{
    const {user,body}=req
    console.log("Hi")

    
    const {favourite}=user

    favourite.push({...body})

    user.favourite=favourite
    try{
        user.save()
        res.json({message:"Success"})
    }catch(err){
        console.log(err)
        const error = new HttpError(
        "favourite movie cannot be added, please try again",
        500
        );
        return next(error);

    }





}