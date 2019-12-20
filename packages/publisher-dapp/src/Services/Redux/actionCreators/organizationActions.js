export const SET_ONE_BASIC_DETAIL = "SET_ONE_BASIC_DETAIL";

export const setOneBasicDetail = (name, value) => ({ type: SET_ONE_BASIC_DETAIL, payload: { [name]: value } });
