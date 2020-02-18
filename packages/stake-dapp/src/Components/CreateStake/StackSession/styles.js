import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  StackSessionContainer: {
    borderRadius: 4,
    marginLeft: 23,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  header: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    "& h6": {
      padding: "0 22px",
      fontWeight: 400,
      lineHeight: "50px",
    },
  },
  cards: { padding: "30px 58px 11px" },
  checkboxContent: {
    padding: "0 33px 0 57px",
    display: "flex",
    alignItems: "flex-start",
    "& label": {
      width: "100%",
      display: "flex",
      alignItems: "flex-start",
      "& .MuiCheckbox-root": { paddingTop: 0 },
      "& > span": {
        color: "#4A4A4A",
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: "20px",
      },
    },
    "& p": {
      paddingLeft: 33,
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      letterSpacing: 0.25,
      lineHeight: "20px",
    },
    [MUITheme.breakpoints.down("xs")]: {
      flexDirection: "column",
      "& p": { paddingLeft: 0 },
    },
  },
  infoBox: {
    boxSizing: "border-box",
    padding: 12,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: MUITheme.palette.primary.main,
    borderRadius: 2,
    margin: "15px 33px 28px",
    display: "flex",
    backgroundColor: MUITheme.palette.background.infoBox,
    "& svg": {
      marginRight: 17,
      color: MUITheme.palette.primary.main,
      fontSize: 20,
    },
    "& p": {
      color: MUITheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "18px",
    },
  },
  btnContainer: {
    paddingBottom: 33,
    textAlign: "center",
  },
}));
