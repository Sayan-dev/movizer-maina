exports.getLikedMovies=(req,res,next)=>{
    const {user}=req
    const favourites=user.favourite
    res.json({
        favourites:favourites
    })
}