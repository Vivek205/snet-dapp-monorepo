import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  sessionTimeContainer: {
    borderRadius: 4,
    marginBottom: 28,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  header: {
    padding: "0 18px 0 22px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& h6": {
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  content: {
    padding: "17px 44px 0",
    textAlign: "center",
    "& h6": {
      fontWeight: 600,
      lineHeight: "23px",
    },
  },
  time: {
    padding: "29px 0 46px",
    display: "flex",
    justifyContent: "center",
    "& div": {
      paddingRight: 35,
      "&:last-of-type": { paddingRight: 0 },
    },
  },
  number: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 28,
    lineHeight: "35px",
  },
  title: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    lineHeight: "20px",
    textTransform: "uppercase",
  },
  closingTime: {
    paddingBottom: 33,
    fontSize: 16,
    lineHeight: "20px",
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    "& label": {
      "& svg": { width: 22 },
      "& > span": {
        color: MUITheme.palette.text.primary,
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: "20px",
      },
    },
  },
  toolTipContainer: {
    "& > svg": {
      paddingRight: 14,
      color: MUITheme.palette.text.disabled,
      cursor: "pointer",
      fontSize: 18,
      verticalAlign: "middle",
    },
    "& p": {
      width: 377,
      padding: 16,
      borderRadius: 4,
      display: "none",
      position: "absolute",
      bottom: 45,
      left: "50%",
      background: MUITheme.palette.text.lightGrey,
      boxShadow: "0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)",
      color: MUITheme.palette.text.white,
      fontSize: 16,
      lineHeight: "20px",
      transform: "translateX(-50%)",
    },
    "&:hover": {
      "& svg": { color: MUITheme.palette.primary.main },
      "& p": { display: "block" },
    },
  },
}));
