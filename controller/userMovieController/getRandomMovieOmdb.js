
const User = require("../../models/user");
const { default: Axios } = require('axios');

exports.getRandomMovieOmdb=async(req,res,next)=>{

    const keyWords=["blade","Lift","Avengers","Fairy","Maze","Bank","Heist","King","Cold","John","School"]

    const randomIndex=Math.floor(Math.random()*keyWords.length)


    const searchresult=await Axios({
        method:"get",
        url:process.env.OMDB_URL+`s=${keyWords[randomIndex]}&page=1`
    })

    console.log(searchresult.data)
    res.json({
        result:searchresult.data
    })

}

