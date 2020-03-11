import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
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
  countDownValue: {
    color: MUITheme.palette.text.white,
    fontSize: 50,
    fontWeight: 200,
    lineHeight: "38px",
    "@media(max-width:480px)": { fontSize: 42 },
  },
  countDownUnit: {
    paddingTop: 20,
    color: MUITheme.palette.text.white,
    fontSize: 14,
    fontWeight: 200,
    lineHeight: "14px",
    textTransform: "uppercase",
    "@media(max-width:480px)": { fontSize: 12 },
  },
  countDown: {
    display: "flex",
    "& > div": {
      padding: "0 31px",
      borderRightWidth: 0.5,
      borderRightStyle: "solid",
      borderRightColor: MUITheme.palette.text.white,
      textAlign: "center",
      "&:first-of-type": { paddingLeft: 0 },
      "&:last-of-type": {
        paddingRight: 0,
        borderRight: "none",
      },
      "@media(max-width:480px)": { padding: "0 15px" },
    },
  },
}));
