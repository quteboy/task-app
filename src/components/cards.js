import React from 'react';


//Material Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



//inline Style
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  

const Cards = (props) => {
    const classes = useStyles();
     

    return (
        <div>
            <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Account Details
        </Typography>
        <Typography variant="h5" component="h2">
          Username
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          App Name
        </Typography>
        
      </CardContent>
      
    </Card>
    
        </div>
    )
}

export default Cards;
