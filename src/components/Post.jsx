import React from "react";
import { makeStyles, Container, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";
import { TabletMac } from "@material-ui/icons";






const useStyles = makeStyles((theme) => ({
    card : 
    {
        marginBottom : theme.spacing(5),
    },
    media : 
    {
        height : 250,
        [theme.breakpoints.down('sm')] : 
        {
            height : 150,
        },
    },
}));


const  Post = () => {

  const classes = useStyles();

  return (
    <Card className = { classes.card }>
        <CardActionArea>
            <CardMedia 
            className = {classes.media} 
            image     = 'https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
            title     = 'My Post'
            />
            <CardContent>
                <Typography guttorBottom variant = 'h5'> My First Post</Typography>
                <Typography variant = 'body2'> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size = 'small' color = 'primary'>Share</Button>
            <Button size = 'small' color = 'primary'>Learn More</Button>
        </CardActions>
    </Card>
      );
  

}

export default Post;
