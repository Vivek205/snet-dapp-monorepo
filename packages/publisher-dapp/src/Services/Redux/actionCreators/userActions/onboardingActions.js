export const SET_USER_ENTITY = "SET_USER_ENTITY";
export const SET_USER_INVITEE_STATUS = "SET_USER_INVITEE_STATUS";

export const setUserEntity = value => ({ type: SET_USER_ENTITY, payload: value });

export const setUserInviteeStatus = value => ({ type: SET_USER_INVITEE_STATUS, payload: value });
