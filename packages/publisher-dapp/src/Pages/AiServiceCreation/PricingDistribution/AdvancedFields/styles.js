import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(MUITheme => ({
  advFilesContainer: { marginTop: 72 },
  description: {
    margin: "16px 0 21px",
    color: MUITheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "20px",
  },
}));
