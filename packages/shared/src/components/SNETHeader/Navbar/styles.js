import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
  },
  navLink: {
    textDecoration: "none",
    color: MUITheme.palette.text.disabled,
  },
  navLinkActive: props => ({
    borderBottom: `1px solid ${MUITheme.palette.primary.main}`,
    paddingBottom: 3,
    color: MUITheme.palette.primary.main,
    "&: visited": {
      borderBottom: `1px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
    },
  }),
}));
