import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(MUITheme => ({
  circularProgressContainer: {
    paddingTop: 20,
    textAlign: "center",
    height: 500,
    display: "table",
    width: "100%",
    "& div": {
      color: MUITheme.palette.text.primary,
    },
  },
  loaderChild: {
    display: "table-cell",
    verticalAlign: "middle",
    margin: "0 auto",
  },
  circularProgress: {
    display: "inline-block",
    width: 48,
    height: 48,
  },
  loaderText: {
    color: MUITheme.palette.text.lightShadedGray,
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: 0.25,
  },
}));
