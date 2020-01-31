import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  number: {
    borderRadius: 25,
    padding: "4px 10px",
    marginRight: 8,
    backgroundColor: MUITheme.palette.text.lightGrey,
    color: MUITheme.palette.text.white,
    "@media(max-width:480px)": {
      padding: "4px 8px",
      fontSize: 12,
    },
  },
  TabTitle: {
    color: MUITheme.palette.lightGrey,
    fontSize: 14,
  },
  completedIcon: {
    "& svg": {
      color: MUITheme.palette.success,
      fontSize: 28,
      marginRight: 10,
      "@media(max-width:480px)": {
        padding: "0 !important",
        marginRight: "0 !important",
        fontSize: "21px !important",
      },
    },
    "@media(max-width:480px)": {
      padding: "0 !important",
      margin: 0,
    },
  },
  active: {
    "& span": {
      "&:first-of-type": { backgroundColor: MUITheme.palette.primary.main },
      "&:last-of-type": { color: MUITheme.palette.text.darkGrey },
    },
  },
  completed: {
    "&:last-of-type span": { color: MUITheme.palette.text.darkGrey },
  },
}));
