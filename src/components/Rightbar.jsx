import React from "react";
import { makeStyles, Container, Typography, Avatar, ImageList, ImageListItem, Link, Divider } from "@material-ui/core";
import { AvatarGroup } from "@mui/material";






const useStyles = makeStyles((theme) => ({
    container : 
    {
        paddingTop                   : theme.spacing(10) ,
        position                     : 'sticky'          ,
        top                          : 0                 ,  
    },
    title : 
    {
      fontSize: 16,
      fontWeight : 500,
      color : '#555'
    },
    link : 
    {
      marginRight : theme.spacing(2),
      color       : '#555',
      fontSize    : '16',
    }
}));


const  Rightbar = () => {

  const classes = useStyles();

  return (
<Container className = {classes.container}>
  <Typography className = { classes.title } guttorBottom>
    Online Friends
  </Typography>
  <AvatarGroup max={6} style = {{ marginBottom: 20}}>
  <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/6.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/7.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg" />
</AvatarGroup>
<Typography className = { classes.title } guttorBottom>
    Gallery
</Typography>
<ImageList rowHeight = {100} className = {classes.imageList} cols = {2} style = {{ marginBottom: 20}}>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  <ImageListItem>
    <img src = 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt = ''/>
  </ImageListItem>
  </ImageList>
  <Typography className = { classes.title } guttorBottom>
      Categories
  </Typography>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Sport
  </Link>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Food
  </Link>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Movies
  </Link>
  <Divider flexItem style = {{ marginBottom : 5}}/>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Science
  </Link>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Music
  </Link>
  <Link 
  href='#' 
  className = { classes.link} 
  variant = 'body2' 
  >
    Life
  </Link>
</Container>
  );
}

export default Rightbar;
