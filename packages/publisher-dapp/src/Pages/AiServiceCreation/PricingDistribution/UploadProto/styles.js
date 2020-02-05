import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(MUITheme => ({
  description: {
    margin: "16px 0 32px",
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "20px",
  },
  modelTextfieldContainer: { marginTop: 32 },
}));
