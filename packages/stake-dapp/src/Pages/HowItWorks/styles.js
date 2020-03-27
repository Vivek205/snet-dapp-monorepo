export const useStyles = MUITheme => ({
  howItWorksContainer: { backgroundColor: MUITheme.palette.background.mainContent },
  // Benefits Styling
  benefitsContainer: {
    padding: "64px 60px",
    display: "flex",
    [MUITheme.breakpoints.down("md")]: { padding: "64px 15px" },
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },
  benefitsMedia: {
    textAlign: "center",
    "& img": {
      [MUITheme.breakpoints.down("xs")]: { width: "100%" },
    },
  },
  benefitsContent: {
    "& h2": {
      [MUITheme.breakpoints.down("sm")]: { paddingTop: 15 },
    },
    "& ul": {
      padding: 0,
      margin: "32px 0",
      "& li": {
        paddingBottom: 24,
        display: "flex",
        listStyle: "none",
        "& svg": {
          paddingTop: 2,
          color: MUITheme.palette.success.main,
          fontSize: 20,
        },
        "& div": {
          paddingLeft: 16,
          "& p": {
            display: "inline",
            fontSize: 16,
            lineHeight: "24px",
            "&:first-of-type": {
              color: MUITheme.palette.text.darkGrey,
              fontWeight: 600,
            },
            "&:last-of-type": { color: MUITheme.palette.text.primary },
          },
        },
        "&:last-of-type": { paddingBottom: 0 },
      },
      [MUITheme.breakpoints.down("sm")]: { margin: "15px 0" },
    },
    "& button": { padding: "13px 98px 11px" },
  },

  // SignUp container
  signUpContainer: {
    padding: "71px 64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    "& h2": { textAlign: "left" },
    "& p": {
      padding: "32px 0",
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      lineHeight: "24px",
      textAlign: "left",
    },
    "& form": {
      display: "flex",
      [MUITheme.breakpoints.down("sm")]: { marginTop: 25 },
    },
    "& input": {
      boxSizing: "border-box",
      width: 365,
      padding: "0 15px",
      border: "1px solid #979797",
      borderRadius: 2,
      marginRight: 8,
      "@media(max-width: 480px)": { width: "100%" },
    },
    "& button": { padding: "19px 33px 17px" },
    "& img": {
      width: 478,
      "@media(max-width: 1098px)": { width: "100%" },
    },
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },

  // How It Works
  howItWorksSection: {
    padding: "64px 14% 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& button": { margin: "32px 0 63px" },
    "& img": {
      [MUITheme.breakpoints.down("sm")]: { width: "100%" },
    },
    [MUITheme.breakpoints.down("sm")]: { padding: "34px 15px" },
  },
  howItWorksDesc: {
    width: 738,
    padding: "32px 0",
    color: "#616161",
    fontSize: 18,
    lineHeight: "28px",
    [MUITheme.breakpoints.down("sm")]: { width: "100%" },
  },

  // Titles
  titlesContainer: {
    "& ul": {
      padding: "0 25px 64px",
      margin: 0,
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      "& li": {
        boxSizing: "border-box",
        width: 410,
        padding: "34px 22px 33px",
        borderRadius: 4,
        marginRight: 24,
        backgroundColor: MUITheme.palette.background.white,
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.14), 0 1px 3px 0 rgba(0,0,0,0.2)",
        listStyle: "none",
        "& img": { width: 96 },
        "& h4": {
          padding: "32px 0 17px",
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
