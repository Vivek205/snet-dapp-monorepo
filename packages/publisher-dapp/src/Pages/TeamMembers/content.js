import InviteTeam from "shared/dist/assets/images/inviteTeam.png";
import { memberStatus } from "../../Utils/TeamMembers";

export const TopSectionContent = {
  title: "Team Members & Permissions",
  description:
    "Your fellow collaborators can help you set up the technical stuff and manage the AI service.  Everything is faster and better with teamwork.  Once your collaborators accept your invite, you will be able to add them to the company blockchain for access.",
  media: InviteTeam,
};

export const invitationError = {
  [memberStatus.PENDING]: email => `${email} has been invited already`,
  [memberStatus.VERIFIED]: email => `${email} has been invited already`,
  [memberStatus.ACCEPTED]: email => `${email} has accepted the invite. Waiting for you to publish to blockchain`,
  [memberStatus.PUBLISH_IN_PROGRESS]: email => `${email} is being published to blockchain`,
  [memberStatus.PUBLISHED]: email => `${email} is already a part of the team`,
};
