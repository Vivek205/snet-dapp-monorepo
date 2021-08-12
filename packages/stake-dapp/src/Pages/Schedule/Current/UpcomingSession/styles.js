export const useStyles = MUITheme => ({
  headingText: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: "25px",
  },
  upcomingSessionContainer: {
    marginTop: 64,
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      "& li": {
        boxSizing: "border-box",
        width: 248,
        borderRadius: 4,
        margin: "24px 24px 0 0",
        display: "inline-block",
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
          boxShadow: "none",
          "& > span": {
            color: MUITheme.palette.text.primary,
            fontSize: 14,
            fontStyle: "italic",
            fontWeight: 300,
            letterSpacing: 0.25,
            lineHeight: "18px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        },
        "&:nth-child(4n)": {
          marginRight: 0,
          position: "relative",
          "@media(max-width:1140px)": { marginRight: 24 },
        },
      },
      "@media(max-width:1140px)": { justifyContent: "center" },
    },
  },
  activeUpcomingSessionDetails: {
    backgroundColor: MUITheme.palette.primary.main,
    color: MUITheme.palette.text.white,
    "&::after": {
      border: "1px solid red",
    },
    "& svg": { color: "#BFD6FF !important" },
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
        paddingRight: 11,
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
    "& > div": {
      marginTop: 4,
      "& > div": {
        padding: 0,
        justifyContent: "space-between",
        "& > div": {
          padding: 0,
          display: "flex",
          alignItems: "flex-end",
          "& p": {
            "&:first-of-type": {
              color: MUITheme.palette.text.white,
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "20px",
            },
            "&:last-of-type": {
              paddingLeft: 4,
              color: "#BFD6FF",
              fontSize: 12,
              fontWeight: 300,
              lineHeight: "15px",
            },
          },
        },
      },
    },
  },
  noUpcomingSessionTxt: {
    marginTop: 50,
    display: "block",
    color: "#666",
    fontStyle: "italic",
    fontSize: 24,
    fontWeight: 200,
    lineHeight: "30px",
    textAlign: "center",
  },
  addBorder: {
    border: "1px solid #6AA0FE",
    padding: "22px 24px 21px 21px",
    margin: 2,
    borderRadius: 4,
  },
  addPadding: {
    padding: "22px 24px 21px 21px",
  },
});
