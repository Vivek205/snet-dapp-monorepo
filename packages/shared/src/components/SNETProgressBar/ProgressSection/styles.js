import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  numberContainer: {
    width: 28,
    borderRadius: 25,
    color: MUITheme.palette.text.white,
    lineHeight: "28px",
    "& span": {
      "&::after": {
        content: '""',
        width: 150,
        height: 1,
        margin: "15px 0px 0px 15px",
        zIndex: -1,
        display: "inline-block",
        position: "absolute",
        backgroundColor: MUITheme.palette.background.grey,
        "@media (max-width:660px)": { width: "18%" },
        "@media (max-width:540px)": {
          width: "16%",
          marginTop: 11,
        },
        "@media (max-width:470px)": { display: "none" },
      },
    },
  },
  TabTitle: {
    paddingTop: 10,
    color: MUITheme.palette.text.lightGrey,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 14,
    letterSpacing: 0.13,
  },
  number: {
    width: 28,
    borderRadius: 25,
    backgroundColor: MUITheme.palette.text.lightGrey,
    color: MUITheme.palette.text.white,
    lineHeight: "28px",
    "& span": {
      "&::after": {
        content: '""',
        width: 20,
        height: 1,
        margin: "15px 0px 0px 15px",
        zIndex: -1,
        display: "inline-block",
        position: "absolute",
        backgroundColor: MUITheme.palette.background.grey,
        "@media (max-width:660px)": { width: "18%" },
        "@media (max-width:540px)": {
          width: "16%",
          marginTop: 11,
        },
        "@media (max-width:470px)": { display: "none" },
      },
    },
  },
  errorIcon: {
    "&::after": { marginLeft: "10px !important" },
    "& svg": {
      padding: 3,
      borderRadius: 25,
      background: MUITheme.palette.error.light,
      color: MUITheme.palette.error.white,
      fontSize: 22,
    },
    "@media(max-width:480px)": { padding: "0 !important" },
  },
  completedIcon: {
    "&::after": { marginLeft: "10px !important" },
    "& svg": {
      padding: 3,
      borderRadius: 25,
      background: MUITheme.palette.success.main,
      color: MUITheme.palette.text.white,
      fontSize: 22,
    },
    "@media(max-width:480px)": { padding: "0 !important" },
  },
  pendingIcon: {
    "&::after": { marginLeft: "10px !important" },
    "& svg": {
      padding: 3,
      borderRadius: 25,
      background: MUITheme.palette.warning.light,
      color: MUITheme.palette.text.white,
      fontSize: 22,
    },
    "@media(max-width:480px)": { padding: "0 !important" },
  },
  active: {
    "& div": {
      backgroundColor: MUITheme.palette.primary.main,
      "& span": {
        color: MUITheme.palette.text.white,
      },
    },
    "& > span": { color: MUITheme.palette.text.darkGrey },
  },
  completed: {
    "& > div": { background: "transparent" },
    "& span": {
      "&:last-of-type": {
        paddingTop: 0,
        color: MUITheme.palette.text.darkGrey,
      },
    },
  },
  clickableSection: {
    cursor: "pointer",
  },
}));
