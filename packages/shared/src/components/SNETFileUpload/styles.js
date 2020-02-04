import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  grayBox: {
    padding: "24px 16px 36px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
  },
  title: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0.25,
    lineHeight: "20px",
  },
  value: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: "20px",
  },
  uploadStatusContainer: {
    display: "flex",
    fontSize: 18,
    lineHeight: "23px",
    "& svg": {
      color: "#6D7278",
      fontSize: 41,
    },
    "& p": {
      marginLeft: 10,
      color: "rgba(0,0,0,0.25)",
    },
  },
  successfullUpload: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      color: MUITheme.palette.success,
      fontSize: 41,
    },
    "& p": {
      marginLeft: 10,
      color: MUITheme.palette.success,
    },
  },
  imgUploaderContainer: {
    display: "flex",
    "& > div": {
      "&:first-of-type": {
        width: 377,
        [MUITheme.breakpoints.down("sm")]: { width: "100%" },
      },
    },
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },
  uploadDetails: {
    paddingTop: 60,
    marginLeft: 27,
    "& > div": { marginBottom: 8 },
    [MUITheme.breakpoints.down("sm")]: { paddingTop: 25 },
  },
}));
