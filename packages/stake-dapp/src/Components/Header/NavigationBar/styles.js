import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  navigationLinks: {
    paddingTop: 10,
    marginLeft: 170,
  },
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
    "& li": {
      width: "auto",
      padding: 0,
      marginRight: 25,
    },
  },
  navLink: {
    paddingBottom: 8,
    textDecoration: "none",
    color: MUITheme.palette.text.lightGrey,
    fontFamily: MUITheme.typography.fontFamily,
  },
  navLinkActive: {
    borderBottom: `1.5px solid ${MUITheme.palette.text.white}`,
    paddingBottom: 7,
    color: MUITheme.palette.text.white,
    "&: visited": {
      borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
  },
  headerDropDown: {
    "& > div": {
      display: "flex",
      alignItems: "flex-start",
    },
    "& button": {
      padding: 0,
      "& span": {
        paddingBottom: 8,
        color: MUITheme.palette.text.lightGrey,
        fontSize: 16,
        "&:hover": { color: MUITheme.palette.primary.main },
      },
    },
    "& svg": {
      paddingTop: 2,
      color: MUITheme.palette.text.lightGrey,
      "&:hover": { color: MUITheme.palette.primary.main },
    },
  },
}));
