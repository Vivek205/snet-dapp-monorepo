import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  noMetamaskConnectedContainer: {
    textAlign: "center",
    "& img": { width: 300 },
  },
  noMetamaskTitle: {
    color: MUITheme.palette.text.primary,
    fontSize: 24,
    fontWeight: 200,
    letterSpacing: 0,
    lineHeight: "30px",
  },
  noMetamaskDesc: {
    margin: "15px 0 24px",
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    fontWeight: 300,
    letterSpacing: 0,
    lineHeight: "20px",
    "& span": { display: "block" },
    "& a": {
      color: MUITheme.palette.primary.main,
      textDecoration: "none",
    },
  },
}));
