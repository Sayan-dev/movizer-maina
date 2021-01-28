exports.deleteMovie=(req,res,next)=>{
    const {user,body}=req
    const newFavourite=user.favourite
    const delIndex=newFavourite.findIndex(e=>{
        return e.imdbID=body.imdbID
    })
    newFavourite.splice(delIndex,1)
    user.favourite=newFavourite
    try{
        user.save()
        res.json({message:"Success"})
    }catch(err){
        console.log(err)
        const error = new HttpError(
        "Movie cannot be deleted",
        500
        );
        return next(error);

    }
}