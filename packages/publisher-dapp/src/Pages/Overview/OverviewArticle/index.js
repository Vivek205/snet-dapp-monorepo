import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/CheckCircle";

import { useStyles } from "./styles";
import StyledButton from "shared/dist/components/StyledButton";

const OverviewArticle = ({ classes, title, description, list, media, btnDetails, rightAlign }) => {
  return (  
    <Grid item xs={12} sm={12} md={12} lg={12} className={`${classes.overviewArticleContainer} ${rightAlign ? classes.reverseDirection : null}`}>
    	<Grid item xs={12} sm={12} md={12} lg={5} className={classes.overviewArticleContent}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <List>
          {list.map((item, index) => (
          <ListItem>
            <ListItemIcon>
              <CheckIcon className={classes.checkCircleIcon} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>   
          ))}        
        </List>
        <StyledButton btnText={btnDetails.text} type={btnDetails.type} />				
      </Grid>
    	<Grid item xs={12} sm={12} md={12} lg={7}>
      	<img src={media} alt="media" />
      </Grid>        
    </Grid>
  );
};

export default withStyles(useStyles)(OverviewArticle);
