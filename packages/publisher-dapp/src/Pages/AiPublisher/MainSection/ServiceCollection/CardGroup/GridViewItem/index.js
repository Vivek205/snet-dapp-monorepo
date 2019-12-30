import React from "react";
import StarRatingComponent from "react-star-rating-component";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import truncate from "lodash/truncate";
import { withStyles } from "@material-ui/styles";

import RatingsCount from "shared/dist/components/RatingsCount";
import CardImg from "shared/dist/assets/images/SnetDefaultServiceImage.png";
import SingularityLogo from "shared/dist/assets/images/avatar.png";
import SNETButton from "shared/dist/components/SNETButton";
import { useStyles } from "./styles";

const StyledCard = ({ classes, orgImg, cardTitle, cardMedia, title, cardSubheader }) => {
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        avatar={<Avatar aria-label="recipe" className={classes.avatar} src={orgImg || SingularityLogo} />}
        classes={{
          title: classes.cardTitle,
          subheader: classes.cardSubheader,
        }}
        title={truncate(cardTitle, { length: 35 })}
        subheader={cardSubheader}
      />
      <CardMedia className={classes.CardMedia} image={cardMedia || CardImg} title={title} />
      <CardContent className={classes.cardContent}>
        <div className={classes.ratingSection}>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={10}
            className={classes.ratingStars}
          />
          <RatingsCount ratingGiven={2} totalRating={6} />
        </div>
        <Typography className={classes.cardTypograpy} component="p">cardDescription</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <SNETButton children="preview" variant="text" color="primary" />
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(StyledCard);
