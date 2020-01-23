export const useStyles = MUITheme => ({
  technicalInfoContainer: {
    padding: "31px 0 0",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    borderTopColor: MUITheme.palette.border.grey,
    margin: "31px 24px 0",
    "& h6": {
      padding: "0 !important",
      border: "none !important",
      fontWeight: "normal",
      lineHeight: "23px",
    },
  },
  technicalInfo: {
    alignItems: "center",
    [MUITheme.breakpoints.down("sm")]: { marginBottom: 25 },
  },
  btnContainer: {
    paddingLeft: 30,
    marginBottom: 15,
    [MUITheme.breakpoints.down("sm")]: {
      paddingLeft: 0,
      marginBottom: 0,
    },
  },
  owmnerMMTextfield: {
    "& div": {
      "& div": {
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
  },
});
