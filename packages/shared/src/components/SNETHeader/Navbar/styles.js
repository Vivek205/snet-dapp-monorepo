import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
  },
  navLink: {
    textDecoration: "none",
    color: MUITheme.palette.text.lightGrey,
  },
  navLinkActive: props => ({
    borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
    paddingBottom: 3,
    color: MUITheme.palette.primary.main,
    fontWeight: 600,
    "&: visited": {
      borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
  }),
}));
