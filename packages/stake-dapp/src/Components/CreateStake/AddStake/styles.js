import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  Modal: { overflow: "auto" },
  card: {
    width: 720,
    paddingBottom: 29,
    margin: "0px auto 80px	",
    transform: "translateY(25%)",
    "@media(max-width:800px)": {
      width: "auto",
      margin: "0 25px",
    },
  },
  CardHeader: { padding: "5px 22px" },
  CardContent: { padding: 0 },
  sessionDetails: {
    padding: "16px 22px",
    display: "flex",
    background: MUITheme.palette.background.mainContent,
    "& > p": {
      fontSize: 16,
      lineHeight: "20px",
      "&:first-of-type": { color: MUITheme.palette.text.darkGrey },
      "&:last-of-type": { color: MUITheme.palette.text.primary },
    },
  },
  addStakeTextfieldSection: {
    borderBottom: "1px solid #e2e2e2",
    margin: "24px 23px 24px 21px",
    display: "flex",
    alignItems: "flex-start",
    "& > div": {
      width: 302,
      "& > div": {
        maxWidth: "100%",
        flexBasis: "100%",
        "& .MuiTextField-root": { marginTop: 0 },
      },
    },
    "& svg": {
      padding: "15px 25px 0",
      color: MUITheme.palette.text.disabled,
      fontSize: 25,
      [MUITheme.breakpoints.down("xs")]: { padding: "15px 10px 0" },
      "@media(max-width: 480px)": { display: "none" },
    },
    "@media(max-width: 480px)": { flexDirection: "column" },
  },
  stakeAmtDetailsContainer: {
    padding: "0 27px",
    display: "flex",
    flexWrap: "wrap",
    "& > div": {
      "&:nth-child(2n)": {
        paddingLeft: 31,
        "@media(max-width:800px)": { paddingLeft: 0 },
      },
    },
    "@media(max-width:800px)": {
      flexDirection: "column",
    },
  },
  stakeAmtDetail: {
    width: 317,
    marginBottom: 8,
    display: "flex",
  },
  iconTitleContainer: {
    display: "flex",
    "& svg": {
      marginRight: 8,
      color: MUITheme.palette.text.lightGrey,
      fontSize: 20,
    },
  },
  title: {
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "20px",
  },
  value: {
    boxSizing: "border-box",
    maxWidth: 181,
    width: "100%",
    border: "1px solid #E2E2E2",
    borderRadius: 4,
    marginLeft: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      "&:first-of-type": {
        fontSize: 16,
        lineHeight: "20px",
      },
      "&:last-of-type": {
        paddingLeft: 5,
        fontSize: 12,
        lineHeight: "15px",
      },
    },
  },
  alertBoxContainer: {
    padding: "24px 31px 11px",
    "& > p": {
      "&:first-of-type": {
        margin: 0,
        display: "flex",
        "& svg": {
          color: MUITheme.palette.primary.main,
          fontSize: 20,
        },
      },
      "&:last-of-type": { marginTop: 8 },
    },
  },
  infoAlertMessage: {
    paddingLeft: 17,
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "18px",
  },
  CardActions: { justifyContent: "center" },
}));
