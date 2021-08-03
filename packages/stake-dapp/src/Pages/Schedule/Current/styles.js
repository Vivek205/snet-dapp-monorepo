export const useStyles = MUITheme => ({
  currentMainContainer: {
    width: "84%",
    margin: "32px auto 0",
    fontFamily: MUITheme.typography.fontFamily,
  },
  headingText: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "25px",
  },
  activeSessionBox: {
    padding: "24px 40px",
    border: "3px solid #00C48C",
    borderRadius: 4,
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    backgroundColor: MUITheme.palette.primary.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  activeSessionDetails: {
    "& > span": {
      "&:first-of-type": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 24,
        fontWeight: 600,
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
          "& svg": {
            marginRight: 5,
            color: MUITheme.palette.text.disabled,
            fontSize: 16,
          },
          "&:first-of-type": {
            marginBottom: 4,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 16,
            lineHeight: "20px",
          },
          "&:last-of-type": {
            color: MUITheme.palette.text.darkGrey,
            fontSize: 18,
            lineHeight: "22px",
            "& span": {
              paddingLeft: 5,
              color: MUITheme.palette.text.lightGrey,
              fontSize: 14,
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
  noActiveSessionContainer: {
    textAlign: "center",
    "& span": {
      paddingTop: 15,
      display: "block",
      color: MUITheme.palette.text.primary,
      fontSize: 24,
      fontWeight: 200,
      lineHeight: "30px",
    },
  },
  upcomingSessionContainer: {
    marginTop: 64,
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      flexWrap: "wrap",
      "& li": {
        padding: "22px 20px 21px 21px",
        borderRadius: 4,
        margin: "24px 3.89% 0 0",
        backgroundColor: MUITheme.palette.primary.white,
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
        listStyle: "none",
        textAlign: "center",
        "& > span": {
          fontSize: 24,
          fontWeight: 600,
          lineHeight: "24px",
        },
        "&:last-of-type": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          boxShadow: "none",
          backgroundColor: "transparent",
          "& > span": {
            color: MUITheme.palette.text.primary,
            fontSize: 14,
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: 0.25,
            lineHeight: "18px",
          },
        },
      },
    },
  },
  activeUpcomingSessionDetails: {
    border: "1px solid #6AA0FE",
    backgroundColor: MUITheme.palette.primary.main,
    color: MUITheme.palette.text.white,
  },
  upcomingSessionDetails: {
    color: MUITheme.palette.text.primary,
    "& > div": {
      color: "#222",
    },
  },
  stakeDateTimeDetails: {
    padding: "32px 0",
    "& p": {
      paddingBottom: 4,
      borderBottom: "1px solid #ccc",
      margin: 0,
      display: "flex",
      alignItems: "center",
      fontSize: 26,
      fontWeight: "bold",
      lineHeight: "33px",
      "& svg": {
        paddingRight: 13,
        color: MUITheme.palette.border.secondary,
      },
    },
    "& span": {
      paddingTop: 4,
      display: "inline-block",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: "20px",
    },
  },
  sessionOpeningTime: {
    "& p": {
      margin: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#BFD6FF",
      fontSize: 13,
      lineHeight: "16px",
      "& svg": {
        paddingRight: 7,
        color: "#BFD6FF",
        fontSize: 13,
      },
    },
  },
  dhmsContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      marginTop: 4,
      "& span": {
        "&:first-of-type": {
          color: MUITheme.palette.text.white,
          fontSize: 16,
          fontWeight: 600,
          lineHeight: "20px",
        },
        "&:last-of-type": {
          color: "#BFD6FF",
          fontSize: 12,
          fontWeight: 300,
          lineHeight: "15px",
        },
      },
    },
  },
});
