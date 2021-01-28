const express = require('express');
const { getRandomMovieOmdb, getMovieBySearch, putLikeMovie } = require('../controller/userMovieController');
const { deleteMovie } = require('../controller/userMovieController/deleteMovie');
const { getLikedMovies } = require('../controller/userMovieController/getLikedMovies');
const { checkUser } = require('../middleware/checkUser');
const { checkUserFireBase } = require('../middleware/checkUserFirebase');


const router=express.Router()

router.get("/getRandomMovie",

getRandomMovieOmdb
)

router.get("/getMovieBySearch",
checkUserFireBase,
getMovieBySearch
)

router.post("/likeMovie",
checkUser,
putLikeMovie

)

router.get("/getLikedMovies",
checkUser,
getLikedMovies
)

router.delete("/deleteMovie",
checkUser,
deleteMovie
)

module.exports = router;
