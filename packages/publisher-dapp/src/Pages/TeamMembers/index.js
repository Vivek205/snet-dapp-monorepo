import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import { inviteMembersActions } from "../../Services/Redux/actionCreators";
import { memberStatus } from "../../Utils/TeamMembers";
import InvitedMembers from "./InvitedMembers";
import MembersWithAccess from "./MembersWithAccess";
import AcceptedMembers from "./AcceptedMembers";
import { TopSectionContent } from "./content";

import { useStyles } from "./styles";

class TeamMembers extends Component {
  state = {
    showPopup: false,
    textareaValue: "",
  };

  componentDidMount = () => {
    this.props.getAllMembers(this.props.uuid);
  };

  handleInviteMembers = () => {
    this.setState({ showPopup: true });
  };

  onTextareaChange = event => {
    this.setState({ textareaValue: event.target.value });
  };

  handleSendInvitation = () => {
    const allEmails = this.state.textareaValue.split(",");
    this.props.inviteMembers(allEmails, this.props.uuid);
  };

  handleAddToBlockChain = () => {
    this.props.publishMembers(this.props.members[memberStatus.ACCEPTED], this.props.uuid);
  };

  render() {
    const { classes, members } = this.props;
    const { showPopup, textareaValue } = this.state;
    return (
      <Grid container className={classes.teammembersContainer}>
        <Grid item xs={12} sm={12} md={2} lg={2} className={classes.backToHomeLink}>
          <BackIcon />
          <Link to="/">Back to Home </Link>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className={classes.topSection}>
            <div className={classes.topSectionContent}>
              <Typography variant="h3">{TopSectionContent.title}</Typography>
              <Typography variant="h5">{TopSectionContent.description}</Typography>
            </div>
            <div className={classes.topSectionMedia}>
              <img src={TopSectionContent.media} alt="Team Members" />
            </div>
          </div>
          <div className={classes.invitedAndAcceptedList}>
            <InvitedMembers
              pendingMembers={members[memberStatus.PENDING]}
              verifiedMembers={members[memberStatus.VERIFIED]}
              showPopup={showPopup}
              handleInviteMembers={this.handleInviteMembers}
              textareaValue={textareaValue}
              onTextareaChange={this.onTextareaChange}
              handleSendInvitation={this.handleSendInvitation}
            />
            <AcceptedMembers
              acceptedMembers={members[memberStatus.ACCEPTED]}
              handleAddToBlockChain={this.handleAddToBlockChain}
            />
          </div>
          <MembersWithAccess
            publisedMembers={members[memberStatus.PUBLISHED]}
            publishedInProgressMembers={members[memberStatus.PUBLISH_IN_PROGRESS]}
          />
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  [memberStatus.PUBLISHED]: state.organization.members[memberStatus.PUBLISHED],
  uuid: state.organization.uuid,
  members: state.organization.members,
});

const mapDispatchToProps = dispatch => ({
  getAllMembers: uuid => dispatch(inviteMembersActions.getAllMembers(uuid)),
  inviteMembers: (members, uuid) => dispatch(inviteMembersActions.inviteMembers(members, uuid)),
  publishMembers: (members, uuid) => dispatch(inviteMembersActions.publishMembers(members, uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(TeamMembers));
