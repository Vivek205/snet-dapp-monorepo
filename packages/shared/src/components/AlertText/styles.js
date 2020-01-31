import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MuiTheme => ({
  errorMsg: { margin: 0 },
  error: { color: MuiTheme.palette.error.main },
  success: { color: MuiTheme.palette.success },
  warning: { color: MuiTheme.palette.text.warningBorder },
  info: { color: MuiTheme.palette.primary.main },
}));
