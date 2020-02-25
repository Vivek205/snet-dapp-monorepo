export const useStyles = MUITheme => ({
  individualStatusContainer: {
    boxSizing: "content-box",
    width: 845,
    margin: "0 auto",
    padding: "40px",
    [MUITheme.breakpoints.down("sm")]: { width: "auto" },
  },
  description: {
    "& p": {
      marginTop: 8,
      color: MUITheme.palette.text.darkGrey,
      fontSize: 22,
      fontWeight: 200,
      lineHeight: "28px",
    },
  },
});
