export const useStyles = MUITheme => ({
  scheduleMainContainer: {
    backgroundColor: MUITheme.palette.background.mainContent,
  },
  scheduleWrapper: {
    padding: "0 62px",
    "& > p": {
      padding: "52px 20px 32px",
      color: MUITheme.palette.text.darkGrey,
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: -0.5,
      lineHeight: "48px",
    },
  },
  // tabs styling
  appBar: {
    padding: "0 22px 0",
    borderBottom: "1px solid #E2E2E2",
    display: "flex",
    backgroundColor: "transparent",
    boxShadow: "none",
    "& .MuiTabs-indicator": { display: "none" },
  },
  tabsContainer: {
    "& .MuiTabs-scrollable": {
      "& > span": {
        height: 4,
        backgroundColor: "#4086ff !important",
      },
    },
  },
  tab: {
    minWidth: "auto",
    padding: 0,
    marginRight: 45,
    color: MUITheme.palette.text.lightGrey,
    fontFamily: MUITheme.typography.fontFamily,
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: "25px",
    textAlign: "center",
    textTransform: "capitalize",
    "&:last-of-type": { marginRight: 0 },
    "&.MuiTab-textColorPrimary.Mui-selected": {
      borderBottom: "2px solid #4086ff",
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
    "&:hover": {
      color: MUITheme.palette.text.primary,
      fontWeight: 600,
    },
  },
  // SignUp container
  signUpContainer: {
    padding: "51px 0",
    marginTop: 64,
    backgroundColor: "#f1f1f1",
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
      alignItems: "center",
      "& > div": {
        width: 370,
        marginRight: 24,
        "& > div": {
          maxWidth: "100%",
          flexBasis: "100%",
          "& .MuiFormControl-marginNormal": { margin: 0 },
        },
        "& label": {
          color: MUITheme.palette.text.lightGrey,
          fontSize: 16,
          letterSpacinng: 0,
          lineHeight: "20px",
        },
        "& .MuiInputLabel-formControl": { top: -5 },
        "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(25,25,25,0.32)" },
        "@media(max-width: 420px)": { marginRight: 0 },
      },
      "@media(max-width: 420px)": { flexDirection: "column" },
      [MUITheme.breakpoints.down("sm")]: { marginTop: 25 },
    },
    "& button": {
      padding: "19px 33px 17px",
      "@media(max-width: 420px)": { marginTop: 15 },
    },
    "& img": {
      width: 410,
    },
  },
  signUpWrapper: {
    maxWidth: 1215,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > div": {
      width: "100%",
      "&:last-of-type": {
        "@media(max-width:1024px)": {
          marginTop: 25,
        },
      },
      "@media(max-width:1024px)": {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
    },
    "@media(max-width:1280px)": {
      maxWidth: "95%",
    },
    "@media(max-width:1024px)": {
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});
