export const useStyles = MUITheme => ({
  overiewMainContainer: {
    "& h2": { marginBottom: 32 },
    "& ul": {
      padding: 0,
      marginTop: 32,
    },
    "& li": {
      padding: 0,
      marginBottom: 16,
      alignItems: "flex-start",
      "&:last-of-type": { marginBottom: 0 },
    },
    "& .MuiListItemText-root": {
      margin: 0,
      "& span": {
        color: MUITheme.palette.text.primary,
        fontSize: 16,
        lineHeight: "24px",
      },
    },
    "& .MuiListItemIcon-root": { minWidth: "auto" },
    "& button, & a": { marginTop: 32 },
    "& img": { width: "100%" },
  },
});
