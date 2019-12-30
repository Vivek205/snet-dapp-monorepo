import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@material-ui/icons/CheckCircle";

import { useStyles } from "./styles";
import SNETButton from "shared/dist/components/SNETButton";
import GetInTouch from "./GetInTouch";
import OverviewArticle from "./OverviewArticle";
import { overViewArticles, ProgramMemberShipDetailsList } from "./content";


const Overview = ({ classes }) => {
  return (
  	<Grid container className={classes.overiewMainContainer}>
  		{overViewArticles.map((item, index) => (
  			<OverviewArticle 
  				key={item.title}
  				title={item.title}
  				description={item.description}
  				list={item.list}
  				media={item.media}
  				btnDetails={item.btnDetails}
  				rightAlign={(index + 1) % 2 === 0}
  			/>
  		))}  		
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.programMemDetails}>      	
      {ProgramMemberShipDetailsList.map((item, index) => (
      	<React.Fragment key={item.title}>
	      	<Typography variant="h2">{item.title}</Typography>
	        <Typography variant="body2">{item.description}</Typography>
	        <List>	        	
	        {item.list.map((list, index) => (
	        	<ListItem key={index}>
          		<ListItemIcon>
              	<CheckIcon className={classes.checkCircleIcon} />
            	</ListItemIcon>
          		<ListItemText primary={list} />          
          	</ListItem>		
        	))}
	        </List>
	        <div className={classes.btnContainer}>
	        <SNETButton children="start your enroll" color="secondary" variant="contained" />
	        </div>
	      </React.Fragment>
	    ))}
      </Grid>
      <GetInTouch />
    </Grid>
  );
};

export default withStyles(useStyles)(Overview);
