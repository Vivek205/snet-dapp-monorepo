export const useStyles = MUITheme => ({
  faqContainer: {
    "& h2": {
      padding: "52px 82px 32px",
      lineHeight: "48px",
    },
  },
  appBar: {
    paddingLeft: 168,
    background: MUITheme.palette.background.mainContent,
    boxShadow: "none",
    "& .MuiTab-wrapper": {
      padding: "27px 0",
      "& p": {
        margin: 0,
        "& span": { display: "block" },
      },
    },
  },
  tab: {
    width: 194,
    borderRadius: 4,
    marginRight: 24,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
    color: MUITheme.palette.text.darkGrey,
    fontSize: 20,
    lineHeight: "25px",
    textTransform: "capitalize",
    "&:first-of-type img": { width: 45 },
    "& img": {
      width: 70,
      marginBottom: 0,
    },
  },
  accordionContainer: {
    padding: "32px 14% 0",
  },
  // Learn and Share Community
  learnAndShareContainer: {
    "& h2": { textAlign: "center" },
    "& ul": {
      padding: "0 25px 64px",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      "& li": {
        boxSizing: "border-box",
        width: 330,
        padding: "34px 22px 33px",
        borderRadius: 4,
        marginRight: 24,
        backgroundColor: MUITheme.palette.background.white,
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
        cursor: "pointer",
        listStyle: "none",
        "&:hover": {
          "& h6": { color: MUITheme.palette.primary.main },
        },
        "& img": { width: 96 },
        "& h6": {
          padding: "30px 0 26px",
          fontWeight: "normal",
        },
        "& p": {
          color: MUITheme.palette.text.primary,
          fontSize: 16,
          lineHeight: "21px",
        },
        "&:last-of-type": {
          marginRight: 0,
          [MUITheme.breakpoints.down("sm")]: { marginBottom: 0 },
        },
        [MUITheme.breakpoints.down("xs")]: { margin: "0 0 25px 0" },
        "@media(max-width: 420px)": { width: "100%" },
      },
      [MUITheme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
  },
});
