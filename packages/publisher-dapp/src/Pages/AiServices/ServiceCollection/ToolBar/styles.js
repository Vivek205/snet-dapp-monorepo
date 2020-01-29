import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles(MUITheme => ({
  toolBar: {
    padding: "0 0 10px",
    "@media(max-width: 1023px)": { marginTop: 30 },
    "@media(max-width: 768px)": {
      padding: "10px 15px",
      marginTop: 0,
    },
    "@media(max-width: 480px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
    },
  },
  sortBySection: {
    display: "flex",
    alignItems: "baseline",
    "& svg": {
      color: MUITheme.palette.primary.main,
      right: "0 !important",
    },
    "& fieldset": { display: "none" },
    "& .MuiSelect-selectMenu": { color: MUITheme.palette.primary.main },
  },
  sortbyTxt: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
  },
  servicesCount: {
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    "&::after": {
      content: "' '",
      width: 2,
      height: 15,
      marginLeft: 10,
      display: "inline-block",
      backgroundColor: MUITheme.palette.text.lightGrey,
      verticalAlign: "middle",
      "@media(max-width: 480px)": { display: "none" },
    },
  },
  searchBar: {
    "& div": {
      color: MUITheme.palette.text.primary,
      "&::after": { borderBottomColor: "#9b9b9b !important" },
    },
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    "& button": {
      border: "none",
      paddingLeft: 19,
      backgroundColor: "transparent",
      outline: "none",
      cursor: "pointer",
      "& span": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 17,
      },
    },
    "@media(max-width: 480px)": {
      width: "100%",
      marginBottom: 15,
      justifyContent: "space-between",
    },
  },
}));
