export const useStyles = MUITheme => ({
  submitContainer: {
    width: 845,
    margin: "48px auto 0",
    [MUITheme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "0 25px",
    },
  },
  box: {
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
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },
  wrapper: { padding: "21px 24px 42px" },
  submitDescription: {
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    lineHeight: "24px",
  },
  metamaskAddText: {
    padding: "31px 0 16px",
    color: MUITheme.palette.text.primary,
    fontSize: 16,
    letterSpacing: 0.29,
    lineHeight: "20px",
  },
  commentField: { padding: "50px 0 0" },
  btnContainer: {
    marginTop: 12,
    display: "flex",
    justifyContent: "center",
    "& button": {
      "&:last-of-type": {
        marginLeft: 30,
        [MUITheme.breakpoints.down("xs")]: {
          marginTop: 15,
          marginLeft: 0,
        },
      },
    },
    [MUITheme.breakpoints.down("xs")]: { flexDirection: "column" },
  },
});
