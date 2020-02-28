import BannerBgImg from "shared/dist/assets/images/stakeBanner.png";

export const useStyles = MUITheme => ({
  howItWorksContainer: { backgroundColor: MUITheme.palette.background.mainContent },
  bannerContainer: {
    backgroundImage: `url(${BannerBgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bannerDesFormContainer: {
    maxWidth: "1230px",
    margin: "24px auto",
    display: "flex",
    "& > div": {
      [MUITheme.breakpoints.down("md")]: {
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
    [MUITheme.breakpoints.down("md")]: {
      maxWidth: "100%",
      padding: "0 15px",
      flexDirection: "column",
    },
  },
  bannerTitle: {
    color: MUITheme.palette.text.white,
    fontSize: 36,
    fontWeight: 600,
    letterSpacing: -0.56,
    lineHeight: "48px",
  },
  bannerDescPara1: {
    paddingTop: 44,
    color: MUITheme.palette.text.white,
    fontSize: 22,
    fontWeight: 600,
    lineHeight: "32px",
    [MUITheme.breakpoints.down("md")]: { paddingTop: 15 },
  },
  bannerDescPara2: {
    paddingTop: 48,
    color: MUITheme.palette.text.white,
    fontSize: 22,
    fontWeight: 200,
    lineHeight: "32px",
    textShadow: "0 2px 2px rgba(0,0,0,0.3)",
    [MUITheme.breakpoints.down("md")]: { paddingTop: 15 },
  },
  bannerForm: {
    paddingLeft: 24,
    [MUITheme.breakpoints.down("md")]: {
      maxWidth: "100%",
      paddingLeft: 0,
      marginTop: 25,
      display: "flex",
      justifyContent: "center",
      flexBasis: "100%",
    },
  },
  form: {
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
    [MUITheme.breakpoints.down("md")]: { width: 628 },
    "@media(max-width: 675px)": { width: "100%" },
  },
  formHeader: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    textAlign: "center",
    "& p": {
      color: MUITheme.palette.text.darkGrey,
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "50px",
    },
  },
  stakedRewardAmt: {
    padding: "24px 22px 0",
    display: "flex",
    alignItems: "flex-start",
    "& > div": {
      width: 240,
      "& > div": {
        maxWidth: "100%",
        flexBasis: "100%",
        "& .MuiTextField-root": { marginTop: 0 },
      },
    },
    "& svg": {
      padding: "13px 33px 0",
      color: "#d6d6d6",
      fontSize: 33,
      "@media(max-width: 640px)": { padding: "13px 5px 0" },
    },
  },
  stakingDetails: {
    padding: "0 22px",
    display: "flex",
    "& svg": {
      color: "#d6d6d6",
      fontSize: 20,
    },
    "@media(max-width: 640px)": {
      flexDirection: "column",
      "& > div": { marginTop: 15 },
    },
  },
  iconTitlContainer: {
    display: "flex",
    "& p": {
      padding: "0 0 8px 8px",
      color: MUITheme.palette.text.darkGrey,
      fontSize: 16,
      lineHeight: "20px",
    },
  },
  valuesConatiner: {
    width: 175,
    padding: "15px 0",
    border: "1px solid #828282",
    borderRadius: 4,
    marginRight: 17,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  values: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  unit: {
    paddingLeft: 8,
    color: MUITheme.palette.text.darkGrey,
    fontSize: 12,
    lineHeight: "15px",
  },
  incubationValuesConatiner: {
    padding: "15px 44px",
    border: "1px solid #828282",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    "@media(max-width: 640px)": {
      width: 180,
      padding: "15px 0",
    },
  },
  formBtnContainer: {
    padding: "31px 0 29px",
    display: "flex",
    justifyContent: "center",
  },
  countDownContainer: {
    padding: "11px 15px",
    borderRadius: "0 4px 4px 4px",
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(34,13,58,0.6)",
    [MUITheme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  countDownTitle: {
    paddingRight: 61,
    display: "flex",
    alignItems: "center",
    "& svg": {
      paddingRight: 15,
      color: MUITheme.palette.text.white,
      fontSize: 22,
    },
    "& p": {
      color: MUITheme.palette.text.white,
      fontSize: 28,
      lineHeight: "35px",
      "&:first-of-type": { fontWeight: 200 },
      "&:last-of-type": {
        paddingLeft: 5,
        fontWeight: 600,
      },
      "@media(max-width:480px)": { fontSize: 24 },
    },
    "@media(max-width:480px)": {
      paddingRight: 0,
      marginBottom: 15,
    },
  },
  countDownValue: {
    color: MUITheme.palette.text.white,
    fontSize: 50,
    lineHeight: "63px",
    "@media(max-width:480px)": { fontSize: 42 },
  },
  countDownUnit: {
    color: MUITheme.palette.text.white,
    fontSize: 14,
    lineHeight: "21px",
    textTransform: "uppercase",
    "@media(max-width:480px)": { fontSize: 12 },
  },
  countDown: {
    display: "flex",
    "& > div": {
      padding: "0 31px",
      borderRightWidth: 0.5,
      borderRightStyle: "solid",
      borderRightColor: MUITheme.palette.text.white,
      textAlign: "center",
      "&:first-of-type": { paddingLeft: 0 },
      "&:last-of-type": {
        paddingRight: 0,
        borderRight: "none",
      },
      "@media(max-width:480px)": { padding: "0 15px" },
    },
  },

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
          paddingTop: 5,
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
    padding: "33px 15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(34,13,58,0.87)",
    textAlign: "center",
    "& p": {
      color: MUITheme.palette.text.white,
      fontSize: 20,
      fontWeight: 200,
      letterSpacing: 0.19,
      lineHeight: "24px",
    },
    "& form": {
      height: "100%",
      display: "flex",
      [MUITheme.breakpoints.down("sm")]: { marginTop: 25 },
    },
    "& input": {
      boxSizing: "border-box",
      width: 255,
      padding: "0 15px",
      border: "none",
      borderRadius: 2,
      margin: "0 8px 0 13px",
      "@media(max-width: 480px)": { width: "100%" },
    },
    "& button": { padding: "19px 33px 17px" },
    [MUITheme.breakpoints.down("sm")]: { flexDirection: "column" },
  },

  // How It Works
  howItWorksSection: {
    padding: "64px 14%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [MUITheme.breakpoints.down("sm")]: { padding: "34px 15px" },
  },
  howItWorksDesc: {
    padding: "32px 0",
    color: "#616161",
    fontSize: 18,
    lineHeight: "28px",
  },

  // Titles
  titlesContainer: {
    padding: "0 62px 64px",
    "& ul": {
      padding: 0,
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
    [MUITheme.breakpoints.down("md")]: { padding: "0 15px 64px" },
  },
});
