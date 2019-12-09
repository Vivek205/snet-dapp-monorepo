import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => {
  const navLinkColor = {
    white: MUITheme.palette.text.disabled,
    purple: MUITheme.typography.body1.color,
  };

  const navLinkActiveColor = {
    white: MUITheme.palette.primary.main,
    purple: MUITheme.palette.text.secondary,
  };

  return {
    navlist: {
      padding: 0,
      margin: 0,
      display: "flex",
    },
    navLink: props => ({
      textDecoration: "none",
      color: navLinkColor[props.headerColor],
      "&:hover": {
        color: navLinkActiveColor[props.headerColor],
      },
    }),
    navLinkActive: props => ({
      borderBottom: `2px solid ${navLinkActiveColor[props.headerColor]}`,
      paddingBottom: 3,
      color: navLinkActiveColor[props.headerColor],
      "&: visited": {
        borderBottom: `2px solid ${navLinkActiveColor[props.headerColor]}`,
        paddingBottom: 3,
        color: navLinkActiveColor[props.headerColor],
      },
    }),
  };
});
