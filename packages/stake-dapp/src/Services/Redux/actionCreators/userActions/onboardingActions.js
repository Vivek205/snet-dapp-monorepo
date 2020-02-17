export const SET_USER_ENTITY = "SET_USER_ENTITY";
export const SET_USER_INVITEE_STATUS = "SET_USER_INVITEE_STATUS";
export const SET_USER_INVITE_CODE = "SET_USER_INVITE_CODE";

export const setUserEntity = value => ({ type: SET_USER_ENTITY, payload: value });

export const setUserInviteeStatus = value => ({ type: SET_USER_INVITEE_STATUS, payload: value });

export const setUserInviteCode = value => ({ type: SET_USER_INVITE_CODE, payload: value });
