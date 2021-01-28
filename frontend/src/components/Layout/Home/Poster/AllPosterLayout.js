import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import SinglePosterLayout from './SinglePoster/SinglePosterLayout'


// const allPosters = { Search: [{ "Title": "Blade Runner", "Year": "1982", "imdbID": "tt0083658", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg" }, { "Title": "Blade Runner 2049", "Year": "2017", "imdbID": "tt1856101", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg" }, { "Title": "Blade", "Year": "1998", "imdbID": "tt0120611", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg" }, { "Title": "Blade II", "Year": "2002", "imdbID": "tt0187738", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BOWVjZTIzNDYtNTBlNC00NTJjLTkzOTEtOTE0MjlhYzI2YTcyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" }, { "Title": "Blade: Trinity", "Year": "2004", "imdbID": "tt0359013", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjE0Nzg2MzI3MF5BMl5BanBnXkFtZTYwMjExODQ3._V1_SX300.jpg" }, { "Title": "Sling Blade", "Year": "1996", "imdbID": "tt0117666", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNGY5NWIxMjAtODBjNC00MmZhLTk1ZTAtNGRhYThlOTNjMTQwXkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_SX300.jpg" }, { "Title": "Dragon Blade", "Year": "2015", "imdbID": "tt3672840", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0MjgxOTQ5MF5BMl5BanBnXkFtZTgwODA3NTUwNjE@._V1_SX300.jpg" }, { "Title": "Blade of the Immortal", "Year": "2017", "imdbID": "tt5084170", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYzIwYmJlMjktMzJiMy00YmQzLThmNWYtNWY3NGViZjc4MzYwXkEyXkFqcGdeQXVyNDQxNjcxNQ@@._V1_SX300.jpg" }, { "Title": "Shinobi: Heart Under Blade", "Year": "2005", "imdbID": "tt0475723", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNjZhMTNmMTItNmU4Mi00YTdkLWFkZWUtOGExNTQ3MGRiYWYyXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg" }, { "Title": "Blade Runner: Black Out 2022", "Year": "2017", "imdbID": "tt7428594", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BZGNiNmNiMTctMDI4OS00OWYxLWE4ZWEtZjFkZjU4ZmY5YzEyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_SX300.jpg" }], totalResults: 268, Response: "True" }

function SinglePoster(
    { Title,
        Year,
        favourite,
        setDeleteFavouriteHandler,
        setFavouriteHandler,
        imdbID,
        Poster }) {


    return (
        <SinglePosterLayout
            key={imdbID}
            title={Title}
            year={Year}
            favourite={favourite}
            setDeleteFavouriteHandler={setDeleteFavouriteHandler}
            setFavouriteHandler={setFavouriteHandler}
            imdbId={imdbID}
            poster={Poster}

        />
    )


}



function AllPosterLayout({
    setDeleteFavouriteHandler=()=>{},
    setFavouriteHandler,
    allPosters,
    ...props}) {



    return (

        <Box>
            <Container>
                <Grid container spacing={3}>
                    {
                        allPosters.length>0? allPosters.map(poster => {

                            return SinglePoster({setFavouriteHandler,setDeleteFavouriteHandler, ...poster })

                        }):"No Movies Found"
                    }
                </Grid>


            </Container>

        </Box>

    )
}



export default AllPosterLayout

