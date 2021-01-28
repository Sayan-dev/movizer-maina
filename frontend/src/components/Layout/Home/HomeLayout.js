import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Container, makeStyles } from '@material-ui/core'
import Text from '../../commons/Text'
import SearchCatagory from './Search/SearchCatagory'
import AllPosterLayout from './Poster/AllPosterLayout'
import { useHttpClient } from '../../../hooks/http-hook'
import { AuthContext } from '../../../context/auth-context'

const useStyles=makeStyles((theme) => ({
    home:{
        width:"90%",
        margin:'auto'
    },
    text:{
        marginTop:theme.spacing(5),
        color:theme.palette.text.secondary,
        ...theme.typography.h1
    }

}
));

function HomeLayout(props) {
    const classes=useStyles()
    const {sendRequest,isLoading}=useHttpClient()

    const [likedPosters,setLikedPosters]=useState([])

    const [allPosters,setAllPosters]=useState([])

    const {token,setAuthModal}=useContext(AuthContext)

    useEffect(() => {

        
        const getAllPosters=async()=>{
            let resp
            try{

                resp=await sendRequest("getRandomMovie","get")

            }
            catch(err){
                console.log(err)

            }
            setAllPosters(resp.result.Search)

        }


        getAllPosters()



    }, [])
    useEffect(() => {
        
        const getYourLikedPosters=async()=>{
            let resp
            if(!!token){

            
                try{
    
                    resp=await sendRequest(`getLikedMovies`,
                    "get",
                    null,
                    {
                        "Authorization":"Bearer "+ token 
                    })
                }
                catch(err){
                    console.log(err)
                }
                setLikedPosters(resp.favourites)

            }else{

            }
            
        }


        getYourLikedPosters()
    }, [token])

    const getAllPostersBySearch=async(data)=>{
        let resp
        if(!!token){
            try{

                resp=await sendRequest(`getMovieBySearch/?title=${data.title}&year=${data.year}&plot=${data.plot}`,"get",null,{
                    "Authorization":"Bearer "+ token 
                })
            }
            catch(err){
                console.log(err)
            }
            setAllPosters(resp.result)
        }
        else{
            setAuthModal(true)
        }


    }

    const setFavouriteHandler=async(movieData)=>{
        let resp
        const newLikedPosters=[...likedPosters]
        newLikedPosters.push({...movieData})
        setLikedPosters(newLikedPosters)
        if(!!token){
            try{

                resp=await sendRequest(`likeMovie`,"post",
                {
                    ...movieData
                }
                ,{
                    "Authorization":"Bearer "+ token 
                })

            }
            catch(err){
                console.log(err)
            }

        }
        else{
            setAuthModal(true)
        }
    }
    const setDeleteFavouriteHandler=async(imdbID)=>{
        let resp
        const newLikedPosters=[...likedPosters]
        const index=newLikedPosters.findIndex((e)=>{
            return e.imdbID===imdbID
        })
        newLikedPosters.splice(index,1)
        setLikedPosters(newLikedPosters)

        if(!!token){
            try{

                resp=await sendRequest(`deleteMovie`,"delete",
                {
                    imdbID:imdbID
                }
                ,{
                    "Authorization":"Bearer "+ token 
                })

            }
            catch(err){
                console.log(err)
            }

        }
        else{
            setAuthModal(true)
        }
    }





    return (
        <Box className={classes.home}>
            <SearchCatagory isLoading={isLoading} searchHandler={getAllPostersBySearch}/>
            <AllPosterLayout setFavouriteHandler={setFavouriteHandler} allPosters={allPosters}/>
            {
                !!token?
                <><Text className={classes.text}>Your Favourites</Text>
                <hr/>
                <AllPosterLayout setDeleteFavouriteHandler={setDeleteFavouriteHandler} allPosters={likedPosters}/>
                
            
            </>:null}
        </Box>
    )
}



export default HomeLayout

