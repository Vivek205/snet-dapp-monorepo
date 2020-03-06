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
}));
