const { getMovieBySearch } = require("./getMovieBySearch");
const { getRandomMovieOmdb } = require("./getRandomMovieOmdb");
const { putLikeMovie } = require("./likeMovie");

module.exports={
    getRandomMovieOmdb,
    getMovieBySearch,
    putLikeMovie
}