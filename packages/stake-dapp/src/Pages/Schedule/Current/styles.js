export const useStyles = MUITheme => ({
  currentMainContainer: {
    width: "84%",
    margin: "32px auto 0",
  },
  activeSessionContainer: {
    "& > span": {
      color: MUITheme.palette.text.darkGrey,
      fontFamily: MUITheme.typography.fontFamily,
      fontSize: 20,
      fontWight: 600,
      letterSpacing: 0,
      lineHeight: "25px",
    },
  },
  activeSessionBox: {
    padding: "24px 40px",
    border: "3px solid #00C48C",
    borderRadius: 4,
    margin: "24px 0 64px",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  activeSessionDetails: {
    "& > span": {
      fontFamily: MUITheme.typography.fontFamily,
      "&:first-of-type": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 24,
        fontWeight: 600,
        letterSpacing: 0,
        lineHeight: "50px",
      },
      "&:last-of-type": {
        padding: "0 7px",
        borderRadius: 4,
        marginLeft: 12,
        color: MUITheme.palette.text.white,
        backgroundColor: MUITheme.palette.success.main,
        fontSize: 14,
        fontStyle: "italic",
        fontWeight: 800,
        letterSpacing: 0.25,
        lineHeight: "18px",
        textTransform: "uppercase",
      },
    },
    "& > div": {
      paddingTop: 24,
      display: "flex",
      "& > div": {
        "&:first-of-type": { marginRight: 73 },
        "& > p": {
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontFamily: MUITheme.typography.fontFamily,
          "& svg": {
            marginRight: 5,
            color: MUITheme.palette.text.disabled,
            fontSize: 16,
          },
          "&:first-of-type": {
            marginBottom: 4,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 16,
            letterSpacing: 0,
            lineHeight: "20px",
          },
          "&:last-of-type": {
            color: MUITheme.palette.text.darkGrey,
            fontSize: 18,
            letterSpacing: 0,
            lineHeight: "22px",
            "& span": {
              paddingLeft: 5,
              color: MUITheme.palette.text.lightGrey,
              fontSize: 14,
              letterSpacing: 0,
              lineHeight: "18px",
            },
          },
        },
      },
    },
  },
  activeSessionBtnContainer: {
    textAlign: "right",
    "& button": {
      padding: "16px 66px",
    },
  },
});
