export const useStyles = MUITheme => ({
  configTitle: {
    marginTop: 16,
    border: "none !important",
    fontWeight: "normal",
  },
  configFooter: {
    marginTop: 16,
    border: "none !important",
    color: MUITheme.palette.text.primary,

    fontWeight: "normal",
  },
  configList: {
    "& li": {
      paddingLeft: 10,
      paddingBottom: 5,
      listStyleType: "none",
    },
    "& strong": {
      fontWeight: "normal",
      color: MUITheme.palette.text.darkGrey,
      paddingRight: 10,
      "&::after": {
        content: `":"`,
      },
    },
    "& span": {
      color: MUITheme.palette.text.lightGrey,
    },
  },
  configBtnContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  alertText: {
    paddingTop: 5,
    lineHeight: 2,
  },
  grayBox: {
    padding: "6px 16px 6px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
  },
});
