import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(MUITheme => ({
  description: {
    margin: "7px 0 15px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "21px",
  },
}));
