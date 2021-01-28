import React from 'react'
import { Card as MUICard, CardActions, CardContent, CardHeader, CardMedia, makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 240,
      minWidth:240,
      
    },
    header:{

        '& .MuiCardHeader-title':{
            width:200,
            textOverflow:"ellipsis",
            whiteSpace:"nowrap",
            overflow:'hidden',
        },

    },
    media: {
      height: 300,
      maxWidth:"100%",
      paddingTop: '56.25%', // 16:9
    },
    action:{
        zIndex:200,
        position:"relative",
        "&:hover":{
            display:"block"
        }
    }

  }));


const Card=({
    avatar,
    action,
    title,
    subHeader,
    image,
    actions,
    children,
    ...props


})=> {
    const classes=useStyles()


    return (
        <MUICard className={classes.root}>
            <CardHeader
            className={classes.header}
                avatar={
                    avatar
                }
                action={
                    action
                }
                title={title}
                subheader={subHeader}
            />
            <CardMedia
                className={classes.media}
                image={image}
                
            />
            {children?<CardContent>
                {props.children}
            </CardContent>:null}
            {actions?<CardActions className={classes.action} disableSpacing>
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
                {actions}

            </CardActions>:null}
        </MUICard>
    )
}



export default Card

