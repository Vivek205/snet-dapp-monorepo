import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  container: {
    width: 845,
    paddingBottom: 144,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 30px 100px",
    },
  },
  box: {
    paddingBottom: 33,
    borderRadius: 4,
    marginBottom: 27,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& > h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
    "& .MuiTypography-subtitle1": { fontWeight: "normal" },
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  wrapper: {
    padding: "0 22px",
    "& .MuiTextField-root + span": {
      marginBottom: 0,
    },
  },
  description: {
    margin: "7px 0 15px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "21px",
  },
}));
