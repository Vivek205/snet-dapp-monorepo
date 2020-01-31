export const useStyles = MUITheme => ({
  profileContainer: {
    width: 845,
    paddingBottom: 144,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  box: {
    paddingBottom: 33,
    borderRadius: 4,
    marginBottom: 27,
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    "& > h6": {
      padding: "0 23px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      lineHeight: "50px !important",
    },
  },
  description: {
    padding: "0 23px",
    margin: "7px 0 34px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "21px",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
});
