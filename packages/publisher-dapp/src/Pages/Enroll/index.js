import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

import StyledButton from "shared/dist/components/StyledButton";
import { useStyles } from "./styles";

const Enroll = ({ classes }) => {
  return (
  	<Grid container className={classes.enrollMainContainer}>

  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.topSectionContainer}>
  			<Typography variant="h2">What You Need To Enroll</Typography>
  			<Typography variant="body1">Please keep these documents handy for seamless enrollment</Typography>
  		</Grid>

  		<Grid item xs={12} sm={12} md={12} lg={12}>
  			<Typography variant="h3">Identity Proof</Typography>
  			<Typography variant="body2">Lorem ipsum dolor sit amet, ei nihil suscipiantur eum, pri an labore honestatis. Quo an quas laboramus, ad vidit iuvaret similique vel. Lus in facer causae labores, eam virtute luptatum ex, adhuc praesent eu usu. Laudem insolens expetendis at eam, mea brute populo voluptatum cu.</Typography>
				<Typography variant="subtitle1" display="inline">Valid Documents: </Typography>
        <Typography variant="body2" display="inline">Passport, Driving Licence, Social Security Card, next item</Typography>
  		</Grid>

  		<Grid item xs={12} sm={12} md={12} lg={12}>
  			<Typography variant="h3">Metamask</Typography>
  			<Typography variant="body2">Lorem ipsum dolor sit amet, argumentum efficiantur te mel. In pro aeterno insolens, quo et tamquam tractatos splendide. Nec cu modus mazim dolorum. At debet utroque sadipscing duo, ei brute dicat solet pro, constituto sententiae no sit.</Typography>
  			<Typography variant="body2">Per ullum ignota nostro cu. Ne sed quem pericula. Mundi saperet ocurreret cum ad, velit ocurreret consectetuer in mea, sea mediocrem omittantur et. Dum suscipit scaevola id, veniam scriptorem sea ad. <a href="/" title="Metamask Installation Link">Metamask Installation Link</a></Typography>
  		</Grid>

  		<Grid item xs={12} sm={12} md={12} lg={12}>
  			<Typography variant="h3">Legal Entity Status</Typography>
  			<Typography variant="body2">Lorem ipsum dolor sit amet, ei nihil suscipiantur eum, pri an labore honestatis. Quo an quas laboramus, ad vidit iuvaret similique vel. Lus in facer causae labores, eam virtute luptatum ex, adhuc praesent eu usu. Laudem insolens expetendis at eam, mea brute populo voluptatum cu.</Typography>
				<Typography variant="body2"><span>Valid Documents:</span> Passport, Driving Licence, Social Security Card, next item</Typography>
  		</Grid>

  		<Grid item xs={12} sm={12} md={12} lg={12}>
  			<Typography variant="h3">Website</Typography>
  			<Typography variant="body2">Lorem ipsum dolor sit amet, argumentum efficiantur te mel. In pro aeterno insolens, quo et tamquam tractatos splendide. Nec cu modus mazim dolorum. At debet utroque sadipscing duo, ei brute dicat solet pro, constituto sententiae no sit.</Typography>
  			<Typography variant="body2">Per ullum ignota nostro cu. Ne sed quem pericula. Mundi saperet ocurreret cum ad, velit ocurreret consectetuer in mea, sea mediocrem omittantur et. Dum suscipit scaevola id, veniam scriptorem sea ad.</Typography>
  		</Grid>

  		<Grid item xs={12} sm={12} md={12} lg={12} className={classes.btnContainer}>
  			<StyledButton btnText="continue your enroll" type="blue" />
  		</Grid>

  	</Grid>
  )
};

export default withStyles(useStyles)(Enroll);
