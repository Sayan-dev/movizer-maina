import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Grid, IconButton } from '@material-ui/core'
import Card from '../../../../commons/Card/Card'
import Text from '../../../../commons/Text'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { AuthContext } from '../../../../../context/auth-context'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import { Delete } from '@material-ui/icons'


function SinglePosterLayout({
    title,
    year,
    imdbId,
    setDeleteFavouriteHandler,
    setFavouriteHandler=()=>{},
    favourite,
    poster,
    ...props}) {

    const userAuth=useContext(AuthContext)


    return (
        <Grid item>
            <Card
                
                title={title}
                spacing={30}
                subHeader={`Release Year: ${year}`}
                image={poster}
                actions={userAuth.isLoggedIn?(
                    <>
                    <IconButton onClick={()=>setFavouriteHandler({
                        Title:title,
                        Year:year,
                        imdbID:imdbId,
                        Poster:poster
                    })} color="primary" aria-label="add to favorites">
                        {favourite?<FavoriteIcon  color="primary" />:<FavoriteBorder  color="primary" />}
                    </IconButton>
                    <IconButton  color="primary" aria-label="share">
                        <ShareIcon color="primary"/>
                    </IconButton>
                    <IconButton onClick={()=>setDeleteFavouriteHandler(imdbId)}>
                        <Delete/>
                    </IconButton>
                    </> 
                ):null
                }
            />
        </Grid >
    )
}


export default SinglePosterLayout

