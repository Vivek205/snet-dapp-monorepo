import React from "react";
import truncate from "lodash/truncate";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import CardImg from "shared/dist/assets/images/SnetDefaultServiceImage.png";
import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const RelatedContent = ({ classes, cardTitle, cardMedia, cardDescription, cardAction }) => {
  const cardHeaderLength = 35;
  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        classes={{
          title: classes.cardTitle,
        }}
        title={truncate(cardTitle, { length: cardHeaderLength })}
      />
      <CardMedia className={classes.CardMedia} image={cardMedia || CardImg} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.cardDescription}>{cardDescription}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <SNETButton children={cardAction} variant="text" color="primary" />
      </CardActions>
    </Card>
  );
};

export default withStyles(useStyles)(RelatedContent);
