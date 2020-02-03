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
import { TopSectionContent, invitationError } from "./content";

import { useStyles } from "./styles";
import { alertTypes } from "shared/dist/components/AlertBox";
import { checkIfKnownError } from "shared/dist/utils/error";
import ValidationError from "shared/dist/utils/validationError";
import { inviteEmailsConstraints } from "./validationConstraints";
import validator from "shared/dist/utils/validator";

class TeamMembers extends Component {
  state = {
    showPopup: false,
    textareaValue: "",
    addBlockChainAlert: {},
    inviteMembersAlert: {},
  };

  componentDidMount = () => {
    this.props.getAllMembers(this.props.uuid);
  };

  handleInviteMembersOpen = () => {
    this.setState({ showPopup: true, inviteMembersAlert: {} });
  };

  handleInviteMembersClose = () => {
    this.setState({ showPopup: false, textareaValue: "" });
  };

  shouldInviteMembersBeEnabled = () => this.props.email === this.props.ownerEmail;

  onTextareaChange = event => {
    this.setState({ textareaValue: event.target.value });
  };

  handleSendInvitation = async () => {
    this.setState({ inviteMembersAlert: {} });

    const validateIfEmailAlreadyExists = emails => {
      let alreadyInvitedError;
      emails.forEach(email => {
        const trimmedEmail = email.trim();
        const isNotValid = validator.single(trimmedEmail, inviteEmailsConstraints.email);
        if (isNotValid) {
          throw new ValidationError(isNotValid[0]);
        }
        if (this.props.members[memberStatus.PENDING].find(el => el.username === trimmedEmail)) {
          return (alreadyInvitedError = invitationError[memberStatus.PENDING](email));
        } else if (this.props.members[memberStatus.VERIFIED].find(el => el.username === trimmedEmail)) {
          return (alreadyInvitedError = invitationError[memberStatus.VERIFIED](email));
        } else if (this.props.members[memberStatus.ACCEPTED].find(el => el.username === trimmedEmail)) {
          return (alreadyInvitedError = invitationError[memberStatus.ACCEPTED](email));
        } else if (this.props.members[memberStatus.PUBLISH_IN_PROGRESS].find(el => el.username === trimmedEmail)) {
          return (alreadyInvitedError = invitationError[memberStatus.PUBLISH_IN_PROGRESS](email));
        } else if (this.props.members[memberStatus.PUBLISHED].find(el => el.username === trimmedEmail)) {
          return (alreadyInvitedError = invitationError[memberStatus.PUBLISHED](email));
        }
      });
      if (alreadyInvitedError) {
        throw new ValidationError(alreadyInvitedError);
      }
    };

    try {
      const allEmails = this.state.textareaValue.split(",");
      validateIfEmailAlreadyExists(allEmails);
      await this.props.inviteMembers(allEmails, this.props.uuid);
      this.setState({
        inviteMembersAlert: { type: alertTypes.SUCCESS, message: "Members have been successfully invited" },
      });
      this.handleInviteMembersClose();
    } catch (error) {
      if (checkIfKnownError(error)) {
        return this.setState({ inviteMembersAlert: { type: alertTypes.ERROR, message: error.message } });
      }
      this.setState({
        inviteMembersAlert: { type: alertTypes.ERROR, message: "Something went wrong. Please try again later" },
      });
    }
  };

  handleAddToBlockChain = async () => {
    try {
      const { members, orgId, uuid, addAndPublishMembers } = this.props;
      await addAndPublishMembers(members[memberStatus.ACCEPTED], orgId, uuid);
      this.setState({
        addBlockChainAlert: { type: alertTypes.SUCCESS, message: "Members have been added to blockchain" },
      });
    } catch (error) {
      if (checkIfKnownError(error)) {
        return this.setState({ addBlockChainAlert: { type: alertTypes.ERROR, message: error.message } });
      }
      this.setState({
        addBlockChainAlert: { type: alertTypes.ERROR, message: "Something went wrong. Please try again later" },
      });
    }
  };

  shouldAddToBlockChainBeEnabled = () =>
    this.props.members[memberStatus.ACCEPTED].length > 0 ||
    this.props.email === this.props.ownerEmail ||
    this.props.orgStatus === "PUBLISHED";

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
              handleInviteMembersOpen={this.handleInviteMembersOpen}
              textareaValue={textareaValue}
              onTextareaChange={this.onTextareaChange}
              handleSendInvitation={this.handleSendInvitation}
              handleClose={this.handleInviteMembersClose}
              inviteMembersAlert={this.state.inviteMembersAlert}
              shouldInviteMembersBeEnabled={this.shouldInviteMembersBeEnabled}
            />
            <AcceptedMembers
              acceptedMembers={members[memberStatus.ACCEPTED]}
              handleAddToBlockChain={this.handleAddToBlockChain}
              addBlockChainAlert={this.state.addBlockChainAlert}
              shouldAddToBlockChainBeEnabled={this.shouldAddToBlockChainBeEnabled}
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
  orgId: state.organization.id,
  uuid: state.organization.uuid,
  members: state.organization.members,
  email: state.user.email,
  ownerEmail: state.organization.owner,
  orgStatus: state.organization.status,
});

const mapDispatchToProps = dispatch => ({
  getAllMembers: uuid => dispatch(inviteMembersActions.getAllMembers(uuid)),
  inviteMembers: (members, uuid) => dispatch(inviteMembersActions.inviteMembers(members, uuid)),
  addAndPublishMembers: (members, orgId, uuid) =>
    dispatch(inviteMembersActions.addAndPublishMembers(members, orgId, uuid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(TeamMembers));
